---
title: 正则表达式(Regular Expression)
authors: [CoderOfRat]
tags: [正则表达式]
---

## 正则表达式(Regular Expression)

###  一、正则表达式是什么？

 匹配想要的东西
 为什么使用正则表达式：可以
 1.测试字符串内的模式
 2.替换文本
 3.基于模式匹配从字符串中提取字符串

### 二、.正则表达式的创建

 语法：
 var  reg=/内容/修饰词

 var  reg=new RegExp（pattern，modifiers）

 pattern：模式
 modifiers：修饰词

 方法：
 test（）
 验证字符串是否满足正则表达式

 exec（）
 

### 三、字符串的方法

 search（/haha/）
 根据正则表达式进行查找

 replace（/haha/，“hehe”）
 根据正则表达式进行查找替换

### 四、正则语法规则

 修饰词

 i     ignore      匹配时忽略大小写

 g     global      全局验证

 m                 验证多行


匹配模式

 小括号（）

 （abc）                        查找abc这个单词

 （abc|bcd|def）            查找这三个单词其中的一个

 中括号[]

 [ 12345]                          包括12345其中的某一个

 [abc]                包括abc其中的某一个

 [0-9]  包括所有数字

 [a-z]  包括所有小写字母

 [A-Z]  包括所有大写字母

 [A-z]  包括所有字母，Z-a之间包含一些特殊字符



元字符

 .
 表示所有的字符，想要验证”."用反斜杠\进行转义

 \d
 任何数字

 \D
 任何非数字

 \s
 空白字符

 \S
 非空白字符

 \w
 任何字母，数字，下划线

 \W
 任何非字母，数字，下划线


量词

 ^n
 匹配开头为n的字符串

 n$
 匹配结尾为n的字符串

 n+
 匹配一个或多个

 n(x)
 匹配任何包含x个n的字符串

 n(x,y)
 匹配任何包含x到n的字符串

 n(x,)
 匹配至少有x个指定字符

 n?
 表示有0个或一个指定字符

 n*
 表示有0个或多个指定字符


**例:**

####  1.验证手机号

 以1开头,判断第二位可以是3,5,6,7,8,9后面是9位数字

```jsx
btn1.onclick=function () {
            var reg1=/^1[356789]\d{9}$/
            var str1=ipt1.value
            if(reg1.test(str1)){
                alert('成功')
            }else{
                alert('不成')
            }
        }
```

#### 2.正则验证密码

 第一个字符是大写字母，最短8位，要求包括字母，数字

```jsx
btn2.onclick=function () {
            var reg2=/^[A-Z][a-zA-Z\d]{7,}$/
            var str2=ipt2.value
            if(reg2.test(str2)){
                alert('成功')
            }else{
                alert('不成')
            }
        }
```

#### 3.正则验证邮箱

 邮箱的名字是\w    中间@符号       @符号后面是数字或者字母        后面.com

```jsx
btn3.onclick=function () {
            var reg3=/^\w+@[0-9a-zA-Z]+(\.com)$/
            var str3=ipt3.value
            if(reg3.test(str3)){
                alert('成功')
            }else{
                alert('不成')
            }
        }
```

#### 4.正则验证身份证号

```jsx
btn4.onclick=function () {
            var reg4=/^\d{6}(19|20)\d{2}(0|1)\d(0|1|2|3)\d{4}(\d|X)$/
            var str4=ipt4.value
            if(reg4.test(str4)){
                alert('成功')
            }else{
                alert('不成')
            }
        }
```

#### 5.能够匹配“go go”和“abc abc”但不能匹配“go abc”的正则

```js
btn5.onclick=function () {
            var reg5=/(^\w{2}\s\w{2}$)|(^\w{3}\s\w{3}$)/
            var str5=ipt5.value
            if(reg5.test(str5)){
                alert('成功')
            }else{
                alert('不成')
            }
        }
```

