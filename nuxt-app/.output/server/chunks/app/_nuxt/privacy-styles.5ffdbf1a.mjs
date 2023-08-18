import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const privacy_vue_vue_type_style_index_0_lang = '@charset "UTF-8";@font-face{font-family:Gambetta-Regular;src:url(' + buildAssetsURL("Gambetta-Regular.ad720b72.otf") + ')}.page-privacy__wrapper{padding-bottom:8rem;padding-top:8rem}@media (max-width:1023.98px){.page-privacy__wrapper{padding-bottom:4rem;padding-top:4rem}}.page-privacy__wrapper>div>h1{font-family:Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:3.2rem;font-weight:400;font-weight:700;letter-spacing:.16rem;line-height:1.5}.page-privacy__wrapper>div>h1.-en,body.language-en .page-privacy__wrapper>div>h1{font-family:Gambetta-Regular,Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-weight:400;letter-spacing:normal;line-height:1.2}@media (max-width:1023.98px){.page-privacy__wrapper>div>h1{font-family:Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:2.4rem;font-weight:400;line-height:1.5}}.page-privacy__wrapper>div>h1:not(:last-child){margin-bottom:3.6rem}.page-privacy__wrapper>div>h2{font-family:Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:2.4rem;font-weight:400;font-weight:700;line-height:1.5}@media (max-width:1023.98px){.page-privacy__wrapper>div>h2{font-family:Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:2rem;font-weight:400;line-height:1.5}}.page-privacy__wrapper>div>h2:not(:last-child){margin-bottom:3.6rem}.page-privacy__wrapper>div>h3{font-family:Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:2rem;font-weight:400;font-weight:700;line-height:1.5}@media (max-width:1023.98px){.page-privacy__wrapper>div>h3{font-family:Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:1.6rem;font-size:1.6rem!important;font-weight:400;line-height:1.5}}@media (max-width:1023.98px) and (max-width:1023.98px){.page-privacy__wrapper>div>h3{font-size:1.4rem}}.page-privacy__wrapper>div>h3:not(:last-child){margin-bottom:3.6rem}.page-privacy__wrapper>div>p{font-family:Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:1.6rem;font-weight:400;line-height:1.5}@media (max-width:1023.98px){.page-privacy__wrapper>div>p{font-size:1.4rem}}.page-privacy__wrapper>div>p:not(:last-child){margin-bottom:3.6rem}.page-privacy__wrapper>div>p>strong{font-weight:700}.page-privacy__wrapper>div>p>em{font-style:italic}.page-privacy__wrapper>div>p>a{color:#9b815a;text-decoration:underline}.page-privacy__wrapper>div>blockquote{background-color:#fff;color:#9b815a;display:flex;justify-content:center;padding:2.4rem 10.8rem}@media (max-width:1023.98px){.page-privacy__wrapper>div>blockquote{padding:2.4rem 5.2rem}}.page-privacy__wrapper>div>blockquote:not(:last-child){margin-bottom:3.6rem}.page-privacy__wrapper>div>blockquote>p{align-items:center;display:flex;font-family:Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:2rem;font-weight:400;line-height:1.5;position:relative;text-align:center}@media (max-width:1023.98px){.page-privacy__wrapper>div>blockquote>p{font-family:Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:1.6rem;font-weight:400;line-height:1.5}}@media (max-width:1023.98px) and (max-width:1023.98px){.page-privacy__wrapper>div>blockquote>p{font-size:1.4rem}}.page-privacy__wrapper>div>blockquote>p:before{content:"\u201C";font-size:4rem;left:-1.2rem;line-height:0;position:absolute;transform:translateX(-100%)}.page-privacy__wrapper>div>blockquote>p:after{content:"\u201D";font-size:4rem;line-height:0;position:absolute;right:-1.2rem;transform:translateX(100%)}.page-privacy__wrapper>div>ol{counter-reset:item;display:flex;flex-direction:column;list-style:decimal-leading-zero!important}.page-privacy__wrapper>div>ol:not(:last-child){margin-bottom:3.6rem}.page-privacy__wrapper>div>ol>li{display:flex;font-family:Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:1.6rem;font-weight:400;line-height:1.5}@media (max-width:1023.98px){.page-privacy__wrapper>div>ol>li{font-size:1.4rem}}.page-privacy__wrapper>div>ol>li:not(:last-child){margin-bottom:1.6rem}.page-privacy__wrapper>div>ol>li:before{color:#9b815a;content:counter(item,decimal-leading-zero);counter-increment:item;font-weight:700;margin-right:.8rem}.page-privacy__wrapper>div>ul{display:flex;flex-direction:column;list-style:disc!important}.page-privacy__wrapper>div>ul:not(:last-child){margin-bottom:3.6rem}.page-privacy__wrapper>div>ul>li{display:flex;font-family:Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:1.6rem;font-weight:400;line-height:1.5}@media (max-width:1023.98px){.page-privacy__wrapper>div>ul>li{font-size:1.4rem}}.page-privacy__wrapper>div>ul>li:not(:last-child){margin-bottom:1.6rem}.page-privacy__wrapper>div>ul>li:before{color:#9b815a;content:"\uFF0A";font-weight:700;margin-right:.8rem}';

const privacyStyles_5ffdbf1a = [privacy_vue_vue_type_style_index_0_lang];

export { privacyStyles_5ffdbf1a as default };
//# sourceMappingURL=privacy-styles.5ffdbf1a.mjs.map
