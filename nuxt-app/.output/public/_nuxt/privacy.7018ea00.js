import{_ as w}from"./index.4085f013.js";import{w as x,a as T,k,f as B,i as y,u as H,h as L,l as A,o as C,p as M}from"./entry.2b38b3d0.js";import{u as N}from"./composables.6db79d3b.js";import"./nuxt-icon.vue.e878b533.js";import"./nuxt-link.de11c4be.js";const P={class:"page-privacy"},V={class:"page-privacy__wrapper container"},$=["innerHTML"],j={__name:"privacy",async setup(b){var n,a,i,s,r,c,_,p,l,d,u;let t,o;const{data:e}=([t,o]=x(()=>A("get_page_custom",()=>$fetch(M().apiUrl+"/get_page_custom",{method:"POST",body:{slug:"privacy"}}))),t=await t,o(),t);console.log(e.value);const h=T();return e.value?h.value=!0:k("/404"),N({title:(a=(n=e==null?void 0:e.value)==null?void 0:n.data)==null?void 0:a.og_title,meta:[{property:"og:locale",content:"zh"},{name:"description",content:(s=(i=e==null?void 0:e.value)==null?void 0:i.data)==null?void 0:s.meta_description},{hid:"og:title",property:"og:title",content:(c=(r=e==null?void 0:e.value)==null?void 0:r.data)==null?void 0:c.og_title},{hid:"og:description",property:"og:description",content:(p=(_=e==null?void 0:e.value)==null?void 0:_.data)==null?void 0:p.meta_description},{hid:"og:image",property:"og:image",content:(u=(d=(l=e==null?void 0:e.value)==null?void 0:l.data)==null?void 0:d.og_image)==null?void 0:u.url},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"}]}),(z,E)=>{var m,g,v;const f=w;return C(),B("div",P,[y("div",V,[y("div",{innerHTML:(v=(g=(m=H(e))==null?void 0:m.data)==null?void 0:g.post)==null?void 0:v.post_content},null,8,$)]),L(f)])}}};export{j as default};