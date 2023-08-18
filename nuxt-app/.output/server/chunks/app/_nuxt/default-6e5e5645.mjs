import { mergeProps, useSSRContext, defineComponent, h, ref, computed, unref, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { _ as __nuxt_component_2, h as useNuxtApp, a as useGlobal, i as useMenuOpen, b as useRouter } from '../server.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-129bc6c8.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import _sfc_main$4 from './nuxt-icon-503afd00.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'h3';
import 'ufo';
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

const __nuxt_component_0$1 = /* @__PURE__ */ defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    }
  },
  setup(props, { slots }) {
    const indicator = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle
    });
    const nuxtApp = useNuxtApp();
    nuxtApp.hook("page:start", indicator.start);
    nuxtApp.hook("page:finish", indicator.finish);
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: indicator.isLoading.value ? 1 : 0,
        background: props.color || void 0,
        backgroundSize: `${100 / indicator.progress.value * 100}% auto`,
        transform: `scaleX(${indicator.progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
function useLoadingIndicator(opts) {
  const progress = ref(0);
  const isLoading = ref(false);
  computed(() => 1e4 / opts.duration);
  let _timer = null;
  let _throttle = null;
  function start() {
    clear();
    progress.value = 0;
    if (opts.throttle && false) {
      _throttle = setTimeout(() => {
        isLoading.value = true;
      }, opts.throttle);
    } else {
      isLoading.value = true;
    }
  }
  function finish() {
    progress.value = 100;
    _hide();
  }
  function clear() {
    clearInterval(_timer);
    clearTimeout(_throttle);
    _timer = null;
    _throttle = null;
  }
  function _hide() {
    clear();
  }
  return {
    progress,
    isLoading,
    start,
    finish,
    clear
  };
}
const _sfc_main$3 = {
  __name: "topbar",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "head-topbar" }, _attrs))}>`);
      if (!__props.data.is_link) {
        _push(`<div><div>${ssrInterpolate(__props.data.text)}</div></div>`);
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.data.link.url,
          title: __props.data.link.title,
          target: __props.data.link.target
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}>${ssrInterpolate(__props.data.link.title)}</div>`);
            } else {
              return [
                createVNode("div", {
                  textContent: toDisplayString(__props.data.link.title)
                }, null, 8, ["textContent"])
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/topbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "navigation",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    ref([
      {
        name: "Home",
        link: "/"
      },
      {
        name: "About",
        link: "/about"
      },
      {
        name: "Blog",
        link: "/blog"
      },
      {
        name: "Form",
        link: "/form"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "navigation-main" }, _attrs))}><ul><li><a href="https://h-and.world/" rel="noopener noreferrer" target="_blank" title="\u95DC\u65BCH&amp;"><img src="https://rainbow.h-and.world/wp-content/uploads/2023/08/BH__LOGO.png" style="${ssrRenderStyle({ "height": "2rem", "width": "auto" })}"></a></li><!--[-->`);
      ssrRenderList(__props.data, (item, index) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.item.url,
          title: item.item.title,
          target: item.item.target
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/navigation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1$1 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const global = useGlobal();
    const isScrolled = ref(false);
    const menuOpen = useMenuOpen();
    const router = useRouter();
    router.beforeEach((to, from) => {
      menuOpen.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_HeaderTopbar = __nuxt_component_0;
      const _component_HeaderNavigation = __nuxt_component_1$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_nuxt_icon = _sfc_main$4;
      _push(`<header${ssrRenderAttrs(mergeProps({
        id: "header",
        class: ["header-index", { "is-scrolled": unref(isScrolled) }]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_HeaderTopbar, {
        data: unref(global).top_bar
      }, null, _parent));
      _push(`<div class="container"><div class="header-index__wrap"><div class="header-index__navigation">`);
      _push(ssrRenderComponent(_component_HeaderNavigation, {
        data: unref(global).main_menu
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "header-index__logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(global).logo.url)}${ssrRenderAttr("alt", unref(global).logo.alt)}${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(global).logo.url,
                alt: unref(global).logo.alt
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "header-index__right",
        to: (_a = unref(global).right_top_link) == null ? void 0 : _a.url,
        target: (_b = unref(global).right_top_link) == null ? void 0 : _b.target
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_icon, { name: "reserve" }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(unref(global).right_top_link.title)}`);
          } else {
            return [
              createVNode(_component_nuxt_icon, { name: "reserve" }),
              createTextVNode(" " + toDisplayString(unref(global).right_top_link.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="header-index__wrap-hamburger"><span></span><span></span></div></div></div><div class="${ssrRenderClass([{
        "-active": unref(menuOpen)
      }, "header-index__menu-bg"])}"></div><div class="${ssrRenderClass([{
        "-active": unref(menuOpen)
      }, "header-index__menu container"])}"><div class="header-index__menu-top">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "header-index__menu-top-logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(global).logo.url)}${ssrRenderAttr("alt", unref(global).logo.alt)}${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(global).logo.url,
                alt: unref(global).logo.alt
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="header-index__menu-top-close">`);
      _push(ssrRenderComponent(_component_nuxt_icon, { name: "close" }, null, _parent));
      _push(`</div></div><div class="header-index__menu-navigation">`);
      _push(ssrRenderComponent(_component_HeaderNavigation, {
        data: unref(global).main_menu
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "header-index__menu-btn",
        to: (_c = unref(global).right_top_link) == null ? void 0 : _c.url,
        target: (_d = unref(global).right_top_link) == null ? void 0 : _d.target
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_icon, { name: "reserve" }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(unref(global).right_top_link.title)}`);
          } else {
            return [
              createVNode(_component_nuxt_icon, { name: "reserve" }),
              createTextVNode(" " + toDisplayString(unref(global).right_top_link.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLoadingIndicator = __nuxt_component_0$1;
      const _component_Header = __nuxt_component_1;
      const _component_NuxtPage = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "wrapper",
        class: "wrapper"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLoadingIndicator, null, null, _parent));
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<main id="mainBox">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-6e5e5645.mjs.map
