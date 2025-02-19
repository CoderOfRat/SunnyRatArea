# GoLang Learning

### Golang官网入门文档
#### 1. Go程序包获取/安装/卸载
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
#### 2. 开始使用go进行代码编写
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

#### 3. 调用外部包中的代码（导入模块、或内部模块）
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
国内执行`go mod tidy`一般会下载失败，这时候我们修改默认代理环境变量，需要找到go的安装目录中的`go.env`文件进行修改，修改如下：

``` bash
# GOPROXY=https://proxy.golang.org,direct
GOPROXY=https://goproxy.cn,direct
# 如果失效，自行百度
```

完成上述的编码及配置，并下载完毕后，执行`go run .`，即可看到打印出有关通信的语录

#### 4. 创建本地Module
... 未完待续 ...

如果使用的包，尚未发布，比如是自己本地的module，则需要修改指定mod为的索引地址为指定目录，以便识别

```shell
go mod edit -replace example.com/greetings=../greetings
```

