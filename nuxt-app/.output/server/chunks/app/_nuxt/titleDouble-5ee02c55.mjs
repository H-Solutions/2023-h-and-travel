import { useSSRContext, ref, mergeProps, unref, resolveDirective, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrRenderClass, ssrGetDirectiveProps, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { F as FormKitIcon } from '../server.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-129bc6c8.mjs';

const _sfc_main$3 = {
  __name: "decoTitle",
  __ssrInlineRender: true,
  props: {
    data: {
      type: String,
      default: {}
    },
    hero: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _directive_inview = resolveDirective("inview");
      if (__props.data !== {}) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["elements-deco-title", {
            "-hero": __props.hero,
            "-large": __props.large,
            "-small": __props.small,
            "-center": __props.center
          }]
        }, _attrs, ssrGetDirectiveProps(_ctx, _directive_inview)))}><!--[-->`);
        ssrRenderList((_a = __props.data) == null ? void 0 : _a.split(","), (item, key) => {
          _push(`<span class="-en"><h1>${ssrInterpolate(item)}</h1></span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/decoTitle.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "carousel",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
      default: []
    },
    center: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    ref(null);
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-carousel" }, _attrs))}><div class="page-carousel__inner container"><div class="swiper-wrapper"><!--[-->`);
      ssrRenderList(__props.data, (item, index) => {
        _push(`<figure class="swiper-slide"><img${ssrRenderAttr("src", item == null ? void 0 : item.url)}${ssrRenderAttr("alt", item == null ? void 0 : item.url)}></figure>`);
      });
      _push(`<!--]--></div></div>`);
      if (__props.data.length > 1) {
        _push(`<div class="page-carousel__tool"><div class="swiper-button-prev">`);
        _push(ssrRenderComponent(unref(FormKitIcon), { icon: "arrowLeft" }, null, _parent));
        _push(`</div><div class="${ssrRenderClass([{ "-larger": !__props.center }, "swiper-pagination -en"])}"></div><div class="swiper-button-next">`);
        _push(ssrRenderComponent(unref(FormKitIcon), { icon: "arrowRight" }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/carousel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "fullBg",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
      const _component_ElementsDecoTitle = __nuxt_component_0$1;
      const _component_nuxt_link = __nuxt_component_0$2;
      const _directive_inview = resolveDirective("inview");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flexible-full-bg" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_inview)))}><div class="flexible-full-bg__bg" style="${ssrRenderStyle({ backgroundImage: "url(" + ((_b = (_a = __props.data) == null ? void 0 : _a.image) == null ? void 0 : _b.url) + ")" })}"></div><div class="flexible-full-bg__title">`);
      if ((_c = __props.data) == null ? void 0 : _c.deco_title) {
        _push(ssrRenderComponent(_component_ElementsDecoTitle, {
          data: (_d = __props.data) == null ? void 0 : _d.deco_title,
          large: true
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if ((_e = __props.data) == null ? void 0 : _e.title) {
        _push(`<h3>${ssrInterpolate((_f = __props.data) == null ? void 0 : _f.title)}</h3>`);
      } else {
        _push(`<!---->`);
      }
      if ((_g = __props.data) == null ? void 0 : _g.des) {
        _push(`<p>${ssrInterpolate((_h = __props.data) == null ? void 0 : _h.des)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if ((_i = __props.data) == null ? void 0 : _i.link) {
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: (_k = (_j = __props.data) == null ? void 0 : _j.link) == null ? void 0 : _k.url,
          target: (_m = (_l = __props.data) == null ? void 0 : _l.link) == null ? void 0 : _m.target
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(__props.data.link.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(__props.data.link.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/flexible/fullBg.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$1;
const _sfc_main = {
  __name: "titleDouble",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      const _component_ElementsDecoTitle = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flexible-title-double container" }, _attrs))}><div class="flexible-title-double__wrapper"><div class="flexible-title-double__top"><div class="flexible-title-double__top-title"><h3>${ssrInterpolate((_a = __props.data) == null ? void 0 : _a.title)}</h3>`);
      if ((_b = __props.data) == null ? void 0 : _b.deco_title) {
        _push(ssrRenderComponent(_component_ElementsDecoTitle, {
          data: (_c = __props.data) == null ? void 0 : _c.deco_title,
          large: true
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flexible-title-double__top-img"><figure><img${ssrRenderAttr("src", (_e = (_d = __props.data) == null ? void 0 : _d.two_images[0]) == null ? void 0 : _e.url)}${ssrRenderAttr("alt", (_g = (_f = __props.data) == null ? void 0 : _f.two_images[0]) == null ? void 0 : _g.alt)}></figure><figure><img${ssrRenderAttr("src", (_i = (_h = __props.data) == null ? void 0 : _h.two_images[1]) == null ? void 0 : _i.url)}${ssrRenderAttr("alt", (_k = (_j = __props.data) == null ? void 0 : _j.two_images[1]) == null ? void 0 : _k.alt)}></figure></div></div><div class="flexible-title-double__editor">${(_l = __props.data) == null ? void 0 : _l.editor}</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/flexible/titleDouble.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main;

export { __nuxt_component_4 as _, __nuxt_component_3 as a, __nuxt_component_0$1 as b, __nuxt_component_0 as c };
//# sourceMappingURL=titleDouble-5ee02c55.mjs.map
