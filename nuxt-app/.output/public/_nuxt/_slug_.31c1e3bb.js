import{_ as N,a as S,b as T,c as V,d as A,e as L,f as R,g as E}from"./titleBigImg.d04ecf32.js";import{_ as I,a as P}from"./titleDouble.0347bf4f.js";import{_ as j}from"./index.c2a777a9.js";import{j as H,w as K,a as O,k as U,f as n,i as q,h as r,u as d,F as z,r as G,l as J,o as t,c as e,m as _,p as M}from"./entry.d50d1d83.js";import"./nuxt-icon.vue.ba1b9634.js";import"./nuxt-link.c2ccf128.js";const Q={class:"page-slug"},W={class:"page-slug__kv"},sa={__name:"[slug]",async setup(X){let o,c;const p=H(),{data:s}=([o,c]=K(()=>J("get_page_custom",()=>$fetch(M().apiUrl+"/get_page_custom",{method:"POST",body:{slug:p.params.slug}}))),o=await o,c(),o);console.log("pageData",s.value);const g=O();return s.value?g.value=!0:U("/404"),(Y,Z)=>{var l,u,i,m;const f=N,y=S,b=T,k=V,F=A,h=L,$=R,v=E,w=I,B=P,C=j;return t(),n("div",Q,[q("div",W,[r(f,{data:(u=(l=d(s))==null?void 0:l.data)==null?void 0:u.key_visual},null,8,["data"])]),(t(!0),n(z,null,G((m=(i=d(s))==null?void 0:i.data)==null?void 0:m.flex,(a,D)=>(t(),n("section",{class:"page-slug__flex",key:D},[a.acf_fc_layout==="full_cards"?(t(),e(y,{key:0,data:a},null,8,["data"])):_("",!0),a.acf_fc_layout==="ani_number"?(t(),e(b,{key:1,data:a},null,8,["data"])):_("",!0),a.acf_fc_layout==="ig_show"?(t(),e(k,{key:2,data:a},null,8,["data"])):_("",!0),a.acf_fc_layout==="room_show"?(t(),e(F,{key:3,data:a},null,8,["data"])):_("",!0),a.acf_fc_layout==="big_slider"?(t(),e(h,{key:4,data:a},null,8,["data"])):_("",!0),a.acf_fc_layout==="half_layout"?(t(),e($,{key:5,data:a},null,8,["data"])):_("",!0),a.acf_fc_layout==="title_big_img"?(t(),e(v,{key:6,data:a},null,8,["data"])):_("",!0),a.acf_fc_layout==="full_bg"?(t(),e(w,{key:7,data:a},null,8,["data"])):_("",!0),a.acf_fc_layout==="title_double"?(t(),e(B,{key:8,data:a},null,8,["data"])):_("",!0)]))),128)),r(C)])}}};export{sa as default};