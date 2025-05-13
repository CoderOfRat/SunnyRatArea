
首先执行
npm i xxx
随后执行：
npx get-npm-tgz -c

即可生成依赖的tgz文件夹

再使用nexus上传接口，进行npm包上传

```shell
#!/bin/bash
targetDir=./tgz
publishRestful=http://XXXX:8081/service/rest/v1/components?reposity=npm-bendi
echo ">>> 文件所在目录:$targetDir <<<"
dir=$(ls -l $targetDir | awk '/.tgz$/ {print $NF}')
cd $targetDir

for file in $dir
do
  echo ">>> $targetDir/$file 上传开始 \n"
  ret=`curl -u admin:password -X POST "$publishRestful" -H "Accept: application/json" -H "Content-Type: multipart/form-data" -F "npm.asset=@$file;type=application/x-compressed"`
  echo $ret
  echo ">>> $targetDir/$file 上传完成 \n"
done 
```