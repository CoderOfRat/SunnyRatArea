"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8257],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=i(t),k=l,d=s["".concat(p,".").concat(k)]||s[k]||g[k]||a;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=k;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u[s]="string"==typeof e?e:l,o[1]=u;for(var i=2;i<a;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3747:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var r=t(7462),l=(t(7294),t(3905));const a={title:"\u6b63\u5219\u8868\u8fbe\u5f0f(Regular Expression)",authors:["CoderOfRat"],tags:["\u6b63\u5219\u8868\u8fbe\u5f0f"]},o=void 0,u={permalink:"/SunnyRatArea/en/blog/\u6b63\u5219\u8868\u8fbe\u5f0f",editUrl:"https://github.com/CoderOfRat/SunnyRatArea/tree/main/blog/\u6b63\u5219\u8868\u8fbe\u5f0f/index.md",source:"@site/blog/\u6b63\u5219\u8868\u8fbe\u5f0f/index.md",title:"\u6b63\u5219\u8868\u8fbe\u5f0f(Regular Expression)",description:"\u6b63\u5219\u8868\u8fbe\u5f0f(Regular Expression)",date:"2023-09-27T13:08:52.000Z",formattedDate:"September 27, 2023",tags:[{label:"\u6b63\u5219\u8868\u8fbe\u5f0f",permalink:"/SunnyRatArea/en/blog/tags/\u6b63\u5219\u8868\u8fbe\u5f0f"}],readingTime:3.175,hasTruncateMarker:!1,authors:[{name:"Wenhao Guo",title:"Front End Engineer Located In Nanjing",url:"https://github.com/CoderOfRat",imageURL:"https://github.com/CoderOfRat.png",key:"CoderOfRat"}],frontMatter:{title:"\u6b63\u5219\u8868\u8fbe\u5f0f(Regular Expression)",authors:["CoderOfRat"],tags:["\u6b63\u5219\u8868\u8fbe\u5f0f"]},prevItem:{title:"\u524d\u7aef\u57fa\u7840\u5b66\u4e60\u8ba1\u5212\uff0c\u7b2c\u4e00\u5929",permalink:"/SunnyRatArea/en/blog/\u505a\u8fdc\u6bd4\u8bf4\u6709\u7528"}},p={authorsImageUrls:[void 0]},i=[{value:"\u6b63\u5219\u8868\u8fbe\u5f0f(Regular Expression)",id:"\u6b63\u5219\u8868\u8fbe\u5f0fregular-expression",level:2},{value:"\u4e00\u3001\u6b63\u5219\u8868\u8fbe\u5f0f\u662f\u4ec0\u4e48\uff1f",id:"\u4e00\u6b63\u5219\u8868\u8fbe\u5f0f\u662f\u4ec0\u4e48",level:3},{value:"\u4e8c\u3001.\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u521b\u5efa",id:"\u4e8c\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u521b\u5efa",level:3},{value:"\u4e09\u3001\u5b57\u7b26\u4e32\u7684\u65b9\u6cd5",id:"\u4e09\u5b57\u7b26\u4e32\u7684\u65b9\u6cd5",level:3},{value:"\u56db\u3001\u6b63\u5219\u8bed\u6cd5\u89c4\u5219",id:"\u56db\u6b63\u5219\u8bed\u6cd5\u89c4\u5219",level:3},{value:"1.\u9a8c\u8bc1\u624b\u673a\u53f7",id:"1\u9a8c\u8bc1\u624b\u673a\u53f7",level:4},{value:"2.\u6b63\u5219\u9a8c\u8bc1\u5bc6\u7801",id:"2\u6b63\u5219\u9a8c\u8bc1\u5bc6\u7801",level:4},{value:"3.\u6b63\u5219\u9a8c\u8bc1\u90ae\u7bb1",id:"3\u6b63\u5219\u9a8c\u8bc1\u90ae\u7bb1",level:4},{value:"4.\u6b63\u5219\u9a8c\u8bc1\u8eab\u4efd\u8bc1\u53f7",id:"4\u6b63\u5219\u9a8c\u8bc1\u8eab\u4efd\u8bc1\u53f7",level:4},{value:"5.\u80fd\u591f\u5339\u914d\u201cgo go\u201d\u548c\u201cabc abc\u201d\u4f46\u4e0d\u80fd\u5339\u914d\u201cgo abc\u201d\u7684\u6b63\u5219",id:"5\u80fd\u591f\u5339\u914dgo-go\u548cabc-abc\u4f46\u4e0d\u80fd\u5339\u914dgo-abc\u7684\u6b63\u5219",level:4}],c={toc:i},s="wrapper";function g(e){let{components:n,...t}=e;return(0,l.kt)(s,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6b63\u5219\u8868\u8fbe\u5f0fregular-expression"},"\u6b63\u5219\u8868\u8fbe\u5f0f(Regular Expression)"),(0,l.kt)("h3",{id:"\u4e00\u6b63\u5219\u8868\u8fbe\u5f0f\u662f\u4ec0\u4e48"},"\u4e00\u3001\u6b63\u5219\u8868\u8fbe\u5f0f\u662f\u4ec0\u4e48\uff1f"),(0,l.kt)("p",null," \u5339\u914d\u60f3\u8981\u7684\u4e1c\u897f\n\u4e3a\u4ec0\u4e48\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\uff1a\u53ef\u4ee5\n1.\u6d4b\u8bd5\u5b57\u7b26\u4e32\u5185\u7684\u6a21\u5f0f\n2.\u66ff\u6362\u6587\u672c\n3.\u57fa\u4e8e\u6a21\u5f0f\u5339\u914d\u4ece\u5b57\u7b26\u4e32\u4e2d\u63d0\u53d6\u5b57\u7b26\u4e32"),(0,l.kt)("h3",{id:"\u4e8c\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u521b\u5efa"},"\u4e8c\u3001.\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u521b\u5efa"),(0,l.kt)("p",null," \u8bed\u6cd5\uff1a\nvar  reg=/\u5185\u5bb9/\u4fee\u9970\u8bcd"),(0,l.kt)("p",null," var  reg=new RegExp\uff08pattern\uff0cmodifiers\uff09"),(0,l.kt)("p",null," pattern\uff1a\u6a21\u5f0f\nmodifiers\uff1a\u4fee\u9970\u8bcd"),(0,l.kt)("p",null," \u65b9\u6cd5\uff1a\ntest\uff08\uff09\n\u9a8c\u8bc1\u5b57\u7b26\u4e32\u662f\u5426\u6ee1\u8db3\u6b63\u5219\u8868\u8fbe\u5f0f"),(0,l.kt)("p",null," exec\uff08\uff09"),(0,l.kt)("h3",{id:"\u4e09\u5b57\u7b26\u4e32\u7684\u65b9\u6cd5"},"\u4e09\u3001\u5b57\u7b26\u4e32\u7684\u65b9\u6cd5"),(0,l.kt)("p",null," search\uff08/haha/\uff09\n\u6839\u636e\u6b63\u5219\u8868\u8fbe\u5f0f\u8fdb\u884c\u67e5\u627e"),(0,l.kt)("p",null," replace\uff08/haha/\uff0c\u201chehe\u201d\uff09\n\u6839\u636e\u6b63\u5219\u8868\u8fbe\u5f0f\u8fdb\u884c\u67e5\u627e\u66ff\u6362"),(0,l.kt)("h3",{id:"\u56db\u6b63\u5219\u8bed\u6cd5\u89c4\u5219"},"\u56db\u3001\u6b63\u5219\u8bed\u6cd5\u89c4\u5219"),(0,l.kt)("p",null," \u4fee\u9970\u8bcd"),(0,l.kt)("p",null," i     ignore      \u5339\u914d\u65f6\u5ffd\u7565\u5927\u5c0f\u5199"),(0,l.kt)("p",null," g     global      \u5168\u5c40\u9a8c\u8bc1"),(0,l.kt)("p",null," m                 \u9a8c\u8bc1\u591a\u884c"),(0,l.kt)("p",null,"\u5339\u914d\u6a21\u5f0f"),(0,l.kt)("p",null," \u5c0f\u62ec\u53f7\uff08\uff09"),(0,l.kt)("p",null," \uff08abc\uff09                        \u67e5\u627eabc\u8fd9\u4e2a\u5355\u8bcd"),(0,l.kt)("p",null," \uff08abc|bcd|def\uff09            \u67e5\u627e\u8fd9\u4e09\u4e2a\u5355\u8bcd\u5176\u4e2d\u7684\u4e00\u4e2a"),(0,l.kt)("p",null," \u4e2d\u62ec\u53f7[]"),(0,l.kt)("p",null," ","[ 12345]","                          \u5305\u62ec12345\u5176\u4e2d\u7684\u67d0\u4e00\u4e2a"),(0,l.kt)("p",null," ","[abc]","                \u5305\u62ecabc\u5176\u4e2d\u7684\u67d0\u4e00\u4e2a"),(0,l.kt)("p",null," ","[0-9]","  \u5305\u62ec\u6240\u6709\u6570\u5b57"),(0,l.kt)("p",null," ","[a-z]","  \u5305\u62ec\u6240\u6709\u5c0f\u5199\u5b57\u6bcd"),(0,l.kt)("p",null," ","[A-Z]","  \u5305\u62ec\u6240\u6709\u5927\u5199\u5b57\u6bcd"),(0,l.kt)("p",null," ","[A-z]","  \u5305\u62ec\u6240\u6709\u5b57\u6bcd\uff0cZ-a\u4e4b\u95f4\u5305\u542b\u4e00\u4e9b\u7279\u6b8a\u5b57\u7b26"),(0,l.kt)("p",null,"\u5143\u5b57\u7b26"),(0,l.kt)("p",null,' .\n\u8868\u793a\u6240\u6709\u7684\u5b57\u7b26\uff0c\u60f3\u8981\u9a8c\u8bc1\u201d."\u7528\u53cd\u659c\u6760\\\u8fdb\u884c\u8f6c\u4e49'),(0,l.kt)("p",null," \\d\n\u4efb\u4f55\u6570\u5b57"),(0,l.kt)("p",null," \\D\n\u4efb\u4f55\u975e\u6570\u5b57"),(0,l.kt)("p",null," \\s\n\u7a7a\u767d\u5b57\u7b26"),(0,l.kt)("p",null," \\S\n\u975e\u7a7a\u767d\u5b57\u7b26"),(0,l.kt)("p",null," \\w\n\u4efb\u4f55\u5b57\u6bcd\uff0c\u6570\u5b57\uff0c\u4e0b\u5212\u7ebf"),(0,l.kt)("p",null," \\W\n\u4efb\u4f55\u975e\u5b57\u6bcd\uff0c\u6570\u5b57\uff0c\u4e0b\u5212\u7ebf"),(0,l.kt)("p",null,"\u91cf\u8bcd"),(0,l.kt)("p",null," ^n\n\u5339\u914d\u5f00\u5934\u4e3an\u7684\u5b57\u7b26\u4e32"),(0,l.kt)("p",null," n$\n\u5339\u914d\u7ed3\u5c3e\u4e3an\u7684\u5b57\u7b26\u4e32"),(0,l.kt)("p",null," n+\n\u5339\u914d\u4e00\u4e2a\u6216\u591a\u4e2a"),(0,l.kt)("p",null," n(x)\n\u5339\u914d\u4efb\u4f55\u5305\u542bx\u4e2an\u7684\u5b57\u7b26\u4e32"),(0,l.kt)("p",null," n(x,y)\n\u5339\u914d\u4efb\u4f55\u5305\u542bx\u5230n\u7684\u5b57\u7b26\u4e32"),(0,l.kt)("p",null," n(x,)\n\u5339\u914d\u81f3\u5c11\u6709x\u4e2a\u6307\u5b9a\u5b57\u7b26"),(0,l.kt)("p",null," n?\n\u8868\u793a\u67090\u4e2a\u6216\u4e00\u4e2a\u6307\u5b9a\u5b57\u7b26"),(0,l.kt)("p",null," n*\n\u8868\u793a\u67090\u4e2a\u6216\u591a\u4e2a\u6307\u5b9a\u5b57\u7b26"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b:")),(0,l.kt)("h4",{id:"1\u9a8c\u8bc1\u624b\u673a\u53f7"},"1.\u9a8c\u8bc1\u624b\u673a\u53f7"),(0,l.kt)("p",null," \u4ee51\u5f00\u5934,\u5224\u65ad\u7b2c\u4e8c\u4f4d\u53ef\u4ee5\u662f3,5,6,7,8,9\u540e\u9762\u662f9\u4f4d\u6570\u5b57"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"btn1.onclick=function () {\n            var reg1=/^1[356789]\\d{9}$/\n            var str1=ipt1.value\n            if(reg1.test(str1)){\n                alert('\u6210\u529f')\n            }else{\n                alert('\u4e0d\u6210')\n            }\n        }\n")),(0,l.kt)("h4",{id:"2\u6b63\u5219\u9a8c\u8bc1\u5bc6\u7801"},"2.\u6b63\u5219\u9a8c\u8bc1\u5bc6\u7801"),(0,l.kt)("p",null," \u7b2c\u4e00\u4e2a\u5b57\u7b26\u662f\u5927\u5199\u5b57\u6bcd\uff0c\u6700\u77ed8\u4f4d\uff0c\u8981\u6c42\u5305\u62ec\u5b57\u6bcd\uff0c\u6570\u5b57"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"btn2.onclick=function () {\n            var reg2=/^[A-Z][a-zA-Z\\d]{7,}$/\n            var str2=ipt2.value\n            if(reg2.test(str2)){\n                alert('\u6210\u529f')\n            }else{\n                alert('\u4e0d\u6210')\n            }\n        }\n")),(0,l.kt)("h4",{id:"3\u6b63\u5219\u9a8c\u8bc1\u90ae\u7bb1"},"3.\u6b63\u5219\u9a8c\u8bc1\u90ae\u7bb1"),(0,l.kt)("p",null," \u90ae\u7bb1\u7684\u540d\u5b57\u662f\\w    \u4e2d\u95f4@\u7b26\u53f7       @\u7b26\u53f7\u540e\u9762\u662f\u6570\u5b57\u6216\u8005\u5b57\u6bcd        \u540e\u9762.com"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"btn3.onclick=function () {\n            var reg3=/^\\w+@[0-9a-zA-Z]+(\\.com)$/\n            var str3=ipt3.value\n            if(reg3.test(str3)){\n                alert('\u6210\u529f')\n            }else{\n                alert('\u4e0d\u6210')\n            }\n        }\n")),(0,l.kt)("h4",{id:"4\u6b63\u5219\u9a8c\u8bc1\u8eab\u4efd\u8bc1\u53f7"},"4.\u6b63\u5219\u9a8c\u8bc1\u8eab\u4efd\u8bc1\u53f7"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"btn4.onclick=function () {\n            var reg4=/^\\d{6}(19|20)\\d{2}(0|1)\\d(0|1|2|3)\\d{4}(\\d|X)$/\n            var str4=ipt4.value\n            if(reg4.test(str4)){\n                alert('\u6210\u529f')\n            }else{\n                alert('\u4e0d\u6210')\n            }\n        }\n")),(0,l.kt)("h4",{id:"5\u80fd\u591f\u5339\u914dgo-go\u548cabc-abc\u4f46\u4e0d\u80fd\u5339\u914dgo-abc\u7684\u6b63\u5219"},"5.\u80fd\u591f\u5339\u914d\u201cgo go\u201d\u548c\u201cabc abc\u201d\u4f46\u4e0d\u80fd\u5339\u914d\u201cgo abc\u201d\u7684\u6b63\u5219"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"btn5.onclick=function () {\n            var reg5=/(^\\w{2}\\s\\w{2}$)|(^\\w{3}\\s\\w{3}$)/\n            var str5=ipt5.value\n            if(reg5.test(str5)){\n                alert('\u6210\u529f')\n            }else{\n                alert('\u4e0d\u6210')\n            }\n        }\n")))}g.isMDXComponent=!0}}]);