import { _ as __nuxt_component_0$1, a as __nuxt_component_1$1, b as __nuxt_component_2, c as __nuxt_component_3, d as __nuxt_component_4, e as __nuxt_component_5, f as __nuxt_component_6, g as __nuxt_component_7 } from './titleBigImg-6b72dc1c.mjs';
import { _ as __nuxt_component_4$1, a as __nuxt_component_3$1 } from './titleDouble-5ee02c55.mjs';
import { _ as __nuxt_component_1 } from './index-a37f0cc5.mjs';
import { e as useAsyncData, f as useRuntimeConfig, u as usePageLoaded, n as navigateTo } from '../server.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { u as useHead } from './composables-b942f3cc.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import './nuxt-icon-503afd00.mjs';
import './nuxt-link-129bc6c8.mjs';
import 'ufo';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    let __temp, __restore;
    const { data: pageData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "get_page_home",
      () => $fetch(useRuntimeConfig().apiUrl + "/get_page_custom", {
        method: "POST",
        body: {
          slug: "/"
        }
      })
    )), __temp = await __temp, __restore(), __temp);
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
      var _a2, _b2, _c2, _d2;
      const _component_ElementsKeyVisual = __nuxt_component_0$1;
      const _component_FlexibleFullCards = __nuxt_component_1$1;
      const _component_FlexibleAniNumber = __nuxt_component_2;
      const _component_FlexibleIgShow = __nuxt_component_3;
      const _component_FlexibleRoomShow = __nuxt_component_4;
      const _component_FlexibleBigSlider = __nuxt_component_5;
      const _component_FlexibleHalfLayout = __nuxt_component_6;
      const _component_FlexibleTitleBigImg = __nuxt_component_7;
      const _component_FlexibleFullBg = __nuxt_component_4$1;
      const _component_FlexibleTitleDouble = __nuxt_component_3$1;
      const _component_Footer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-index" }, _attrs))}><div class="page-index__kv">`);
      _push(ssrRenderComponent(_component_ElementsKeyVisual, {
        data: (_b2 = (_a2 = unref(pageData)) == null ? void 0 : _a2.data) == null ? void 0 : _b2.key_visual
      }, null, _parent));
      _push(`</div><!--[-->`);
      ssrRenderList((_d2 = (_c2 = unref(pageData)) == null ? void 0 : _c2.data) == null ? void 0 : _d2.flex, (flex, key) => {
        _push(`<section class="${ssrRenderClass([{ isbg: flex.acf_fc_layout === "ig_show" }, "page-index__flex"])}">`);
        if (flex.acf_fc_layout === "full_cards") {
          _push(ssrRenderComponent(_component_FlexibleFullCards, { data: flex }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (flex.acf_fc_layout === "ani_number") {
          _push(ssrRenderComponent(_component_FlexibleAniNumber, { data: flex }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (flex.acf_fc_layout === "ig_show") {
          _push(ssrRenderComponent(_component_FlexibleIgShow, { data: flex }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (flex.acf_fc_layout === "room_show") {
          _push(ssrRenderComponent(_component_FlexibleRoomShow, { data: flex }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (flex.acf_fc_layout === "big_slider") {
          _push(ssrRenderComponent(_component_FlexibleBigSlider, { data: flex }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (flex.acf_fc_layout === "half_layout") {
          _push(ssrRenderComponent(_component_FlexibleHalfLayout, { data: flex }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (flex.acf_fc_layout === "title_big_img") {
          _push(ssrRenderComponent(_component_FlexibleTitleBigImg, { data: flex }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (flex.acf_fc_layout === "full_bg") {
          _push(ssrRenderComponent(_component_FlexibleFullBg, { data: flex }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (flex.acf_fc_layout === "title_double") {
          _push(ssrRenderComponent(_component_FlexibleTitleDouble, { data: flex }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</section>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-5d6dba7e.mjs.map
