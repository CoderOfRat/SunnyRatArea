(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9378],{4799:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var r=n(6540),l=n(797),i=n(4686),s=n.n(i),a=n(4848);const c=e=>{const{siteConfig:t}=(0,l.A)(),{title:n,tagline:i}=t,c=(0,r.useRef)(null),u=[...i.split("\uff1b")];return(0,r.useEffect)((()=>{s()({element:c.current,texts_array:u})}),[]),(0,a.jsx)("div",{ref:c,style:{minHeight:"5rem",display:"flex",justifyContent:"center",alignItems:"center"}})}},4686:e=>{e.exports=function(e){let t,{element:n,texts_array:r,write_delay:l=500,remove_delay:i=500,write_delay_per_char:s=100,remove_delay_per_char:a=100}=e,c=0,u=0;function f(){t=r[c];let e=t.length,l=setInterval((function(){" "===t[u]?(n.innerHTML+="&nbsp;",u++):n.innerText+=t[u++];u===e&&(clearInterval(l),setTimeout(o,i))}),s)}function o(){let e=setInterval((function(){n.innerText=t.slice(0,--u),0===u&&(clearInterval(e),c=(c+1)%r.length,setTimeout(f,l))}),a)}n.innerText="",setTimeout(f,l)}}}]);