import { c as __nuxt_component_0, a as __nuxt_component_3, _ as __nuxt_component_4, b as __nuxt_component_0$1$1 } from './titleDouble-5ee02c55.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-129bc6c8.mjs';
import _sfc_main$2 from './nuxt-icon-503afd00.mjs';
import { withAsyncContext, resolveDirective, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, ref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_1 } from './index-a37f0cc5.mjs';
import { d as useRoute, e as useAsyncData, f as useRuntimeConfig, u as usePageLoaded, n as navigateTo } from '../server.mjs';
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

const _sfc_main$1 = {
  __name: "roomFacilities",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    ref(null);
    ref();
    const swiperIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      const _component_ElementsDecoTitle = __nuxt_component_0$1$1;
      const _component_nuxt_icon = _sfc_main$2;
      const _directive_inview = resolveDirective("inview");
      const _directive_fade = resolveDirective("fade");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flexible-room-facilities" }, _attrs))}><div class="flexible-room-facilities__wrap container"><div class="flexible-room-facilities__wrap-title">`);
      if ((_a = __props.data) == null ? void 0 : _a.title) {
        _push(`<h3>${ssrInterpolate((_b = __props.data) == null ? void 0 : _b.title)}</h3>`);
      } else {
        _push(`<!---->`);
      }
      if ((_c = __props.data) == null ? void 0 : _c.deco_title) {
        _push(ssrRenderComponent(_component_ElementsDecoTitle, {
          class: "-en",
          data: (_d = __props.data) == null ? void 0 : _d.deco_title
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (((_e = __props.data) == null ? void 0 : _e.icons.length) > 0) {
        _push(`<ul${ssrRenderAttrs(mergeProps({ class: "flexible-room-facilities__wrap-icons" }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}><!--[-->`);
        ssrRenderList((_f = __props.data) == null ? void 0 : _f.icons, (icon, iconindex) => {
          _push(`<li><figure><img${ssrRenderAttr("src", icon.icon.url)}${ssrRenderAttr("alt", icon.text)}></figure><span>${ssrInterpolate(icon.text)}</span></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (((_g = __props.data) == null ? void 0 : _g.setting_imgs.length) > 0) {
        _push(`<ul class="flexible-room-facilities__wrap-imgs"><!--[-->`);
        ssrRenderList((_h = __props.data) == null ? void 0 : _h.setting_imgs, (img, imgindex) => {
          _push(`<li><figure><img${ssrRenderAttr("src", img.image.url)}${ssrRenderAttr("alt", img.text)}></figure><span${ssrRenderAttrs(mergeProps(ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}>${ssrInterpolate(img.text)}</span></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flexible-room-facilities__swiper"><div class="flexible-room-facilities__swiper-wrapper swiper-wrapper"><!--[-->`);
      ssrRenderList((_i = __props.data) == null ? void 0 : _i.setting_imgs, (img, imgindex) => {
        _push(`<div class="flexible-room-facilities__swiper-slide swiper-slide"><figure><img${ssrRenderAttr("src", img.image.url)}${ssrRenderAttr("alt", img.text)}></figure><span${ssrRenderAttrs(mergeProps(ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}>${ssrInterpolate(img.text)}</span></div>`);
      });
      _push(`<!--]--></div><div class="flexible-room-facilities__swiper-navigation"><div class="flexible-room-facilities__swiper-navigation-prev">`);
      _push(ssrRenderComponent(_component_nuxt_icon, { name: "arrow_right" }, null, _parent));
      _push(`</div><div class="flexible-room-facilities__swiper-navigation-text"><span>${ssrInterpolate(unref(swiperIndex) + 1)}</span><span>/</span><span>${ssrInterpolate((_j = __props.data) == null ? void 0 : _j.setting_imgs.length)}</span></div><div class="flexible-room-facilities__swiper-navigation-next">`);
      _push(ssrRenderComponent(_component_nuxt_icon, { name: "arrow_right" }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/flexible/roomFacilities.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  props: {
    template: {
      type: Object,
      default: {}
    }
  },
  async setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    let __temp, __restore;
    const route = useRoute();
    const { data: pageData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "get_page_rooms_slug" + route.params.slug,
      () => $fetch(useRuntimeConfig().apiUrl + "/get_single_room", {
        method: "POST",
        body: {
          slug: route.params.slug
        }
      }),
      "$ho5jeR3aRp"
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
      var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
      const _component_ElementsCarousel = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_FlexibleRoomFacilities = __nuxt_component_2;
      const _component_FlexibleTitleDouble = __nuxt_component_3;
      const _component_FlexibleFullBg = __nuxt_component_4;
      const _component_Footer = __nuxt_component_1;
      const _directive_inview = resolveDirective("inview");
      const _directive_fade = resolveDirective("fade");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rooms-sigle" }, _attrs))}><div class="rooms-sigle__wrap"><div class="rooms-sigle__wrap-title container">`);
      if ((_b2 = (_a2 = unref(pageData).data) == null ? void 0 : _a2.post) == null ? void 0 : _b2.post_title) {
        _push(`<h1>${ssrInterpolate((_d2 = (_c2 = unref(pageData).data) == null ? void 0 : _c2.post) == null ? void 0 : _d2.post_title)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if ((_f2 = (_e2 = unref(pageData).data) == null ? void 0 : _e2.key_visual) == null ? void 0 : _f2.deco_title) {
        _push(`<span class="deco -en">${ssrInterpolate((_h2 = (_g2 = unref(pageData).data) == null ? void 0 : _g2.key_visual) == null ? void 0 : _h2.deco_title)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if ((_j2 = (_i2 = unref(pageData).data) == null ? void 0 : _i2.key_visual) == null ? void 0 : _j2.slider) {
        _push(ssrRenderComponent(_component_ElementsCarousel, {
          data: (_l = (_k2 = unref(pageData).data) == null ? void 0 : _k2.key_visual) == null ? void 0 : _l.slider
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container"><div class="rooms-sigle__wrap__hero">`);
      if ((_n = (_m = unref(pageData).data) == null ? void 0 : _m.key_visual) == null ? void 0 : _n.description) {
        _push(`<div${ssrRenderAttrs(mergeProps(ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}>${(_p = (_o = unref(pageData).data) == null ? void 0 : _o.key_visual) == null ? void 0 : _p.description}</div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_r = (_q = unref(pageData).data) == null ? void 0 : _q.key_visual) == null ? void 0 : _r.link) {
        _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
          class: "rooms-sigle__wrap__hero__btn",
          to: (_t = (_s = unref(pageData).data) == null ? void 0 : _s.key_visual) == null ? void 0 : _t.link.url,
          target: (_v = (_u = unref(pageData).data) == null ? void 0 : _u.key_visual) == null ? void 0 : _v.link.target
        }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a3, _b3, _c3, _d3;
            if (_push2) {
              _push2(`${ssrInterpolate((_b3 = (_a3 = unref(pageData).data) == null ? void 0 : _a3.key_visual) == null ? void 0 : _b3.link.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString((_d3 = (_c3 = unref(pageData).data) == null ? void 0 : _c3.key_visual) == null ? void 0 : _d3.link.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_FlexibleRoomFacilities, {
        data: (_w = unref(pageData).data) == null ? void 0 : _w.room_settings
      }, null, _parent));
      _push(ssrRenderComponent(_component_FlexibleTitleDouble, {
        data: (_x = unref(pageData).data) == null ? void 0 : _x.checkin_list
      }, null, _parent));
      _push(ssrRenderComponent(_component_FlexibleFullBg, {
        data: (_y = unref(pageData).data) == null ? void 0 : _y.more_rooms
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/room/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-660e60a2.mjs.map
