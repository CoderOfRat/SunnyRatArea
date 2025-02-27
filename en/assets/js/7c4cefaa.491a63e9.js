"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3101],{54:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"golang/go doc/index","title":"GoLang Learning","description":"Go\u7f16\u7801\u524d\u7f6e\u77e5\u8bc6","source":"@site/docs/golang/go doc/index.md","sourceDirName":"golang/go doc","slug":"/golang/go doc/","permalink":"/SunnyRatArea/en/docs/golang/go doc/","draft":false,"unlisted":false,"editUrl":"https://github.com/CoderOfRat/SunnyRatArea/tree/main/docs/golang/go doc/index.md","tags":[],"version":"current","frontMatter":{},"sidebar":"golangSiderbar"}');var o=l(4848),r=l(8453);const i={},d="GoLang Learning",c={},t=[{value:"Go\u7f16\u7801\u524d\u7f6e\u77e5\u8bc6",id:"go\u7f16\u7801\u524d\u7f6e\u77e5\u8bc6",level:2},{value:"Golang\u5b98\u7f51\u5165\u95e8\u6587\u6863",id:"golang\u5b98\u7f51\u5165\u95e8\u6587\u6863",level:2},{value:"1. Go\u7a0b\u5e8f\u5305\u83b7\u53d6/\u5b89\u88c5/\u5378\u8f7d",id:"1-go\u7a0b\u5e8f\u5305\u83b7\u53d6\u5b89\u88c5\u5378\u8f7d",level:3},{value:"2. \u5f00\u59cb\u4f7f\u7528go\u8fdb\u884c\u4ee3\u7801\u7f16\u5199",id:"2-\u5f00\u59cb\u4f7f\u7528go\u8fdb\u884c\u4ee3\u7801\u7f16\u5199",level:3},{value:"3. \u8c03\u7528\u5916\u90e8\u5305\u4e2d\u7684\u4ee3\u7801\uff08\u5bfc\u5165\u6a21\u5757\u3001\u6216\u5185\u90e8\u6a21\u5757\uff09",id:"3-\u8c03\u7528\u5916\u90e8\u5305\u4e2d\u7684\u4ee3\u7801\u5bfc\u5165\u6a21\u5757\u6216\u5185\u90e8\u6a21\u5757",level:3},{value:"4. \u521b\u5efa\u672c\u5730Module",id:"4-\u521b\u5efa\u672c\u5730module",level:3},{value:"4.1 \u5728go\u4ee3\u7801\u4e2d\u4f7f\u7528\u5176\u4ed6\u6a21\u5757\u7684\u4ee3\u7801",id:"41-\u5728go\u4ee3\u7801\u4e2d\u4f7f\u7528\u5176\u4ed6\u6a21\u5757\u7684\u4ee3\u7801",level:4},{value:"4.2 \u9519\u8bef\u5904\u7406\u903b\u8f91",id:"42-\u9519\u8bef\u5904\u7406\u903b\u8f91",level:4},{value:"4.3 \u5229\u7528\u5207\u7247\uff08slice\uff09\uff0c\u5b9e\u73b0\u968f\u673a\u6253\u5370\u6b22\u8fce\u8bed",id:"43-\u5229\u7528\u5207\u7247slice\u5b9e\u73b0\u968f\u673a\u6253\u5370\u6b22\u8fce\u8bed",level:4},{value:"4.4 \u591a\u4eba\u6253\u62db\u547c\u7a0b\u5e8f",id:"44-\u591a\u4eba\u6253\u62db\u547c\u7a0b\u5e8f",level:4}];function g(e){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"golang-learning",children:"GoLang Learning"})}),"\n",(0,o.jsx)(n.h2,{id:"go\u7f16\u7801\u524d\u7f6e\u77e5\u8bc6",children:"Go\u7f16\u7801\u524d\u7f6e\u77e5\u8bc6"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"go\u4ee5\u5305\u7684\u5f62\u5f0f\u7ec4\u7ec7\u4ee3\u7801\uff0c\u4e00\u4e2a\u5305\uff08package\uff09\u4ee3\u8868\u4e00\u4e2a\u6587\u4ef6\u5939\u4e0b\u4e00\u7cfb\u5217\u6e90\u6587\u4ef6\u7684\u96c6\u5408\uff0c\u4ed6\u4eec\u4f1a\u88ab\u4e00\u8d77\u7f16\u8bd1\uff0c\u88ab\u5b9a\u4e49\u5728\u540c\u4e2a\u5305\u4e0b\u7684\u65b9\u6cd5\uff08functions\uff09\u3001\u7c7b\u578b\uff08types\uff09\u3001\u53d8\u91cf\uff08variables\uff09\u3001\u5e38\u91cf\uff08constants\uff09,\u5728\u8be5\u5de5\u4f5c\u533a\u4e0b\u662f\u5171\u4eab\u53ef\u89c1\u7684\u3002"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["\u4e00\u4e2a\u5b58\u50a8\u5e93\uff0c\u53ef\u4ee5\u5305\u542b\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u6a21\u5757\uff08modules\uff09,\u4e00\u4e2a\u6a21\u5757\u662f\u4e00\u7cfb\u5217\u4e00\u8d77\u53d1\u5e03\u7684\u76f8\u5173go\u5305\uff08packages\uff09\u7684\u96c6\u5408\u3002\u4e00\u4e2ago\u5b58\u50a8\u5e93\uff0c\u901a\u5e38\u53ea\u5305\u542b\u4e00\u4e2a\u6a21\u5757\uff08module\uff09,\u4f4d\u4e8e\u5b58\u50a8\u5e93\u7684\u6839\u76ee\u5f55\u3002\u6839\u76ee\u5f55\u4e0b\u6709\u4e2a\u540d\u4e3a",(0,o.jsx)(n.code,{children:"go.mod"}),"\u7684\u6587\u4ef6\u58f0\u660e\u4e86\u8be5\u6a21\u5757\u7684\u6a21\u5757\u8def\u5f84\uff1a\u6a21\u5757\u5185\u6240\u6709\u5305\u7684\u5bfc\u5165\u8def\u5f84\u524d\u7f00\u3002\u8be5\u6a21\u5757\u5305\u542b\u5176\u4e0b\u7ea7\u5177\u6709\u81ea\u5df1\u7684",(0,o.jsx)(n.code,{children:"go.mod"}),"\u6587\u4ef6\u7684\u76f4\u5c5e\u6a21\u5757\uff0c\u4e0d\u542b\u76f4\u5c5e\u6a21\u5757\u4e0b\u7ea7\u5305\u542b",(0,o.jsx)(n.code,{children:"go.mod"}),"\u6587\u4ef6\u7684\u5b50\u76ee\u5f55\u3002",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"\uff08\u8fd9\u4e2a\u5b58\u7591\uff0c\u611f\u89c9\u6587\u6863\u5199\u7684\u82f1\u8bed\u6709\u70b9\u7ed5\uff0c\u7b49\u540e\u9762\u5728\u770b\u5230\u5408\u9002\u7684\u89e3\u91ca\uff0c\u518d\u4fee\u6539\uff09"})})]}),"\n",(0,o.jsx)(n.p,{children:"go\u5de5\u4f5c\u7a7a\u95f4\uff0c\u5141\u8bb8\u4f60\u4f7f\u7528\u672c\u5730\u4f9d\u8d56\uff0c\u7c7b\u4f3c\u4e8eMonorepo\u6a21\u5f0f\u4e0b\u7684\u5de5\u4f5c\u7a7a\u95f4\uff0c\u672c\u5730\u4f9d\u8d56\u53ef\u4ee5\u6700\u4e3a\u5b9e\u9645\u4f9d\u8d56\u8fdb\u884c\u5f15\u5165\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["go\u5305\u7684\u5bfc\u5165path\uff1a",(0,o.jsx)(n.code,{children:"go.mod"}),"\u6587\u4ef6\u4e2d\u7684\u9996\u884c",(0,o.jsx)(n.code,{children:"module example.com/web-service-gin"}),"\uff0c\u4e0d\u4ec5\u58f0\u660e\u4e86\u5305\u7684\u540d\u5b57\uff0c\u4e5f\u8868\u793a\u4e86\u8be5\u5305\u7684\u4e0b\u8f7d\u5730\u5740\u5e94\u4e3a\uff1a\t",(0,o.jsx)(n.code,{children:"https://example.com/web-service-gin"}),"\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u6307\u5b9amodule\u5185\u6267\u884c",(0,o.jsx)(n.code,{children:"go install"}),"\u3001",(0,o.jsx)(n.code,{children:"go install ."}),"\u3001",(0,o.jsx)(n.code,{children:"go install \u8be5\u5305\u7684module path"}),"\uff0c\u4f1abuild\u8be5\u5305\u4e3a\u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u6587\u4ef6\u5230",(0,o.jsx)(n.code,{children:"GOBIN\u76ee\u5f55\u4e0b"}),"\uff0c\u5982\u9700\u4fee\u6539/\u91cd\u7f6e",(0,o.jsx)(n.code,{children:"GOBIN"}),"\u73af\u5883\u53d8\u91cf\u914d\u7f6e\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# \u9ed8\u8ba4\u4e3a linux\u7b49:$HOME/go/bin windows: /users/XXX/go/bin\n# \u4fee\u6539\ngo env -w GOBING=/somewhere/else/bin\n# \u91cd\u7f6e\ngo env -u GOBIN\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"go install"}),"\u8fd9\u6837\u7684\u547d\u4ee4\uff0c\u9700\u8981\u5728module\u5305\u4e2d\u6267\u884c\uff0c\u5426\u5219\u4f1a\u62a5\u9519\uff0c\u8981\u533a\u522b\u4e8e\u524d\u7aef\u7684",(0,o.jsx)(n.code,{children:"npm install"}),"\uff1b\u4e3a\u4e86\u65b9\u4fbf\u8d77\u89c1\uff0cgo \u547d\u4ee4\u63a5\u53d7\u76f8\u5bf9\u4e8e\u5de5\u4f5c\u76ee\u5f55\u7684\u8def\u5f84\uff0c\u6240\u4ee5\u5728module\u5305\u5185\u6307\u5b9a",(0,o.jsx)(n.code,{children:"go.mod"}),"\u4f4d\u7f6e\uff0c\u6267\u884c",(0,o.jsx)(n.code,{children:"go install"}),"\u3001",(0,o.jsx)(n.code,{children:"go install ."}),"\u3001",(0,o.jsx)(n.code,{children:"go install \u8be5go.mod\u58f0\u660e\u7684module path"}),"\u662f\u7b49\u6548\u7684\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsxs)(n.strong,{children:["\u73af\u5883\u53d8\u91cf",(0,o.jsx)(n.code,{children:"GOPATH"}),"\u6307\u5b9a\u4e86go\u7a0b\u5e8f\u7684\u5de5\u4f5c\u533a\u4f4d\u7f6e\uff0c",(0,o.jsx)(n.code,{children:"GOBING"}),"\u73af\u5883\u53d8\u91cf\u4e5f\u53ef\u914d\u7f6e\u4e3a\uff1a",(0,o.jsx)(n.code,{children:"%GOPATH%/bin"})]}),"\n\u6dfb\u52a0go\u5de5\u4f5c\u533a\u4f4d\u7f6e\u5230\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\uff0c\u5219\u5de5\u4f5c\u533a\u5185bin\u76ee\u5f55\u7684\u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u6587\u4ef6\u5373\u53ef\u5feb\u901f\u5728\u4efb\u4f55\u4f4d\u7f6e\u6267\u884c"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# Windows users should consult /wiki/SettingGOPATH \u5176\u5b9e\u5c31\u662f\u5c06 /users/xxx/go\u76ee\u5f55\u6dfb\u52a0\u5230\u73af\u5883\u53d8\u91cf\n# for setting %PATH%. -- linux\u7b49\nexport PATH=$PATH:$(dirname $(go list -f '{{.Target}}' .))\nhello\n# Hello, world.\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u5305\u540d\uff08module path\uff09\u7684\u547d\u540d\u89c4\u8303\uff0c\u5e94\u53ef\u4ee5\u76f4\u63a5\u5339\u914d\u4e3a\uff1aHTTPS URL\uff0c\u8fd9\u6837\u66f4\u6709\u5229\u4e8e\u522b\u4eba\u6216\u8005\u81ea\u5df1\u5f15\u7528\uff0c\u4e5f\u6709\u52a9\u4e8e\u4ee3\u7406\u670d\u52a1\u6536\u5f55\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u4f55\u5f15\u7528\u672c\u5730\u5305\u5462\uff0c\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u672c\u5730\u5305\u7684\u5f62\u5f0f\u8fdb\u884c\u6f14\u793a\uff1a\n\u5728hello\u76ee\u5f55\u65b0\u5efamorestrings\u76ee\u5f55\uff0c\u8be5\u76ee\u5f55\u4e0b\u65b0\u5efa",(0,o.jsx)(n.code,{children:"revers.go"}),",\u5e76\u952e\u5165\u5982\u4e0b\u4ee3\u7801\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// \u5f15\u7528\u5b98\u7f51\u793a\u4f8b\n// Package morestrings implements additional functions to manipulate UTF-8 encoded strings, \n// beyond what is provided in the standard "strings" package.\npackage morestrings\n\n// ReverseRunes returns its argument string reversed rune-wise left to right.\nfunc ReverseRunes(s string) string {\n    r := []rune(s)\n    for i, j := 0, len(r)-1; i < len(r)/2; i, j = i+1, j-1 {\n        r[i], r[j] = r[j], r[i]\n    }\n    return string(r)\n}\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u7531\u4e8e\u6211\u4eec\u7f16\u5199\u7684function\u4f7f\u7528\u4e86upper-case\u5f62\u5f0f\u547d\u540d\uff0c\u6240\u4ee5\u4ed6\u662f\u4e00\u4e2a\u88ab\u5bfc\u51fa\u7684\u65b9\u6cd5\uff0c\u53ef\u4ee5\u88ab\u5f15\u5165\u4ed6\u7684\u5176\u4ed6\u5305\u4f7f\u7528\u3002"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\u53ef\u4ee5\u5728\u5f53\u524d\u76ee\u5f55\u6267\u884c",(0,o.jsx)(n.code,{children:"go build"}),"\uff0c\u8fd9\u4e0d\u4f1a\u4ea7\u751f\u8f93\u51fa\u6587\u4ef6\u3002\u76f8\u53cd\uff0c\u5b83\u4f1a\u5c06\u7f16\u8bd1\u540e\u7684\u5305\u4fdd\u5b58\u5728\u672c\u5730\u6784\u5efa\u7f13\u5b58\u4e2d\u3002--\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u5728\u5176\u4ed6\u5305\u8fdb\u884c\u76f4\u63a5\u5f15\u7528\n\u7136\u540e\u6211\u4eec\u53ef\u4ee5\u5728hello\u76ee\u5f55\uff0c\u65b0\u5efa\u4e3b\u5165\u53e3\u6587\u4ef6",(0,o.jsx)(n.code,{children:"hello.go"}),",\u5e76\u7f16\u5199\u4ee3\u7801\u5982\u4e0b\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "example/user/hello/morestrings"\n)\n\nfunc main() {\n    fmt.Println(morestrings.ReverseRunes("!oG ,olleH"))\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u968f\u540e\u6267\u884c",(0,o.jsx)(n.code,{children:"go install"}),"\uff0c\u66f4\u65b0\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u6267\u884c\u6587\u4ef6\uff0c\u5b8c\u6210\u540e\u6267\u884c",(0,o.jsx)(n.code,{children:"hello"}),"\u547d\u4ee4"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"hello\n# Hello, Go!\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u5f15\u5165\u8fdc\u7a0b\u7684\u5305\uff0c\u5219\u9700\u8981\u5f15\u5165\u540e\u6267\u884c",(0,o.jsx)(n.code,{children:"go mod tidy"}),"\u8fdb\u884c\u8fdc\u7a0b\u5305\u4e0b\u8f7d\uff08\u5df2\u4e0b\u8f7d\u8fc7\u7684\u5305\u5c31\u4e0d\u4f1a\u518d\u6b21\u4e0b\u8f7d\u4e86\uff09\uff0c\u6b64\u547d\u4ee4\u8fd8\u4f1a\u5220\u9664\u6ca1\u7528\u5230\u7684\u5305\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"go mod tidy"}),"\u4e0b\u8f7d\u7684\u5305\u4f1a\u88ab\u4e0b\u8f7d\u5230",(0,o.jsx)(n.code,{children:"GOPATH"}),"\u76ee\u5f55\u4e0b\u7684pkg/mod\u5b50\u76ee\u5f55\u4e2d\uff0c\u88ab\u4e0b\u8f7d\u5230\u8fd9\u91cc\u7684module\uff0c\u4f1a\u5171\u4eab\u5230\u5176\u4ed6modules\uff08\u5982\u679c\u5f15\u5165\u7684\u7248\u672c\u53f7\u4e00\u81f4\uff09\uff1b\u6240\u4ee5\u6b64\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u90fd\u662f\u53ea\u8bfb\u7684\u3002\u5982\u9700\u79fb\u9664\u6240\u6709\u4e0b\u8f7d\u8fc7\u7684modules\uff0c\u5219\u9700\u8981\u6267\u884c\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"go clean -modcache\n"})}),"\n",(0,o.jsx)(n.p,{children:"Go \u5df2\u7ecf\u5185\u90e8\u96c6\u6210\u4e86\u4e00\u4e2a\u7531 go test \u547d\u4ee4\u548c\u6d4b\u8bd5\u5305\u7ec4\u6210\u7684\u8f7b\u91cf\u7ea7\u6d4b\u8bd5\u6846\u67b6\u3002\u5982\u9700\u7f16\u5199\u6d4b\u8bd5\u4ee3\u7801\uff0c\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u5b98\u65b9\u63d0\u4f9b\u4ee3\u7801\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package morestrings\n\nimport "testing"\n\nfunc TestReverseRunes(t *testing.T) {\n    cases := []struct {\n        in, want string\n    }{\n        {"Hello, world", "dlrow ,olleH"},\n        {"Hello, \u4e16\u754c", "\u754c\u4e16 ,olleH"},\n        {"", ""},\n    }\n    for _, c := range cases {\n        got := ReverseRunes(c.in)\n        if got != c.want {\n            t.Errorf("ReverseRunes(%q) == %q, want %q", c.in, got, c.want)\n        }\n    }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u7136\u540e\u5728\u5f53\u524d\u6d4b\u8bd5\u6a21\u5757\u76ee\u5f55\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"cd /hello/morestrings\ngo test\n# PASS\n# ok  \texample/user/hello/morestrings 0.165s\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"\u6e05\u695a\u4ee5\u4e0a\u5185\u5bb9\u540e\uff0c\u5bf9go\u7684\u5f00\u53d1\u6a21\u5f0f\u5c31\u6709\u4e86\u57fa\u672c\u6765\u4e86\u89e3\uff0c\u63a5\u4e0b\u6765\u8fdb\u4e00\u6b65\u6df1\u5165go\u7684\u57fa\u7840\u5f00\u53d1\u8fc7\u7a0b\uff0c\u6700\u540e\u8fdb\u9636web\u6846\u67b6"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"golang\u5b98\u7f51\u5165\u95e8\u6587\u6863",children:"Golang\u5b98\u7f51\u5165\u95e8\u6587\u6863"}),"\n",(0,o.jsx)(n.h3,{id:"1-go\u7a0b\u5e8f\u5305\u83b7\u53d6\u5b89\u88c5\u5378\u8f7d",children:"1. Go\u7a0b\u5e8f\u5305\u83b7\u53d6/\u5b89\u88c5/\u5378\u8f7d"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u5c31\u662f\u4e0b\u8f7d\u6307\u5b9a\u5e73\u53f0\u7684\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305\u8fdb\u884c\u5b89\u88c5 ",(0,o.jsx)(n.code,{children:"https://go.dev/doc/install"})]}),"\n",(0,o.jsx)(n.li,{children:"\u5176\u6b21\u662f\u6e90\u7801\u7f16\u8bd1\u5b89\u88c5 \u8fd9\u4e2a\u5b98\u7f51\u6709\u8be6\u7ec6\u6587\u6863\uff0c\u65b0\u5b66\u8005\u4e0d\u5efa\u8bae\uff0c\u771f\u6b63\u719f\u6089golang\u540e\uff0c\u5982\u9700\u5f00\u53d1\u9ad8\u6548\u57fa\u4e8ego\u6838\u5fc3\u7684\u5305\uff0c\u518d\u8fdb\u884c\u6b64\u65b9\u9762\u7814\u8bfb"}),"\n",(0,o.jsx)(n.li,{children:"\u591a\u7248\u672c\u7ba1\u7406\uff0c\u9700\u8981gitshell\u652f\u6491\uff0c\u6267\u884c\u5982\u4e0b\u547d\u4ee4"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"go install golang.org/dl/go1.10.7@latest\n\ngo1.10.7 download\n\ngo1.10.7 version\n## go version go1.10.7 linux/amd64\n\ngo1.10.7 env GOROOT\n## \u53ef\u4ee5\u67e5\u770b\u6b64\u7248\u672c\u7684\u73af\u5883\u53d8\u91cf\u76ee\u5f55\n## \u8981\u5378\u8f7d\u6307\u5b9a\u7248\u672c\u7684go, \u53ea\u9700\u8981\u901a\u8fc7\u6b64\u7248\u672c\u7684\u73af\u5883\u53d8\u91cf\u627e\u5230\u6307\u5b9a\u76ee\u5f55\u7684\u4e8c\u8fdb\u5236\u5305\u8fdb\u884c\u76f4\u63a5\u5220\u9664 \u66f4\u591a\u5e73\u53f0\u5378\u8f7d\u65b9\u5f0f\uff0c\u53ef\u4ee5\u53c2\u8003\u5b98\u65b9\n"})}),"\n",(0,o.jsx)(n.h3,{id:"2-\u5f00\u59cb\u4f7f\u7528go\u8fdb\u884c\u4ee3\u7801\u7f16\u5199",children:"2. \u5f00\u59cb\u4f7f\u7528go\u8fdb\u884c\u4ee3\u7801\u7f16\u5199"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\u521d\u59cb\u5316\u5de5\u4f5c\u7a7a\u95f4"}),"\n"]}),"\n",(0,o.jsx)("p",{children:"\u5728\u5e38\u7528\u7684\u5de5\u4f5c\u76ee\u5f55\u65b0\u5efa\u6587\u4ef6\u5939\uff0c\u5728\u6b64\u6587\u4ef6\u5939\u4f4d\u7f6e\u6253\u5f00cmd/shell/bash\u7b49\uff0c\u6267\u884c\u5982\u4e0b\u811a\u672c"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"mkdir hello\ncd hello\n# go mod \u53ef\u4ee5\u8fdb\u884cgolang\u9879\u76ee\u5de5\u4f5c\u7a7a\u95f4\u521d\u59cb\u5316\u5de5\u4f5c\ngo mod init example/hello\n# go: creating new go.mod: module example/hello\n# go: to add module requirements and sums:\n        # go mod tidy\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u6267\u884c\u540e\u4f1a\u53d1\u73b0\uff0c\u76ee\u5f55\u4e2d\u751f\u6210\u4e86",(0,o.jsx)(n.code,{children:"go.mod"}),"\u6587\u4ef6,\n\u968f\u540e\u5728\u5f53\u524d\u76ee\u5f55\u65b0\u5efa",(0,o.jsx)(n.code,{children:"hello.go"}),"\u6587\u4ef6\uff0c\u7f16\u5199\u5982\u4e0b\u5165\u95e8\u4ee3\u7801:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport ("fmt")\n\nfunc main() {\n    fmt.Println("Hello World!")\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u4fdd\u5b58\u540e\uff0c\u7ec8\u7aef\u6267\u884c",(0,o.jsx)(n.code,{children:"go run ."}),",\u7ec8\u7aef\u6253\u5370",(0,o.jsx)(n.code,{children:"Hello World!"}),",\u6807\u5fd7\u7740\u5b8c\u6210\u4e86go\u7684\u7b2c\u4e00\u4e2a\u7a0b\u5e8f\u8fd0\u884c"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u6ce8\u610f\u70b91\uff1a\u5f15\u5165go\u5305\u7684\u65b9\u5f0f\uff0c",(0,o.jsx)(n.code,{children:"import 'fmt'"}),"\u3001",(0,o.jsx)(n.code,{children:"import ('a/exmaple/mod' \\n b/example/mod)"})," ",(0,o.jsx)("br",{}),"\n\u6ce8\u610f\u70b92\uff1amain \u51fd\u6570\u4e00\u4e2a\u5305\u91cc\u53ea\u4f1a\u6709\u4e00\u4e2a\u4e3b\u5165\u53e3\u51fd\u6570"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"3-\u8c03\u7528\u5916\u90e8\u5305\u4e2d\u7684\u4ee3\u7801\u5bfc\u5165\u6a21\u5757\u6216\u5185\u90e8\u6a21\u5757",children:"3. \u8c03\u7528\u5916\u90e8\u5305\u4e2d\u7684\u4ee3\u7801\uff08\u5bfc\u5165\u6a21\u5757\u3001\u6216\u5185\u90e8\u6a21\u5757\uff09"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)("a",{href:"https://pkg.go.dev",children:"go\u751f\u6001\u5305\u68c0\u7d22\uff1apkg.go.dev"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u5f53\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u9700\u8981\u4f7f\u7528\u5176\u4ed6\u5df2\u5f00\u53d1\u597d\u7684\u5176\u4ed6\u6a21\u5757\uff0c\u6211\u4eec\u9700\u8981\u8fd9\u6837\u505a\uff1a"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\u5728\u4e0a\u8ff0\u751f\u6001\u5305\u68c0\u7d22\u9875\u9762\u641c\u7d22\u9700\u8981\u7684\u5305"}),"\n",(0,o.jsx)(n.li,{children:"\u901a\u8fc7import\u5173\u952e\u5b57\u58f0\u660e\u5f15\u5165"}),"\n",(0,o.jsxs)(n.li,{children:["\u6267\u884c",(0,o.jsx)(n.code,{children:"go mod tidy"}),",\u7b49\u5f85\u6a21\u5757\u4e0b\u8f7d\u5b8c\u6bd5\uff0c\u5373\u53ef\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u4ee3\u7801\u793a\u4f8b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\n\t"rsc.io/quote/v4"\n)\n\nfunc main() {\n\tfmt.Println("Hello world!\\n")\n\n\tfmt.Println(quote.Go())\n}\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["go mod tidy: \u4e0b\u8f7d/\u5173\u8054/\u5220\u9664 \u5f53\u524d\u76ee\u5f55\u4e0b\u7684\u4f9d\u8d56\u6a21\u5757 \u7c7b\u4f3c",(0,o.jsx)(n.code,{children:"npm install"}),"\uff1b\u56fd\u5185\u6267\u884c",(0,o.jsx)(n.code,{children:"go mod tidy"}),"\u4e00\u822c\u4f1a\u4e0b\u8f7d\u5931\u8d25\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u4fee\u6539\u9ed8\u8ba4\u4ee3\u7406\u73af\u5883\u53d8\u91cf\uff0c\u9700\u8981\u627e\u5230go\u7684\u5b89\u88c5\u76ee\u5f55\u4e2d\u7684",(0,o.jsx)(n.code,{children:"go.env"}),"\u6587\u4ef6\u8fdb\u884c\u4fee\u6539\uff0c\u4fee\u6539\u5982\u4e0b\uff1a"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# GOPROXY=https://proxy.golang.org,direct\nGOPROXY=https://goproxy.cn,direct ## \u4f7f\u7528\u4e03\u725b\u4e91\u4ee3\u7406\n# \u5982\u679c\u5931\u6548\uff0c\u81ea\u884c\u767e\u5ea6\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u6216\u8005\u6267\u884c\u4ee5\u4e0b\u811a\u672c\u8bbe\u7f6e \u4e0b\u8ff0\u65b9\u5f0f\u4f18\u5148\u7ea7\u5927\u4e8ego.env\u6587\u4ef6\u914d\u7f6e\uff0c\u6267\u884c\u4e0b\u9762\u7684\u811a\u672c\u540e\uff0cgo.env\u6587\u4ef6\u7684\u4e0b\u8f7d\u4ee3\u7406\u53ef\u4ee5\u4e0d\u7528\u4fee\u6539"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'go env -w GO111MODULE=on\ngo env -w GOPROXY=https://goproxy.cn,direct\n\n# windows \u73af\u5883\u4ea6\u53ef\u901a\u8fc7PowerShell\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u5c31\u4e0d\u7528\u6267\u884c\u4e0a\u8ff0\u811a\u672c\u4e86,\n$env:GO111MODULE = "on"\n$env:GOPROXY = "https://goproxy.cn"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5b8c\u6210\u4e0a\u8ff0\u7684\u7f16\u7801\u53ca\u914d\u7f6e\uff0c\u5e76\u4e0b\u8f7d\u5b8c\u6bd5\u540e\uff0c\u6267\u884cgo mod tidy,\u7b49\u5f85\u4e0b\u8f7d/\u6216\u8005\u5173\u8054\u5b8c\u6210\u540e\uff0c\u6267\u884c",(0,o.jsx)(n.code,{children:"go run ."}),"\uff0c\u5373\u53ef\u770b\u5230\u6253\u5370\u51fa\u6709\u5173\u901a\u4fe1\u7684\u8bed\u5f55"]}),"\n",(0,o.jsx)(n.h3,{id:"4-\u521b\u5efa\u672c\u5730module",children:"4. \u521b\u5efa\u672c\u5730Module"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Go code is grouped into packages, and packages are grouped into modules.\n\u60a8\u7684\u6a21\u5757(go.mod)\u6307\u5b9a\u8fd0\u884c\u4ee3\u7801\u6240\u9700\u7684\u4f9d\u8d56\u9879(first require)\uff0c\u8fd8\u5305\u62ec Go \u7248\u672c(go 1.24.0)\u548c\u5b83\u6240\u9700\u7684\u5176\u4ed6\u6a21\u5757\u96c6(second require)\u3002"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u8fdb\u5165\u5de5\u4f5c\u76ee\u5f55"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"cd yourworkspaceforgo\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u521b\u5efaGo \u6a21\u5757\u4ee3\u7801\u76ee\u5f55"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"mkdir greetings\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u4f7f\u7528",(0,o.jsx)(n.code,{children:"go mod init xxx"}),"\uff0c\u521d\u59cb\u5316\u6a21\u5757\uff0c\u7c7b\u4f3c\u4e8e",(0,o.jsx)(n.code,{children:"npm init -y xxx"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"go mod init example.com/greetings\n# go: creating new go.mod: module example.com/greetings\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"go mod init"})," \u547d\u4ee4\u521b\u5efa\u4e00\u4e2a ",(0,o.jsx)(n.code,{children:"go.mod"})," \u6587\u4ef6\u6765\u8ddf\u8e2a\u4ee3\u7801\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u8be5\u6587\u4ef6\u4e2d\u76ee\u524d\u53ea\u5305\u542b ",(0,o.jsx)(n.code,{children:"\u6a21\u5757\u540d"})," \u548c ",(0,o.jsx)(n.code,{children:"\u5f53\u524d\u6a21\u5757\u652f\u6301\u7684go\u7248\u672c\u53f7"})," \u7684\u76f8\u5173\u58f0\u660e\uff1b\n\u4f46\u662f\u5f53\u4f60\u6dfb\u52a0\u4f9d\u8d56\u9879\u65f6\uff0c",(0,o.jsx)(n.code,{children:"go.mod"})," \u6587\u4ef6\u5c06\u5217\u51fa\u4f60\u7684\u4ee3\u7801\u6240\u4f9d\u8d56\u7684\u7248\u672c\u3002\u8fd9\u53ef\u4ee5\u4fdd\u6301\u6784\u5efa\u7684\u53ef\u91cd\u590d\u6027\uff0c\u5e76\u8ba9\u4f60\u76f4\u63a5\u63a7\u5236\u8981\u4f7f\u7528\u7684\u6a21\u5757\u7248\u672c\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u5728\u6b64\u76ee\u5f55\u4e2d\u521b\u5efa ",(0,o.jsx)(n.code,{children:"greetings.go"})," \u6587\u4ef6\uff0c\u7136\u540e\u8f93\u5165\u5982\u4e0b\u4ee3\u7801\uff1a"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package greetings\n\nimport "fmt"\n\n// Hello returns a greeting for the named person.\nfunc Hello(name string) string {\n    // Return a greeting that embeds the name in a message.\n    message := fmt.Sprintf("Hi, %v. Welcome!", name)\n    return message\n}\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u5728Go\u4e2d\uff0c\u540d\u79f0\u4ee5\u5927\u5199\u5b57\u6bcd\u5f00\u5934\u7684\u51fd\u6570\u53ef\u4ee5\u88ab\u4e0d\u5728\u540c\u4e00\u5305\u4e2d\u7684\u51fd\u6570\u8c03\u7528\u3002\n\u5728 Go \u4e2d\uff0c:= \u8fd0\u7b97\u7b26\u662f\u4e00\u79cd\u5728\u4e00\u884c\u4e2d\u58f0\u660e\u548c\u521d\u59cb\u5316\u53d8\u91cf\u7684\u5feb\u6377\u65b9\u5f0f\uff08Go \u4f7f\u7528\u53f3\u4fa7\u7684\u503c\u6765\u786e\u5b9a\u53d8\u91cf\u7684\u7c7b\u578b\uff09\u3002\n\u4ece\u957f\u8fdc\u6765\u770b\uff0c\u60a8\u53ef\u80fd\u4f1a\u5c06\u5176\u5199\u6210\uff1a"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'var message string\n\nmessage = fmt.Printf("Hi, %v. Welcome!", name)\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"\u4ee5\u4e0a\u5185\u5bb9\uff0c\u521b\u5efa\u4e86\u7b2c\u4e00\u4e2a\u5411\u5916\u66b4\u9732\u51fd\u6570\u7684module\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u53ef\u4ee5\u5728\u5176\u4ed6\u6a21\u5757\u5f15\u5165\u6211\u4eec\u521b\u5efa\u7684module\u3002"})}),"\n",(0,o.jsx)(n.h4,{id:"41-\u5728go\u4ee3\u7801\u4e2d\u4f7f\u7528\u5176\u4ed6\u6a21\u5757\u7684\u4ee3\u7801",children:"4.1 \u5728go\u4ee3\u7801\u4e2d\u4f7f\u7528\u5176\u4ed6\u6a21\u5757\u7684\u4ee3\u7801"}),"\n",(0,o.jsxs)(n.p,{children:["\u65b0\u5efa\u6a21\u5757\u76ee\u5f55 ",(0,o.jsx)(n.code,{children:"hello"}),"\uff0c\u521d\u59cb\u5316\u540e\uff0c\u5f15\u5165\u4e4b\u524d\u521b\u5efa\u7684module"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"cd ..\n\nmkdir hello\n\ncd hello\n\ngo mod init github.com/coderofrat/hello\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u65b0\u5efa",(0,o.jsx)(n.code,{children:"hello.go"}),",\u952e\u5165\u5982\u4e0b\u4ee3\u7801\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\n\t"rsc.io/quote/v4"\n\n\t"example.com/greetings"\n)\n\nfunc main() {\n\tfmt.Println("Hello world!")\n\n\tfmt.Println(quote.Go())\n\n\tfmt.Println(greetings.Hello("CoderOfRat"))\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u6b64\u65f6\u6267\u884c",(0,o.jsx)(n.code,{children:"go mod tidy"}),"\uff0c\u5c06\u4f1a\u63d0\u793a\u627e\u4e0d\u5230",(0,o.jsx)(n.code,{children:"example.com/greetings"}),"\u6a21\u5757\uff1a"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u7531\u4e8e\u5f15\u5165\u7684",(0,o.jsx)(n.code,{children:"example.com/greetings"}),"\u5305\u5c1a\u672a\u53d1\u5e03\uff0c\u56e0\u6b64\u4e3a\u4e86\u672c\u5730\u9002\u7528\u6b64\u6a21\u5757\uff0c\u6211\u4eec\u9700\u8981\u8fdb\u884c\u8def\u5f84\u6307\u5b9a\uff0c\u8ba9\u4f9d\u8d56\u6a21\u5757\u53ef\u4ee5\u7d22\u5f15\u5230\u672c\u5730\u6a21\u5757\u3002\n\u5982\u679c\u8981\u4f7f\u7528\u7684\u5305\uff0c\u5c1a\u672a\u53d1\u5e03\uff0c\u6bd4\u5982\u662f\u81ea\u5df1\u672c\u5730\u7684module\uff0c\u6267\u884c",(0,o.jsx)(n.code,{children:"go mod edit -replaace example.com/greetings=../greetings"}),",\u53ef\u4ee5\u544a\u8bc9go tools\u9488\u5bf9\u6b64module\u9700\u8981\u91cd\u5b9a\u5411\u7d22\u5f15\u4f4d\u7f6e\u3002\u8be5\u547d\u4ee4\u6307\u5b9a\u4e86\u5e94\u5c06 example.com/greetings \u66ff\u6362\u4e3a ../greetings\uff0c\u4ee5\u4fbf\u5b9a\u4f4d\u4f9d\u8d56\u9879\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"go mod edit -replace example.com/greetings=../greetings\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u8fd0\u884c\u8be5\u547d\u4ee4\u540e\uff0c",(0,o.jsx)(n.code,{children:"hello"}),"\u76ee\u5f55\u4e2d\u7684",(0,o.jsx)(n.code,{children:"go.mod"}),"\u6587\u4ef6\u5e94\u5305\u542b\u4e00\u4e2a",(0,o.jsx)(n.code,{children:"replace"}),"\u6307\u4ee4\uff1a"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u6a21\u5757\u8def\u5f84\u540e\u9762\u7684\u6570\u5b57\u662f\u4f2a\u7248\u672c\u53f7\u2014\u2014\u7528\u6765\u4ee3\u66ff\u8bed\u4e49\u7248\u672c\u53f7\u6240\u751f\u6210\u7684\u6570\u5b57"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"module github.com/coderofrat/hello\n\ngo 1.24.0\n\nrequire (\n\texample.com/greetings v0.0.0-00010101000000-000000000000\n\trsc.io/quote/v4 v4.0.1\n)\n\nrequire (\n\tgolang.org/x/text v0.22.0 // indirect\n\trsc.io/sampler v1.3.0 // indirect\n)\n\nreplace example.com/greetings => ../greetings\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u4ece ",(0,o.jsx)(n.code,{children:"hello"})," \u76ee\u5f55\u4e2d\u7684\u547d\u4ee4\u63d0\u793a\u7b26\u4e2d\uff0c\u8fd0\u884c ",(0,o.jsx)(n.code,{children:"go mod tidy"})," \u547d\u4ee4\u6765\u540c\u6b65 ",(0,o.jsx)(n.code,{children:"example.com/hello"})," \u6a21\u5757\u7684\u4f9d\u8d56\u9879\uff0c\u6dfb\u52a0\u4ee3\u7801\u6240\u9700\u4f46\u5c1a\u672a\u5728\u6a21\u5757\u4e2d\u8ddf\u8e2a\u7684\u4f9d\u8d56\u9879\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ go mod tidy\ngo: found example.com/greetings in example.com/greetings v0.0.0-00010101000000-000000000000\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u6267\u884c\u540e\uff0c",(0,o.jsx)(n.code,{children:"go.mod"})," \u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"module example.com/hello\n\ngo 1.24.0\n\nreplace example.com/greetings => ../greetings\n\nrequire example.com/greetings v0.0.0-00010101000000-000000000000\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u968f\u540e\u6267\u884c",(0,o.jsx)(n.code,{children:"go run ."}),",\u8f93\u51fa\u5982\u4e0b\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"go run .\n# Hello world!\n# Don't communicate by sharing memory, share memory by communicating.\n# Hi, CoderOfRat. Welcome!\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"go run .",src:l(5317).A+"",width:"2026",height:"1139"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"\u81f3\u6b64\uff0c\u5df2\u7ecf\u5b8c\u6210\u4e86\u4e24\u4e2a\u53ef\u8fd0\u884c\u6a21\u5757\u7684\u7f16\u5199/\u8fd0\u884c\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u6765\u7ed9\u4ee3\u7801\u6dfb\u52a0\u4e00\u4e9b\u9519\u8bef\u5904\u7406\u903b\u8f91"})}),"\n",(0,o.jsx)(n.h4,{id:"42-\u9519\u8bef\u5904\u7406\u903b\u8f91",children:"4.2 \u9519\u8bef\u5904\u7406\u903b\u8f91"}),"\n",(0,o.jsxs)(n.p,{children:["\u4ee3\u7801\u7684\u9519\u8bef\u5904\u7406\u903b\u8f91\uff0c\u662f\u8ba9go\u4ee3\u7801\u4fdd\u6301\u5065\u58ee\u7684\u57fa\u672c\u8981\u7d20\uff0c\u6211\u4eec\u7ed9\u4e4b\u524d\u7684",(0,o.jsx)(n.code,{children:"greetings"}),"\u6a21\u5757\u6dfb\u52a0\u9519\u8bef\u5904\u7406\u7684\u76f8\u5173\u4ee3\u7801\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package greetings\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\n// Hello returns a greeting for the named person.\nfunc Hello(name string) (string, error) {\n\t// \u5982\u679cnames\u8f93\u5165\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u5219\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32\uff0c\u629b\u51fa\u5f02\u5e38\u4fe1\u606f(\u5f02\u5e38\u4fe1\u606f\u5f00\u5934\u9996\u5b57\u6bcd\u4e0d\u5141\u8bb8\u5927\u5199)\n\tif name == "" {\n\t\treturn "", errors.New("empty name provided")\n\t}\n\t// Return a greeting that embeds the name in a message.\n\tmessage := fmt.Sprintf("Hi, %v. Welcome!", name)\n    // \u5728\u6210\u529f\u8fd4\u56de\u65f6\u6dfb\u52a0 nil\uff08\u8868\u793a\u6ca1\u6709\u9519\u8bef\uff09\u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u503c\u3002\u8fd9\u6837\uff0c\u8c03\u7528\u8005\u5c31\u53ef\u4ee5\u770b\u5230\u51fd\u6570\u6210\u529f\u4e86\u3002\n\treturn message, nil\n}\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["go \u4ee3\u7801\u662f",(0,o.jsx)(n.strong,{children:"\u9759\u6001\u7c7b\u578b\u7f16\u8bd1\u578b"}),"\u8bed\u8a00\uff0c\u56e0\u6b64\u9519\u8bef\u7684\u7a0b\u5e8f\u8f93\u5165\u4e0d\u4f1a\u7f16\u8bd1\u6210\u529f\uff0c\u6240\u4ee5\u5f02\u5e38\u5904\u7406\u4e00\u822c\u4e0d\u8003\u8651\u6b64\u65b9\u9762\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["\u7136\u540e\u6211\u4eec\u5728\u4f7f\u7528\u66f4\u65b0\u540e\u7684",(0,o.jsx)(n.code,{children:"greetings"}),"\u5305\u7684\u65f6\u5019\uff0c\u5c31\u9700\u8981\u6dfb\u52a0\u5bf9\u5e94\u7684\u5f02\u5e38\u6355\u83b7\u4ee3\u7801\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"log"\n\n\t"rsc.io/quote/v4"\n\n\t"example.com/greetings"\n)\n\nfunc main() {\n\t// Set properties of the predefined Logger, including\n\t// the log entry prefix and a flag to disable printing\n\t// the time, source file, and line number.\n    // \u914d\u7f6e\u65e5\u5fd7\u5305\u4ee5\u5728\u5176\u65e5\u5fd7\u6d88\u606f\u7684\u5f00\u5934\u6253\u5370\u547d\u4ee4\u540d\u79f0\uff08\u201cgreetings:\u201d\uff09\uff0c\u4e0d\u5e26\u65f6\u95f4\u6233\u6216\u6e90\u6587\u4ef6\u4fe1\u606f\u3002\n\tlog.SetPrefix("greetings:")\n\tlog.SetFlags(0)\n\n\tfmt.Println("Hello world!")\n\n\tfmt.Println(quote.Go())\n\n\t// fmt.Println(greetings.Hello("CoderOfRat"))\n\tmessage, error := greetings.Hello("CoderOfRat")\n\n\tif error != nil {\n\t\t// \u6b64\u6253\u5370\u4f1a\u7ec8\u6b62\u7a0b\u5e8f\u5411\u4e0b\u8fd0\u884c Fatal is equivalent to [Print] followed by a call to os.Exit(1).\n\t\tlog.Fatal(error)\n\t}\n\n\t// \u6ca1\u6709\u9519\u8bef\uff0c\u6253\u5370message\u8fd4\u56de\u4fe1\u606f\n\tfmt.Println(message)\n}\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"go run .\n# Hello world!\n# Don't communicate by sharing memory, share memory by communicating.\n# Hi, CoderOfRat. Welcome!\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06",(0,o.jsx)(n.code,{children:"greetings.Hello()"}),"\u65b9\u6cd5\u5185\u53c2\u6570\u4f20\u9012\u7a7a\u5b57\u7b26\u4e32\uff0c\u518d\u6b21\u6267\u884c\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'message, error := greetings.Hello("")\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"go run .\n# Hello world!\n# Don't communicate by sharing memory, share memory by communicating.\n# greetings:empty name provided\n# exit status 1\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u6b64\u65f6\u6267\u884c\u5230\u6b64\u65b9\u6cd5\u65f6\uff0c\u540e\u7eed\u4ee3\u7801\u5bf9\u5f02\u5e38\u60c5\u51b5\u8fdb\u884c\u4e86\u6253\u5370\u5e76\u7ec8\u6b62\u5f53\u524d\u7a0b\u5e8f\u7684\u5904\u7406\u3002"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"\u5b8c\u6210\u8be5\u5c0f\u7ed3\uff0c\u6211\u4eec\u9519\u7565\u4e86\u89e3\u4e86\u7b80\u5355\u7684\u9519\u8bef\u5904\u7406\u65b9\u5f0f\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u8981\u901a\u8fc7\u5207\u7247\uff08slice\uff09\u5b8c\u5584\u4e0a\u8ff0greetings\u6a21\u5757\uff0c\n\u4f7f\u4e4b\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u968f\u673a\u7684greeting\u5b57\u4e32"})}),"\n",(0,o.jsx)(n.h4,{id:"43-\u5229\u7528\u5207\u7247slice\u5b9e\u73b0\u968f\u673a\u6253\u5370\u6b22\u8fce\u8bed",children:"4.3 \u5229\u7528\u5207\u7247\uff08slice\uff09\uff0c\u5b9e\u73b0\u968f\u673a\u6253\u5370\u6b22\u8fce\u8bed"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u5207\u7247\u7c7b\u4f3c\u4e8e\u6570\u7ec4\uff0c\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\u5176\u5927\u5c0f\u4f1a\u968f\u7740\u60a8\u6dfb\u52a0\u548c\u5220\u9664\u9879\u76ee\u800c\u52a8\u6001\u53d8\u5316\u3002\u5207\u7247\u662f Go \u4e2d\u6700\u6709\u7528\u7684\u7c7b\u578b\u4e4b\u4e00\u3002"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["\u8fdb\u4e00\u6b65\u4fee\u6539",(0,o.jsx)(n.code,{children:"greetings/greetings.go"}),"\u4e2d\u7684\u4ee3\u7801\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package greetings\n\nimport (\n\t"errors"\n\t"fmt"\n\n\t"math/rand"\n)\n\n// Hello returns a greeting for the named person.\nfunc Hello(name string) (string, error) {\n\t// \u5982\u679cnames\u8f93\u5165\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u5219\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32\uff0c\u629b\u51fa\u5f02\u5e38\u4fe1\u606f(\u5f02\u5e38\u4fe1\u606f\u5f00\u5934\u9996\u5b57\u6bcd\u4e0d\u5141\u8bb8\u5927\u5199)\n\tif name == "" {\n\t\treturn "", errors.New("empty name provided")\n\t}\n\t// Return a greeting that embeds the name in a message.\n\tmessage := fmt.Sprintf(getRandomGreetingsFormat(), name)\n\n\treturn message, nil\n}\n// go\u4e2d\u7684func \u4e0d\u652f\u6301\u5d4c\u5957\u5199\u6cd5\nfunc getRandomGreetingsFormat() string {\n    // []string \u7701\u7565\u4e86\u957f\u5ea6\u5b9a\u4e49\uff0c\u4ee3\u8868\u662f\u53ef\u53d8\u957f\u5ea6\u7684\u5207\u7247\n\tgreetingsArr := []string{\n\t\t"Hello, %v. Welcome!",\n\t\t"\u4f60\u597d\uff01 \u6b22\u8fce\u4f60\uff1a%v",\n\t\t"Hi, %v. I am glad to see you here!",\n\t}\n\n\treturn greetingsArr[rand.Intn(len(greetingsArr))]\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u4fee\u6539",(0,o.jsx)(n.code,{children:"hello.go"}),"\uff0c\u6587\u4ef6\u4e2d\u7684message\u8d4b\u503c\u884c"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'message, error := greetings.Hello("CoderOfrat")\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5728hello\u76ee\u5f55\uff0c\u591a\u6b21\u6267\u884c",(0,o.jsx)(n.code,{children:"go run ."}),"\uff0c\u5f97\u5230\u5982\u4e0b\u7ed3\u679c\uff1a"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"go run .",src:l(9613).A+"",width:"930",height:"991"})}),"\n",(0,o.jsx)(n.p,{children:"\u7531\u4e8e\u6253\u5370\u662f\u968f\u673a\u7684\uff0c\u6240\u4ee5\u7ed3\u679c\u4f1a\u6709\u6240\u4e0d\u540c\u3002"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.em,{children:["\u5b8c\u6210\u4e0a\u8ff0\u5185\u5bb9\uff0c\u521d\u6b65\u4e86\u89e3\u4e86\u5207\u7247\u7684\u7528\u6cd5\uff0c\u4ee5\u53ca\u5982\u4f55\u914d\u5408",(0,o.jsx)(n.code,{children:"math/rand"}),"\u6a21\u5757\u63d0\u4f9b\u7684\u968f\u673a\u53d6\u6570\u65b9\u6cd5\uff0c\u5b8c\u6210\u968f\u673a\u8f93\u51fa\u7684\u903b\u8f91\uff0c\n\u63a5\u4e0b\u6765\uff0c\u5c06\u8fdb\u4e00\u6b65\u5229\u7528\u5207\u7247\uff0c\u5b8c\u6210\u9488\u5bf9\u591a\u4eba\u6253\u62db\u547c\u7684\u529f\u80fd\uff0clet go on ~"]})}),"\n",(0,o.jsx)(n.h4,{id:"44-\u591a\u4eba\u6253\u62db\u547c\u7a0b\u5e8f",children:"4.4 \u591a\u4eba\u6253\u62db\u547c\u7a0b\u5e8f"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u4e3a\u4e86\u5f00\u53d1\u6d41\u7a0b\u7684\u89c4\u8303\u6027\uff0c\u4e00\u822c\u6211\u4eec\u5982\u679c\u7a33\u5b9a\u63d0\u4f9b\u4e86\u67d0\u4e2a\u529f\u80fd\uff08func\uff09,\u5e76\u4e14\u53d1\u5e03\u88ab\u522b\u4eba\u4f7f\u7528\u4e86\uff0c\n\u90a3\u4e48\u6211\u4eec\u59cb\u7ec8\u5728\u4e00\u4e2afunc\u4e0a\u8fdb\u884c\u5b9e\u73b0\u548c\u6269\u5c55\uff0c\u5c06\u7ed9\u4f7f\u7528\u8005\u5e26\u6765\u707e\u96be\u6027\u7684\u95ee\u9898\uff0c\u56e0\u6b64\uff0c\u5982\u679c\u65b0\u5f00\u53d1\u7684\u529f\u80fd\u4e0d\u662f\u6e10\u8fdb\u5f0f\u8865\u5145\u7684\uff0c\n\u800c\u662f\u65b0\u7684\u51fa\u5165\u53c2\u3001\u6838\u5fc3\u903b\u8f91\u7b49\uff0c\u90a3\u5c31\u8981\u8003\u8651\u65b0\u5efa\u65b9\u6cd5\u4e86\u3002"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},5317:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/2025-02-27_142024-bda82196298a5d8ccfce43cd0bacc830.png"},9613:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/2025-02-27_173558-7ee867e003b52f47ada1d6f095ad6887.png"},8453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>d});var s=l(6540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);