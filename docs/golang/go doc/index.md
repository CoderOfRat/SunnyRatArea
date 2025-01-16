# GoLang Learning

1. 官方文档学习记录

- 如果使用的包，尚未发布，比如是自己本地的module，则需要修改指定mod为的索引地址为指定目录，以便识别

```shell
go mod edit -replace example.com/greetings=../greetings
```

