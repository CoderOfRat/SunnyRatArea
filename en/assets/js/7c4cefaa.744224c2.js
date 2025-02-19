"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3101],{54:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>t});const l=JSON.parse('{"id":"golang/go doc/index","title":"GoLang Learning","description":"Golang\u5b98\u7f51\u5165\u95e8\u6587\u6863","source":"@site/docs/golang/go doc/index.md","sourceDirName":"golang/go doc","slug":"/golang/go doc/","permalink":"/SunnyRatArea/en/docs/golang/go doc/","draft":false,"unlisted":false,"editUrl":"https://github.com/CoderOfRat/SunnyRatArea/tree/main/docs/golang/go doc/index.md","tags":[],"version":"current","frontMatter":{},"sidebar":"golangSiderbar"}');var d=o(4848),r=o(8453);const s={},i="GoLang Learning",c={},t=[{value:"Golang\u5b98\u7f51\u5165\u95e8\u6587\u6863",id:"golang\u5b98\u7f51\u5165\u95e8\u6587\u6863",level:3},{value:"1. Go\u7a0b\u5e8f\u5305\u83b7\u53d6/\u5b89\u88c5/\u5378\u8f7d",id:"1-go\u7a0b\u5e8f\u5305\u83b7\u53d6\u5b89\u88c5\u5378\u8f7d",level:4},{value:"2. \u5f00\u59cb\u4f7f\u7528go\u8fdb\u884c\u4ee3\u7801\u7f16\u5199",id:"2-\u5f00\u59cb\u4f7f\u7528go\u8fdb\u884c\u4ee3\u7801\u7f16\u5199",level:4},{value:"3. \u8c03\u7528\u5916\u90e8\u5305\u4e2d\u7684\u4ee3\u7801\uff08\u5bfc\u5165\u6a21\u5757\u3001\u6216\u5185\u90e8\u6a21\u5757\uff09",id:"3-\u8c03\u7528\u5916\u90e8\u5305\u4e2d\u7684\u4ee3\u7801\u5bfc\u5165\u6a21\u5757\u6216\u5185\u90e8\u6a21\u5757",level:4},{value:"4. \u521b\u5efa\u672c\u5730Module",id:"4-\u521b\u5efa\u672c\u5730module",level:4}];function a(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.header,{children:(0,d.jsx)(e.h1,{id:"golang-learning",children:"GoLang Learning"})}),"\n",(0,d.jsx)(e.h3,{id:"golang\u5b98\u7f51\u5165\u95e8\u6587\u6863",children:"Golang\u5b98\u7f51\u5165\u95e8\u6587\u6863"}),"\n",(0,d.jsx)(e.h4,{id:"1-go\u7a0b\u5e8f\u5305\u83b7\u53d6\u5b89\u88c5\u5378\u8f7d",children:"1. Go\u7a0b\u5e8f\u5305\u83b7\u53d6/\u5b89\u88c5/\u5378\u8f7d"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u5c31\u662f\u4e0b\u8f7d\u6307\u5b9a\u5e73\u53f0\u7684\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305\u8fdb\u884c\u5b89\u88c5 ",(0,d.jsx)(e.code,{children:"https://go.dev/doc/install"})]}),"\n",(0,d.jsx)(e.li,{children:"\u5176\u6b21\u662f\u6e90\u7801\u7f16\u8bd1\u5b89\u88c5 \u8fd9\u4e2a\u5b98\u7f51\u6709\u8be6\u7ec6\u6587\u6863\uff0c\u65b0\u5b66\u8005\u4e0d\u5efa\u8bae\uff0c\u771f\u6b63\u719f\u6089golang\u540e\uff0c\u5982\u9700\u5f00\u53d1\u9ad8\u6548\u57fa\u4e8ego\u6838\u5fc3\u7684\u5305\uff0c\u518d\u8fdb\u884c\u6b64\u65b9\u9762\u7814\u8bfb"}),"\n",(0,d.jsx)(e.li,{children:"\u591a\u7248\u672c\u7ba1\u7406\uff0c\u9700\u8981gitshell\u652f\u6491\uff0c\u6267\u884c\u5982\u4e0b\u547d\u4ee4"}),"\n"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-shell",children:"go install golang.org/dl/go1.10.7@latest\n\ngo1.10.7 download\n\ngo1.10.7 version\n## go version go1.10.7 linux/amd64\n\ngo1.10.7 env GOROOT\n## \u53ef\u4ee5\u67e5\u770b\u6b64\u7248\u672c\u7684\u73af\u5883\u53d8\u91cf\u76ee\u5f55\n## \u8981\u5378\u8f7d\u6307\u5b9a\u7248\u672c\u7684go, \u53ea\u9700\u8981\u901a\u8fc7\u6b64\u7248\u672c\u7684\u73af\u5883\u53d8\u91cf\u627e\u5230\u6307\u5b9a\u76ee\u5f55\u7684\u4e8c\u8fdb\u5236\u5305\u8fdb\u884c\u76f4\u63a5\u5220\u9664 \u66f4\u591a\u5e73\u53f0\u5378\u8f7d\u65b9\u5f0f\uff0c\u53ef\u4ee5\u53c2\u8003\u5b98\u65b9\n"})}),"\n",(0,d.jsx)(e.h4,{id:"2-\u5f00\u59cb\u4f7f\u7528go\u8fdb\u884c\u4ee3\u7801\u7f16\u5199",children:"2. \u5f00\u59cb\u4f7f\u7528go\u8fdb\u884c\u4ee3\u7801\u7f16\u5199"}),"\n",(0,d.jsxs)(e.ol,{children:["\n",(0,d.jsx)(e.li,{children:"\u521d\u59cb\u5316\u5de5\u4f5c\u7a7a\u95f4"}),"\n"]}),"\n",(0,d.jsx)("p",{children:"\u5728\u5e38\u7528\u7684\u5de5\u4f5c\u76ee\u5f55\u65b0\u5efa\u6587\u4ef6\u5939\uff0c\u5728\u6b64\u6587\u4ef6\u5939\u4f4d\u7f6e\u6253\u5f00cmd/shell/bash\u7b49\uff0c\u6267\u884c\u5982\u4e0b\u811a\u672c"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-shell",children:"mkdir hello\ncd hello\n# go mod \u53ef\u4ee5\u8fdb\u884cgolang\u9879\u76ee\u5de5\u4f5c\u7a7a\u95f4\u521d\u59cb\u5316\u5de5\u4f5c\ngo mod init example/hello\n# go: creating new go.mod: module example/hello\n# go: to add module requirements and sums:\n        # go mod tidy\n"})}),"\n",(0,d.jsxs)(e.p,{children:["\u6267\u884c\u540e\u4f1a\u53d1\u73b0\uff0c\u76ee\u5f55\u4e2d\u751f\u6210\u4e86",(0,d.jsx)(e.code,{children:"go.mod"}),"\u6587\u4ef6,\n\u968f\u540e\u5728\u5f53\u524d\u76ee\u5f55\u65b0\u5efa",(0,d.jsx)(e.code,{children:"hello.go"}),"\u6587\u4ef6\uff0c\u7f16\u5199\u5982\u4e0b\u5165\u95e8\u4ee3\u7801:"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-go",children:'package main\n\nimport ("fmt")\n\nfunc main() {\n    fmt.Println("Hello World!")\n}\n'})}),"\n",(0,d.jsxs)(e.p,{children:["\u4fdd\u5b58\u540e\uff0c\u7ec8\u7aef\u6267\u884c",(0,d.jsx)(e.code,{children:"go run ."}),",\u7ec8\u7aef\u6253\u5370",(0,d.jsx)(e.code,{children:"Hello World!"}),",\u6807\u5fd7\u7740\u5b8c\u6210\u4e86go\u7684\u7b2c\u4e00\u4e2a\u7a0b\u5e8f\u8fd0\u884c"]}),"\n",(0,d.jsxs)(e.blockquote,{children:["\n",(0,d.jsxs)(e.p,{children:["\u6ce8\u610f\u70b91\uff1a\u5f15\u5165go\u5305\u7684\u65b9\u5f0f\uff0c",(0,d.jsx)(e.code,{children:"import 'fmt'"}),"\u3001",(0,d.jsx)(e.code,{children:"import ('a/exmaple/mod' \\n b/example/mod)"})," ",(0,d.jsx)("br",{}),"\n\u6ce8\u610f\u70b92\uff1amain \u51fd\u6570\u4e00\u4e2a\u5305\u91cc\u53ea\u4f1a\u6709\u4e00\u4e2a\u4e3b\u5165\u53e3\u51fd\u6570"]}),"\n"]}),"\n",(0,d.jsx)(e.h4,{id:"3-\u8c03\u7528\u5916\u90e8\u5305\u4e2d\u7684\u4ee3\u7801\u5bfc\u5165\u6a21\u5757\u6216\u5185\u90e8\u6a21\u5757",children:"3. \u8c03\u7528\u5916\u90e8\u5305\u4e2d\u7684\u4ee3\u7801\uff08\u5bfc\u5165\u6a21\u5757\u3001\u6216\u5185\u90e8\u6a21\u5757\uff09"}),"\n",(0,d.jsxs)(e.blockquote,{children:["\n",(0,d.jsx)("a",{href:"https://pkg.go.dev",children:"go\u751f\u6001\u5305\u68c0\u7d22\uff1apkg.go.dev"}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u5f53\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u9700\u8981\u4f7f\u7528\u5176\u4ed6\u5df2\u5f00\u53d1\u597d\u7684\u5176\u4ed6\u6a21\u5757\uff0c\u6211\u4eec\u9700\u8981\u8fd9\u6837\u505a\uff1a"}),"\n",(0,d.jsxs)(e.ol,{children:["\n",(0,d.jsx)(e.li,{children:"\u5728\u4e0a\u8ff0\u751f\u6001\u5305\u68c0\u7d22\u9875\u9762\u641c\u7d22\u9700\u8981\u7684\u5305"}),"\n",(0,d.jsx)(e.li,{children:"\u901a\u8fc7import\u5173\u952e\u5b57\u58f0\u660e\u5f15\u5165"}),"\n",(0,d.jsxs)(e.li,{children:["\u6267\u884c",(0,d.jsx)(e.code,{children:"go mod tidy"}),",\u7b49\u5f85\u6a21\u5757\u4e0b\u8f7d\u5b8c\u6bd5\uff0c\u5373\u53ef\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528"]}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u4ee3\u7801\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\n\t"rsc.io/quote/v4"\n)\n\nfunc main() {\n\tfmt.Println("Hello world!\\n")\n\n\tfmt.Println(quote.Go())\n}\n'})}),"\n",(0,d.jsxs)(e.p,{children:["\u56fd\u5185\u6267\u884c",(0,d.jsx)(e.code,{children:"go mod tidy"}),"\u4e00\u822c\u4f1a\u4e0b\u8f7d\u5931\u8d25\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u4fee\u6539\u9ed8\u8ba4\u4ee3\u7406\u73af\u5883\u53d8\u91cf\uff0c\u9700\u8981\u627e\u5230go\u7684\u5b89\u88c5\u76ee\u5f55\u4e2d\u7684",(0,d.jsx)(e.code,{children:"go.env"}),"\u6587\u4ef6\u8fdb\u884c\u4fee\u6539\uff0c\u4fee\u6539\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-bash",children:"# GOPROXY=https://proxy.golang.org,direct\nGOPROXY=https://goproxy.cn,direct ## \u4f7f\u7528\u4e03\u725b\u4e91\u4ee3\u7406\n# \u5982\u679c\u5931\u6548\uff0c\u81ea\u884c\u767e\u5ea6\n"})}),"\n",(0,d.jsxs)(e.p,{children:["\u5b8c\u6210\u4e0a\u8ff0\u7684\u7f16\u7801\u53ca\u914d\u7f6e\uff0c\u5e76\u4e0b\u8f7d\u5b8c\u6bd5\u540e\uff0c\u6267\u884c",(0,d.jsx)(e.code,{children:"go run ."}),"\uff0c\u5373\u53ef\u770b\u5230\u6253\u5370\u51fa\u6709\u5173\u901a\u4fe1\u7684\u8bed\u5f55"]}),"\n",(0,d.jsx)(e.h4,{id:"4-\u521b\u5efa\u672c\u5730module",children:"4. \u521b\u5efa\u672c\u5730Module"}),"\n",(0,d.jsx)(e.p,{children:"... \u672a\u5b8c\u5f85\u7eed ..."}),"\n",(0,d.jsx)(e.p,{children:"\u5982\u679c\u4f7f\u7528\u7684\u5305\uff0c\u5c1a\u672a\u53d1\u5e03\uff0c\u6bd4\u5982\u662f\u81ea\u5df1\u672c\u5730\u7684module\uff0c\u5219\u9700\u8981\u4fee\u6539\u6307\u5b9amod\u4e3a\u7684\u7d22\u5f15\u5730\u5740\u4e3a\u6307\u5b9a\u76ee\u5f55\uff0c\u4ee5\u4fbf\u8bc6\u522b"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-shell",children:"go mod edit -replace example.com/greetings=../greetings\n"})})]})}function g(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(a,{...n})}):a(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>s,x:()=>i});var l=o(6540);const d={},r=l.createContext(d);function s(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:s(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);