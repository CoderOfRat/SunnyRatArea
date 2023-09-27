"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1428],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9594:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"Vue.js\u6280\u672f\u5185\u5e55",authors:["CoderOfRat"],tags:["\u8bfb\u4e66","Vue"]},i=void 0,l={permalink:"/blog/vue-js-technical-insider",editUrl:"https://github.com/CoderOfRat/SunnyRatArea/tree/main/blog/vue-js-technical-insider/index.mdx",source:"@site/blog/vue-js-technical-insider/index.mdx",title:"Vue.js\u6280\u672f\u5185\u5e55",description:"\u672c\u4e66\u7531\u9ec4\u8f76\u7f16\u5199\uff0c\u662fVue.js\u6838\u5fc3\u6e90\u7801\u89e3\u6790\u7684\u4f5c\u8005\uff0c16kStar(\u622a\u6b622023\u5e7404\u6708)\u5f00\u6e90\u7ec4\u4ef6\u5e93better-scroll \u7684\u4f5c\u8005\uff0c\u6155\u8bfe\u660e\u661f\u8bb2\u5e08\u3002",date:"2023-09-27T10:06:59.000Z",formattedDate:"2023\u5e749\u670827\u65e5",tags:[{label:"\u8bfb\u4e66",permalink:"/blog/tags/\u8bfb\u4e66"},{label:"Vue",permalink:"/blog/tags/vue"}],readingTime:.685,hasTruncateMarker:!1,authors:[{name:"Wenhao Guo",title:"Front End Engineer Located In Nanjing",url:"https://github.com/CoderOfRat",imageURL:"https://github.com/CoderOfRat.png",key:"CoderOfRat"}],frontMatter:{title:"Vue.js\u6280\u672f\u5185\u5e55",authors:["CoderOfRat"],tags:["\u8bfb\u4e66","Vue"]},prevItem:{title:"Docusaurus \u7f51\u7ad9\u90e8\u7f72\u65b9\u6848",permalink:"/blog/how-to-build-website-yourself"},nextItem:{title:"windows\u670d\u52a1\u6ce8\u518c\u53ca\u5378\u8f7d/windows\u670d\u52a1\u6ce8\u518c\u53ca\u5378\u8f7d",permalink:"/blog/windows\u670d\u52a1\u6ce8\u518c\u53ca\u5378\u8f7d/windows\u670d\u52a1\u6ce8\u518c\u53ca\u5378\u8f7d"}},c={authorsImageUrls:[void 0]},u=[],s={toc:u},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u4e66\u7531",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ustbhuangyi"},(0,o.kt)("inlineCode",{parentName:"a"},"\u9ec4\u8f76")),"\u7f16\u5199\uff0c\u662fVue.js\u6838\u5fc3\u6e90\u7801\u89e3\u6790\u7684\u4f5c\u8005\uff0c16kStar(\u622a\u6b622023\u5e7404\u6708)\u5f00\u6e90\u7ec4\u4ef6\u5e93",(0,o.kt)("a",{parentName:"p",href:"https://better-scroll.github.io/docs/en-US/"},(0,o.kt)("inlineCode",{parentName:"a"},"better-scroll"))," \u7684\u4f5c\u8005\uff0c\u6155\u8bfe\u660e\u661f\u8bb2\u5e08\u3002\n\u672c\u4e66\u4ece\u6e90\u7801\u7684\u89d2\u5ea6\uff0c\u89e3\u6790Vue3.x\u7684\u5b9e\u73b0\u539f\u7406\uff0c\u6309\u7ae0\u8282\u7531\u8303\u5230\u7cbe\u3002\u4ee3\u7801\u9009\u53d6\u65b9\u9762\uff0c\u4ee5js\u7684\u4f53\u73b0\u5f62\u5f0f\u9610\u8ff0ts\u6e90\u7801\u7684\u6838\u5fc3\u3002\u867d\u521d\u8bfb\u4e0d\u723d\uff0c\u4f46\u8bfb\u8fdb\u53bb\u4e86\uff0c\u4fbf\u89c9\u5f97\u4e1c\u897f\u8fd8\u662f\u4e0d\u5c11\u7684\u3002\u6b64\u4e66\u5148\u884c\uff0c\u8fd8\u662fVue.js\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u5148\u884c\uff0c\u611f\u89c9\u4e0a\u5e94\u8be5\u662f\u4e0d\u4e00\u6837\u7684\uff0c\u4e66\u53cb\u53ef\u4ee5\u81ea\u884c\u4f53\u4f1a\u3002"))}f.isMDXComponent=!0}}]);