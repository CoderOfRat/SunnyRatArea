"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6092],{5395:(e,n,i)=>{i.r(n),i.d(n,{Highlight:()=>c,assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"intro/tutorial-basics/markdown-features","title":"Markdown Features","description":"Docusaurus supports Markdown and a few additional features.","source":"@site/docs/intro/tutorial-basics/markdown-features.mdx","sourceDirName":"intro/tutorial-basics","slug":"/intro/tutorial-basics/markdown-features","permalink":"/SunnyRatArea/en/docs/intro/tutorial-basics/markdown-features","draft":false,"unlisted":false,"editUrl":"https://github.com/CoderOfRat/SunnyRatArea/tree/main/docs/intro/tutorial-basics/markdown-features.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"introSidebar","previous":{"title":"Create a Blog Post","permalink":"/SunnyRatArea/en/docs/intro/tutorial-basics/create-a-blog-post"},"next":{"title":"Deploy your site","permalink":"/SunnyRatArea/en/docs/intro/tutorial-basics/deploy-your-site"}}');var o=i(4848),t=i(8453);const r={sidebar_position:4},a="Markdown Features",l={},c=({children:e,color:n})=>(0,o.jsx)("span",{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:()=>{alert(`You clicked the color ${n} with label ${e}`)},children:e}),d=[{value:"Front Matter",id:"front-matter",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"MDX and React Components",id:"mdx-and-react-components",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"markdown-features",children:"Markdown Features"})}),"\n",(0,o.jsxs)(n.p,{children:["Docusaurus supports ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://daringfireball.net/projects/markdown/syntax",children:"Markdown"})})," and a few ",(0,o.jsx)(n.strong,{children:"additional features"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"front-matter",children:"Front Matter"}),"\n",(0,o.jsxs)(n.p,{children:["Markdown documents have metadata at the top called ",(0,o.jsx)(n.a,{href:"https://jekyllrb.com/docs/front-matter/",children:"Front Matter"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",metastring:'title="my-doc.md"',children:"// highlight-start\n---\nid: my-doc-id\ntitle: My document title\ndescription: My document description\nslug: /my-custom-url\n---\n// highlight-end\n\n## Markdown heading\n\nMarkdown text with [links](./hello.md)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,o.jsx)(n.p,{children:"Regular Markdown links are supported, using url paths or relative file paths."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"Let's see how to [Create a page](/create-a-page).\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"Let's see how to [Create a page](./create-a-page.md).\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Result:"})," Let's see how to ",(0,o.jsx)(n.a,{href:"/SunnyRatArea/en/docs/intro/tutorial-basics/create-a-page",children:"Create a page"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"images",children:"Images"}),"\n",(0,o.jsx)(n.p,{children:"Regular Markdown images are supported."}),"\n",(0,o.jsxs)(n.p,{children:["You can use absolute paths to reference images in the static directory (",(0,o.jsx)(n.code,{children:"static/img/docusaurus.png"}),"):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"![Docusaurus logo](/img/docusaurus.png)\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Docusaurus logo",src:i(1399).A+"",width:"128",height:"128"})}),"\n",(0,o.jsx)(n.p,{children:"You can reference images relative to the current file as well. This is particularly useful to colocate images close to the Markdown files using them:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"![Docusaurus logo](./img/docusaurus.png)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"code-blocks",children:"Code Blocks"}),"\n",(0,o.jsx)(n.p,{children:"Markdown code blocks are supported with Syntax highlighting."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',children:"function HelloDocusaurus() {\n    return (\n        <h1>Hello, Docusaurus!</h1>\n    )\n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',children:"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"admonitions",children:"Admonitions"}),"\n",(0,o.jsx)(n.p,{children:"Docusaurus has a special syntax to create admonitions and callouts:"}),"\n",(0,o.jsx)(n.admonition,{title:"My tip",type:"tip",children:(0,o.jsx)(n.p,{children:"Use this awesome feature option"})}),"\n",(0,o.jsx)(n.admonition,{title:"Take care",type:"danger",children:(0,o.jsx)(n.p,{children:"This action is dangerous"})}),"\n",(0,o.jsx)(n.admonition,{title:"My tip",type:"tip",children:(0,o.jsx)(n.p,{children:"Use this awesome feature option"})}),"\n",(0,o.jsx)(n.admonition,{title:"Take care",type:"danger",children:(0,o.jsx)(n.p,{children:"This action is dangerous"})}),"\n",(0,o.jsx)(n.h2,{id:"mdx-and-react-components",children:"MDX and React Components"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://mdxjs.com/",children:"MDX"})," can make your documentation more ",(0,o.jsx)(n.strong,{children:"interactive"})," and allows using any ",(0,o.jsx)(n.strong,{children:"React components inside Markdown"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n"})}),"\n","\n",(0,o.jsxs)(n.p,{children:["This is ",(0,o.jsx)(c,{color:"#25c2a0",children:"Docusaurus green"})," !"]}),"\n",(0,o.jsxs)(n.p,{children:["This is ",(0,o.jsx)(c,{color:"#1877F2",children:"Facebook blue"})," !"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},1399:(e,n,i)=>{i.d(n,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAE9UlEQVR4Xu2cO47UUBBF7ywJFgDLgAQiSGAJrIMAAkQCCWyIBAkJhBjYAh+96W4xalC3/U7Zr8Z1OyHxLT/XOS63zbQv5E/pDlyUPnofvCxAcQksgAUo3oHih+8JYAGKd6D44XsCWIDiHSh++J4AFqB4B4ofvieABSjegeKH7wlgAYp3oPjhewJYANyB37iCC5AOoJMYhfertgAEH88ihihsATi9gAqIIQpbgAB8vARiiMIWgNMLqIAYorAFCMDHSyCGKGwBOL2ACoghCluAAHy8BGKIwhaA0wuogBiisAUIwMdLIIYobAE4vYAKiCEKW4AAfLwEYojCFoDTC6iAGKKwBQjAx0sghihsATi9gAqIIQpbgAB8vARiiMIWgNMLqIAYorAFCMDHSyCGKGwBOL2ACoghCluAAHy8BGKIwhaA0wuogBiisAUIwMdLIIYobAE4vYAKiCEKW4AAfLwEYojCFoDTC6iAGKLwAAEuJb2T9DSgcVspgRii8MoCfJF0R9JHSY8lvdwKQXgciCEKryjAJ0l3JbV/Dx9LsOsEYojCKwnQzvh25rcJcPyxBBsX4MP+zP92YkxWlwCdxCi88AT4LOm2pO8TrpFPJD2fsN0WN0EMUXhhAdqvjh9JejWRWtVJgBii8MICtPKW4Lz9iCEKryCAJbAAVx3omQQv6C3S+d6n2AKdxCi80gQ4dHmuBA8lvS4gAWKIwisL0DMJKkiAGKLwAAEOEjyQ9GbiAN66BIghCg8SoO32l6QG1hJs/EngqZPcEuy6g05iFB44AQ5iWILiAvhyYAGuhkHlSYCmOAonuARc/45QVQLEEIWTCXCYBPckvZ94i3hf0lv6RWrivpbaDDFE4YQCtCX9lNTAVpEAMUThpAJUkwAxROHEAlSSADFEYQuw1GV9Vl3EEIUTC1DpewBiiMJJBagEv/yj4ONZ2Z4F+DZwxhVkSxPAD4JmgD9suhUBqsL3JaD4/wOUF6DymR8yxW/yJcDwdwoghig88DbQ8P9+4UMMUXiQAO3Pw/1HoUUF8G8D/r3VQycxCq88AQz///f5iCEKryjAXPjtl8L+adiEB0M3QYAe+JXeH4QYovAKE8Dwz5/FiCEKLyzAKPgRPTmFrR1X5AetF4UXFqC9IuaWpB8TuhX5ipiInliACdCmbDLiJVEWYAqZa9tEj7Tj3a/9mjgLkEyAtpw1XxRpARIK0Ja01qtiLUBSAdqyvu5fG/ds5hrnbG4B5nRr/wKnmZHUm1uAmXiW/hI4cznlNkfCovDCzwHKkew8YMQQhS1AJ7LYGGKIwhYglmRnNcQQhS1AJ7LYGGKIwhYglmRnNcQQhS1AJ7LYGGKIwhYglmRnNcQQhS1AJ7LYGGKIwhYglmRnNcQQhS1AJ7LYGGKIwhYglmRnNcQQhS1AJ7LYGGKIwhYglmRnNcQQhS1AJ7LYGGKIwhYglmRnNcQQhS1AJ7LYGGKIwhYglmRnNcQQhS1AJ7LYGGKIwhYglmRnNcQQhS1AJ7LYGGKIwhYglmRnNcQQhS1AJ7LYGGKIwhYglmRnNcQQhTsX7FiiDliARDBGLMUCjOh6on1agEQwRizFAozoeqJ9WoBEMEYsxQKM6HqifVqARDBGLMUCjOh6on1agEQwRizFAozoeqJ9WoBEMEYsxQKM6HqifVqARDBGLMUCjOh6on1agEQwRizlD9Is8IECbAlUAAAAAElFTkSuQmCC"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(6540);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);