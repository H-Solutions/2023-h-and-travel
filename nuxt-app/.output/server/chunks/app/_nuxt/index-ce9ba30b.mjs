import { _ as __nuxt_component_0$2 } from './nuxt-link-129bc6c8.mjs';
import _sfc_main$3 from './nuxt-icon-503afd00.mjs';
import { ref, withAsyncContext, mergeProps, unref, useSSRContext, resolveDirective, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_1 } from './index-a37f0cc5.mjs';
import { d as useRoute, u as usePageLoaded, e as useAsyncData, f as useRuntimeConfig } from '../server.mjs';
import { u as useHead } from './composables-b942f3cc.mjs';
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

const _sfc_main$2 = {
  __name: "roomCard",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_nuxt_icon = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "elements-room-card" }, _attrs))}><figure><img${ssrRenderAttr("src", (_b = (_a = __props.data.fields.key_visual) == null ? void 0 : _a.slider[0]) == null ? void 0 : _b.url)} alt=""></figure><div class="elements-room-card-info"><h3>${ssrInterpolate(__props.data.title)}</h3>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/room/" + __props.data.slug
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u67E5\u770B\u623F\u578B `);
            _push2(ssrRenderComponent(_component_nuxt_icon, { name: "arrow_right" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" \u67E5\u770B\u623F\u578B "),
              createVNode(_component_nuxt_icon, { name: "arrow_right" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/roomCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "roomList",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    ref();
    ref();
    const swiperIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_ElementsRoomCard = __nuxt_component_0$1;
      const _component_nuxt_icon = _sfc_main$3;
      const _directive_inview = resolveDirective("inview");
      const _directive_fade = resolveDirective("fade");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "elements-room-list" }, _attrs))}><div class="elements-room-list__title">`);
      if ((_a = __props.data) == null ? void 0 : _a.title.deco_title) {
        _push(`<span class="-en">${ssrInterpolate((_b = __props.data) == null ? void 0 : _b.title.deco_title)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if ((_c = __props.data) == null ? void 0 : _c.title.title) {
        _push(`<h3>${ssrInterpolate((_d = __props.data) == null ? void 0 : _d.title.title)}</h3>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="elements-room-list__item"><!--[-->`);
      ssrRenderList((_e = __props.data) == null ? void 0 : _e.rooms, (room, key) => {
        _push(ssrRenderComponent(_component_ElementsRoomCard, mergeProps({
          key,
          data: room
        }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)), null, _parent));
      });
      _push(`<!--]--></div><div class="elements-room-list__swiper"><div class="elements-room-list__swiper-wrapper swiper-wrapper"><!--[-->`);
      ssrRenderList((_f = __props.data) == null ? void 0 : _f.rooms, (room, key) => {
        _push(`<div class="elements-room-list__swiper-slide swiper-slide">`);
        _push(ssrRenderComponent(_component_ElementsRoomCard, mergeProps({ data: room }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)), null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="elements-room-list__swiper-navigation"><div class="elements-room-list__swiper-navigation-prev">`);
      _push(ssrRenderComponent(_component_nuxt_icon, { name: "arrow_right" }, null, _parent));
      _push(`</div><div class="elements-room-list__swiper-navigation-text"><span>${ssrInterpolate(unref(swiperIndex) + 1)}</span><span>/</span><span>${ssrInterpolate((_g = __props.data) == null ? void 0 : _g.rooms.length)}</span></div><div class="elements-room-list__swiper-navigation-next">`);
      _push(ssrRenderComponent(_component_nuxt_icon, { name: "arrow_right" }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/roomList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    template: {
      type: Object,
      default: {}
    }
  },
  async setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g;
    let __temp, __restore;
    useRoute();
    const pageloaded = usePageLoaded();
    pageloaded.value = true;
    const roomType = ref("all");
    const { data: pageData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "get_page_cate",
      () => $fetch(useRuntimeConfig().apiUrl + "/get_rooms_by_cate", {
        method: "GET"
      })
    )), __temp = await __temp, __restore(), __temp);
    useHead({
      title: "\u623F\u578B\u4E00\u89BD",
      meta: [
        { property: "og:locale", content: "zh" },
        { name: "description", content: (_b = (_a = pageData == null ? void 0 : pageData.value) == null ? void 0 : _a.data) == null ? void 0 : _b.meta_description },
        { hid: "og:title", property: "og:title", content: "\u623F\u578B\u4E00\u89BD" },
        { hid: "og:description", property: "og:description", content: (_d = (_c = pageData == null ? void 0 : pageData.value) == null ? void 0 : _c.data) == null ? void 0 : _d.meta_description },
        { hid: "og:image", property: "og:image", content: (_g = (_f = (_e = pageData == null ? void 0 : pageData.value) == null ? void 0 : _e.data) == null ? void 0 : _f.og_image) == null ? void 0 : _g.url },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElementsRoomList = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-rooms" }, _attrs))}><div class="container"><div class="page-rooms__wrap"><div class="page-rooms__wrap-title"><h1>\u623F\u578B\u4E00\u89BD</h1><span>ROOMS</span></div><div class="page-rooms__wrap-cate"><div class="${ssrRenderClass([{ "-active": unref(roomType) === "all" }, "btn"])}"> \u6240\u6709\u623F\u578B </div><!--[-->`);
      ssrRenderList(unref(pageData), (item, key) => {
        _push(`<div class="${ssrRenderClass([{ "-active": unref(roomType) === key }, "btn"])}">${ssrInterpolate(item == null ? void 0 : item.title.title)}</div>`);
      });
      _push(`<!--]--></div></div></div><div class="page-rooms__wrap__room"><div class="container"><!--[-->`);
      ssrRenderList(unref(pageData), (item, key) => {
        _push(`<div>`);
        if (unref(roomType) === "all" || unref(roomType) === key) {
          _push(ssrRenderComponent(_component_ElementsRoomList, { data: item }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/room/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-ce9ba30b.mjs.map
