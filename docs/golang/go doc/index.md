# GoLang Learning
## Go编码前置知识
> go以包的形式组织代码，一个包（package）代表一个文件夹下一系列源文件的集合，他们会被一起编译，被定义在同个包下的方法（functions）、类型（types）、变量（variables）、常量（constants）,在该工作区下是共享可见的。

一个存储库，可以包含一个或者多个模块（modules）,一个模块是一系列一起发布的相关go包（packages）的集合。一个go存储库，通常只包含一个模块（module）,位于存储库的根目录。根目录下有个名为`go.mod`的文件声明了该模块的模块路径：模块内所有包的导入路径前缀。该模块包含其下级具有自己的`go.mod`文件的直属模块，不含直属模块下级包含`go.mod`文件的子目录。***（这个存疑，感觉文档写的英语有点绕，等后面在看到合适的解释，再修改）***

go工作空间，允许你使用本地依赖，类似于Monorepo模式下的工作空间，本地依赖可以最为实际依赖进行引入。

go包的导入path：`go.mod`文件中的首行`module example.com/web-service-gin`，不仅声明了包的名字，也表示了该包的下载地址应为：	`https://example.com/web-service-gin`。

在指定module内执行`go install`、`go install .`、`go install 该包的module path`，会build该包为二进制可执行文件到`GOBIN目录下`，如需修改/重置`GOBIN`环境变量配置，可通过以下命令：
``` shell
# 默认为 linux等:$HOME/go/bin windows: /users/XXX/go/bin
# 修改
go env -w GOBING=/somewhere/else/bin
# 重置
go env -u GOBIN
```
> `go install`这样的命令，需要在module包中执行，否则会报错，要区别于前端的`npm install`；为了方便起见，go 命令接受相对于工作目录的路径，所以在module包内指定`go.mod`位置，执行`go install`、`go install .`、`go install 该go.mod声明的module path`是等效的。

**环境变量`GOPATH`指定了go程序的工作区位置，`GOBING`环境变量也可配置为：`%GOPATH%/bin`**
添加go工作区位置到系统环境变量，则工作区内bin目录的二进制可执行文件即可快速在任何位置执行
``` shell
# Windows users should consult /wiki/SettingGOPATH 其实就是将 /users/xxx/go目录添加到环境变量
# for setting %PATH%. -- linux等
export PATH=$PATH:$(dirname $(go list -f '{{.Target}}' .))
hello
# Hello, world.
```

包名（module path）的命名规范，应可以直接匹配为：HTTPS URL，这样更有利于别人或者自己引用，也有助于代理服务收录。

如何引用本地包呢，可以创建一个本地包的形式进行演示：
在hello目录新建morestrings目录，该目录下新建`revers.go`,并键入如下代码：
``` go
// 引用官网示例
// Package morestrings implements additional functions to manipulate UTF-8 encoded strings, 
// beyond what is provided in the standard "strings" package.
package morestrings

// ReverseRunes returns its argument string reversed rune-wise left to right.
func ReverseRunes(s string) string {
    r := []rune(s)
    for i, j := 0, len(r)-1; i < len(r)/2; i, j = i+1, j-1 {
        r[i], r[j] = r[j], r[i]
    }
    return string(r)
}
```
> 由于我们编写的function使用了upper-case形式命名，所以他是一个被导出的方法，可以被引入他的其他包使用。

接下来可以在当前目录执行`go build`，这不会产生输出文件。相反，它会将编译后的包保存在本地构建缓存中。--这样我们就可以在其他包进行直接引用
然后我们可以在hello目录，新建主入口文件`hello.go`,并编写代码如下：
``` go
package main

import (
    "fmt"

    "example/user/hello/morestrings"
)

func main() {
    fmt.Println(morestrings.ReverseRunes("!oG ,olleH"))
}
```

随后执行`go install`，更新可执行二进制执行文件，完成后执行`hello`命令

``` shell
hello
# Hello, Go!
```

引入远程的包，则需要引入后执行`go mod tidy`进行远程包下载（已下载过的包就不会再次下载了），此命令还会删除没用到的包。

`go mod tidy`下载的包会被下载到`GOPATH`目录下的pkg/mod子目录中，被下载到这里的module，会共享到其他modules（如果引入的版本号一致）；所以此目录中的文件都是只读的。如需移除所有下载过的modules，则需要执行：
``` shell
go clean -modcache
```

Go 已经内部集成了一个由 go test 命令和测试包组成的轻量级测试框架。如需编写测试代码，可以参考如下官方提供代码：
``` go
package morestrings

import "testing"

func TestReverseRunes(t *testing.T) {
    cases := []struct {
        in, want string
    }{
        {"Hello, world", "dlrow ,olleH"},
        {"Hello, 世界", "界世 ,olleH"},
        {"", ""},
    }
    for _, c := range cases {
        got := ReverseRunes(c.in)
        if got != c.want {
            t.Errorf("ReverseRunes(%q) == %q, want %q", c.in, got, c.want)
        }
    }
}
```

然后在当前测试模块目录，执行以下命令：

``` shell
cd /hello/morestrings
go test
# PASS
# ok  	example/user/hello/morestrings 0.165s
```

*清楚以上内容后，对go的开发模式就有了基本来了解，接下来进一步深入go的基础开发过程，最后进阶web框架*

---

## Golang官网入门文档
### 1. Go程序包获取/安装/卸载
- 最简单的方法就是下载指定平台的二进制安装包进行安装 `https://go.dev/doc/install`
- 其次是源码编译安装 这个官网有详细文档，新学者不建议，真正熟悉golang后，如需开发高效基于go核心的包，再进行此方面研读
- 多版本管理，需要gitshell支撑，执行如下命令

``` shell
go install golang.org/dl/go1.10.7@latest

go1.10.7 download

go1.10.7 version
## go version go1.10.7 linux/amd64

go1.10.7 env GOROOT
## 可以查看此版本的环境变量目录
## 要卸载指定版本的go, 只需要通过此版本的环境变量找到指定目录的二进制包进行直接删除 更多平台卸载方式，可以参考官方
```
### 2. 开始使用go进行代码编写
1. 初始化工作空间

<p>在常用的工作目录新建文件夹，在此文件夹位置打开cmd/shell/bash等，执行如下脚本</p>

``` shell
mkdir hello
cd hello
# go mod 可以进行golang项目工作空间初始化工作
go mod init example/hello
# go: creating new go.mod: module example/hello
# go: to add module requirements and sums:
        # go mod tidy
```
执行后会发现，目录中生成了`go.mod`文件,
随后在当前目录新建`hello.go`文件，编写如下入门代码:
``` go
package main

import ("fmt")

func main() {
    fmt.Println("Hello World!")
}
```
保存后，终端执行`go run .`,终端打印`Hello World!`,标志着完成了go的第一个程序运行
> 注意点1：引入go包的方式，`import 'fmt'`、`import ('a/exmaple/mod' \n b/example/mod)` <br/> 
注意点2：main 函数一个包里只会有一个主入口函数

### 3. 调用外部包中的代码（导入模块、或内部模块）
> <a href="https://pkg.go.dev">go生态包检索：pkg.go.dev</a>

当开发过程中，需要使用其他已开发好的其他模块，我们需要这样做：

1. 在上述生态包检索页面搜索需要的包
2. 通过import关键字声明引入
3. 执行`go mod tidy`,等待模块下载完毕，即可在代码中使用

代码示例：

``` go
package main

import (
	"fmt"

	"rsc.io/quote/v4"
)

func main() {
	fmt.Println("Hello world!\n")

	fmt.Println(quote.Go())
}
```
> go mod tidy: 下载/关联/删除 当前目录下的依赖模块 类似`npm install`；国内执行`go mod tidy`一般会下载失败，这时候我们修改默认代理环境变量，需要找到go的安装目录中的`go.env`文件进行修改，修改如下：

``` bash
# GOPROXY=https://proxy.golang.org,direct
GOPROXY=https://goproxy.cn,direct ## 使用七牛云代理
# 如果失效，自行百度
```

或者执行以下脚本设置 下述方式优先级大于go.env文件配置，执行下面的脚本后，go.env文件的下载代理可以不用修改

``` shell
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct

# windows 环境亦可通过PowerShell设置环境变量，就不用执行上述脚本了,
$env:GO111MODULE = "on"
$env:GOPROXY = "https://goproxy.cn"
```

完成上述的编码及配置，并下载完毕后，执行go mod tidy,等待下载/或者关联完成后，执行`go run .`，即可看到打印出有关通信的语录

### 4. 创建本地Module
> Go code is grouped into packages, and packages are grouped into modules. 
您的模块(go.mod)指定运行代码所需的依赖项(first require)，还包括 Go 版本(go 1.24.0)和它所需的其他模块集(second require)。

- 进入工作目录

``` shell
cd yourworkspaceforgo
```

- 创建Go 模块代码目录

``` shell
mkdir greetings
```

- 使用`go mod init xxx`，初始化模块，类似于`npm init -y xxx`

``` shell
go mod init example.com/greetings
# go: creating new go.mod: module example.com/greetings
```

> `go mod init` 命令创建一个 `go.mod` 文件来跟踪代码的依赖关系，该文件中目前只包含 `模块名` 和 `当前模块支持的go版本号` 的相关声明；
但是当你添加依赖项时，`go.mod` 文件将列出你的代码所依赖的版本。这可以保持构建的可重复性，并让你直接控制要使用的模块版本。

- 在此目录中创建 `greetings.go` 文件，然后输入如下代码：

``` go
package greetings

import "fmt"

// Hello returns a greeting for the named person.
func Hello(name string) string {
    // Return a greeting that embeds the name in a message.
    message := fmt.Sprintf("Hi, %v. Welcome!", name)
    return message
}
```





... 未完待续 ...

如果使用的包，尚未发布，比如是自己本地的module，则需要修改指定mod为的索引地址为指定目录，以便识别

```shell
go mod edit -replace example.com/greetings=../greetings
```

