import { _ as __nuxt_component_1 } from './index-a37f0cc5.mjs';
import { e as useAsyncData, f as useRuntimeConfig, u as usePageLoaded, n as navigateTo } from '../server.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { u as useHead } from './composables-b942f3cc.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './nuxt-link-129bc6c8.mjs';
import 'ufo';
import './nuxt-icon-503afd00.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'h3';
import '@formkit/core';
import '@formkit/utils';
import '@formkit/inputs';
import '@formkit/rules';
import '@formkit/validation';
import '@formkit/i18n';
import '@formkit/themes';
import '@formkit/observer';
import '@intlify/core-base';
import 'cookie-es';
import 'is-https';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const _sfc_main = {
  __name: "privacy",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    let __temp, __restore;
    const { data: pageData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "get_page_custom",
      () => $fetch(useRuntimeConfig().apiUrl + "/get_page_custom", {
        method: "POST",
        body: {
          slug: "privacy"
        }
      })
    )), __temp = await __temp, __restore(), __temp);
    console.log(pageData.value);
    const pageloaded = usePageLoaded();
    if (pageData.value) {
      pageloaded.value = true;
    } else {
      navigateTo("/404");
    }
    useHead({
      title: (_b = (_a = pageData == null ? void 0 : pageData.value) == null ? void 0 : _a.data) == null ? void 0 : _b.og_title,
      meta: [
        { property: "og:locale", content: "zh" },
        { name: "description", content: (_d = (_c = pageData == null ? void 0 : pageData.value) == null ? void 0 : _c.data) == null ? void 0 : _d.meta_description },
        { hid: "og:title", property: "og:title", content: (_f = (_e = pageData == null ? void 0 : pageData.value) == null ? void 0 : _e.data) == null ? void 0 : _f.og_title },
        { hid: "og:description", property: "og:description", content: (_h = (_g = pageData == null ? void 0 : pageData.value) == null ? void 0 : _g.data) == null ? void 0 : _h.meta_description },
        { hid: "og:image", property: "og:image", content: (_k = (_j = (_i = pageData == null ? void 0 : pageData.value) == null ? void 0 : _i.data) == null ? void 0 : _j.og_image) == null ? void 0 : _k.url },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2;
      const _component_Footer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-privacy" }, _attrs))}><div class="page-privacy__wrapper container"><div>${(_c2 = (_b2 = (_a2 = unref(pageData)) == null ? void 0 : _a2.data) == null ? void 0 : _b2.post) == null ? void 0 : _c2.post_content}</div></div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=privacy-d89c6799.mjs.map
