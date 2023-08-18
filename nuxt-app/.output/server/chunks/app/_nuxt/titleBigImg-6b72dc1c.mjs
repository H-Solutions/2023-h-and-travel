import { b as __nuxt_component_0$1$1, c as __nuxt_component_0$3 } from './titleDouble-5ee02c55.mjs';
import _sfc_main$a from './nuxt-icon-503afd00.mjs';
import { g as useViewport } from '../server.mjs';
import { useSSRContext, ref, mergeProps, resolveDirective, unref, withCtx, createTextVNode, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrGetDirectiveProps, ssrRenderStyle } from 'vue/server-renderer';
import { _ as __nuxt_component_0$2 } from './nuxt-link-129bc6c8.mjs';

const _sfc_main$9 = {
  __name: "keyVisual",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    useViewport();
    const keyVisualRef = ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
      const _component_ElementsDecoTitle = __nuxt_component_0$1$1;
      const _component_nuxt_icon = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "elements-key-visual",
        ref_key: "keyVisualRef",
        ref: keyVisualRef
      }, _attrs))}>`);
      if (((_a = __props.data) == null ? void 0 : _a.style) == "a") {
        _push(`<div class="elements-key-visual__typea"><h2>${ssrInterpolate((_b = __props.data) == null ? void 0 : _b.title)}</h2><div class="elements-key-visual__typea-title">`);
        _push(ssrRenderComponent(_component_ElementsDecoTitle, {
          data: (_c = __props.data) == null ? void 0 : _c.deco_title,
          hero: true,
          center: true
        }, null, _parent));
        _push(`</div><div class="elements-key-visual__typea-icon">`);
        _push(ssrRenderComponent(_component_nuxt_icon, { name: "arrow_down" }, null, _parent));
        _push(`</div><div class="elements-key-visual__typea-img"><figure><img${ssrRenderAttr("src", (_e = (_d = __props.data) == null ? void 0 : _d.image) == null ? void 0 : _e.url)}${ssrRenderAttr("alt", (_g = (_f = __props.data) == null ? void 0 : _f.image) == null ? void 0 : _g.alt)}></figure></div></div>`);
      } else {
        _push(`<div class="elements-key-visual__typeb"><h2>${ssrInterpolate((_h = __props.data) == null ? void 0 : _h.title)}</h2><div class="elements-key-visual__typeb-title">`);
        _push(ssrRenderComponent(_component_ElementsDecoTitle, {
          data: (_i = __props.data) == null ? void 0 : _i.deco_title,
          hero: true,
          center: true
        }, null, _parent));
        _push(`</div><figure class="elements-key-visual__typeb-bg"><img${ssrRenderAttr("src", (_k = (_j = __props.data) == null ? void 0 : _j.image) == null ? void 0 : _k.url)}${ssrRenderAttr("alt", (_m = (_l = __props.data) == null ? void 0 : _l.image) == null ? void 0 : _m.alt)}></figure></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/keyVisual.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$9;
const _sfc_main$8 = {
  __name: "fullCards",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_ElementsDecoTitle = __nuxt_component_0$1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "elements-full-cards" }, _attrs))}><figure class="elements-full-cards__bg"><img${ssrRenderAttr("src", (_b = (_a = __props.data) == null ? void 0 : _a.image) == null ? void 0 : _b.url)}${ssrRenderAttr("alt", (_d = (_c = __props.data) == null ? void 0 : _c.image) == null ? void 0 : _d.alt)}></figure><div class="elements-full-cards__wrapper container"><div class="elements-full-cards__wrapper-title"><div class="elements-full-cards__wrapper-title-deco">`);
      _push(ssrRenderComponent(_component_ElementsDecoTitle, {
        data: (_e = __props.data) == null ? void 0 : _e.deco_title
      }, null, _parent));
      _push(`</div><h3>${ssrInterpolate((_f = __props.data) == null ? void 0 : _f.title)}</h3></div><div class="elements-full-cards__wrapper-description">${(_g = __props.data) == null ? void 0 : _g.des}</div></div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/fullCards.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$8;
const _sfc_main$7 = {
  __name: "fullCards",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    ref([]);
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElementsFullCards = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flexible-full-cards" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.data.cards, (item, key) => {
        _push(`<div class="flexible-full-cards-item"><div class="flexible-full-cards-item-sticky">`);
        _push(ssrRenderComponent(_component_ElementsFullCards, { data: item }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/flexible/fullCards.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1$1 = _sfc_main$7;
const _sfc_main$6 = {
  __name: "aniNumber",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _directive_inview = resolveDirective("inview");
      const _directive_fade = resolveDirective("fade");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flexible-ani-number" }, _attrs))}><p${ssrRenderAttrs(mergeProps(ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}>${ssrInterpolate((_a = __props.data) == null ? void 0 : _a.title)}</p><h2${ssrRenderAttrs(mergeProps(ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}>${ssrInterpolate((_b = __props.data) == null ? void 0 : _b.deco_title)}</h2><div class="flexible-ani-number__row"><!--[-->`);
      ssrRenderList((_c = __props.data) == null ? void 0 : _c.number, (item, key) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "flexible-ani-number__row-item",
          key
        }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}><figure><img${ssrRenderAttr("src", item.logo_img.url)}${ssrRenderAttr("alt", item.logo_img.alt)}></figure><span>${ssrInterpolate(item == null ? void 0 : item.num)}</span><p>${ssrInterpolate(item == null ? void 0 : item.des)}</p></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/flexible/aniNumber.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$6;
const _sfc_main$5 = {
  __name: "igCard",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_nuxt_icon = _sfc_main$a;
      _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
        class: "elements-ig-card",
        to: (_a = __props.data) == null ? void 0 : _a.url,
        target: "_blank"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
          if (_push2) {
            _push2(`<div class="elements-ig-card__top"${_scopeId}><figure${_scopeId}><img${ssrRenderAttr("src", (_b = (_a2 = __props.data) == null ? void 0 : _a2.user_img) == null ? void 0 : _b.url)}${ssrRenderAttr("alt", (_d = (_c = __props.data) == null ? void 0 : _c.user_img) == null ? void 0 : _d.alt)}${_scopeId}></figure><p${_scopeId}>${ssrInterpolate((_e = __props.data) == null ? void 0 : _e.user_name)}</p><div class="elements-ig-card__top-dot"${_scopeId}><span${_scopeId}></span><span${_scopeId}></span><span${_scopeId}></span></div></div><figure${_scopeId}><img${ssrRenderAttr("src", (_g = (_f = __props.data) == null ? void 0 : _f.image) == null ? void 0 : _g.url)}${ssrRenderAttr("alt", (_i = (_h = __props.data) == null ? void 0 : _h.image) == null ? void 0 : _i.alt)}${_scopeId}></figure><div class="elements-ig-card__bottom"${_scopeId}><div class="elements-ig-card__bottom-top"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_nuxt_icon, { name: "heart" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_nuxt_icon, { name: "comment" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_nuxt_icon, { name: "share" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_nuxt_icon, { name: "save" }, null, _parent2, _scopeId));
            _push2(`</div><p${_scopeId}>${ssrInterpolate(`${__props.data.like} likes`)}</p><span${_scopeId}><p${_scopeId}>${ssrInterpolate(__props.data.text)}</p><p${_scopeId}>...more</p></span><p${_scopeId}>${ssrInterpolate(__props.data.s_text)}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "elements-ig-card__top" }, [
                createVNode("figure", null, [
                  createVNode("img", {
                    src: (_k = (_j = __props.data) == null ? void 0 : _j.user_img) == null ? void 0 : _k.url,
                    alt: (_m = (_l = __props.data) == null ? void 0 : _l.user_img) == null ? void 0 : _m.alt
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("p", {
                  textContent: toDisplayString((_n = __props.data) == null ? void 0 : _n.user_name)
                }, null, 8, ["textContent"]),
                createVNode("div", { class: "elements-ig-card__top-dot" }, [
                  createVNode("span"),
                  createVNode("span"),
                  createVNode("span")
                ])
              ]),
              createVNode("figure", null, [
                createVNode("img", {
                  src: (_p = (_o = __props.data) == null ? void 0 : _o.image) == null ? void 0 : _p.url,
                  alt: (_r = (_q = __props.data) == null ? void 0 : _q.image) == null ? void 0 : _r.alt
                }, null, 8, ["src", "alt"])
              ]),
              createVNode("div", { class: "elements-ig-card__bottom" }, [
                createVNode("div", { class: "elements-ig-card__bottom-top" }, [
                  createVNode(_component_nuxt_icon, { name: "heart" }),
                  createVNode(_component_nuxt_icon, { name: "comment" }),
                  createVNode(_component_nuxt_icon, { name: "share" }),
                  createVNode(_component_nuxt_icon, { name: "save" })
                ]),
                createVNode("p", {
                  textContent: toDisplayString(`${__props.data.like} likes`)
                }, null, 8, ["textContent"]),
                createVNode("span", null, [
                  createVNode("p", {
                    textContent: toDisplayString(__props.data.text)
                  }, null, 8, ["textContent"]),
                  createVNode("p", null, "...more")
                ]),
                createVNode("p", {
                  textContent: toDisplayString(__props.data.s_text)
                }, null, 8, ["textContent"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/igCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$5;
const _sfc_main$4 = {
  __name: "igShow",
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
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_ElementsDecoTitle = __nuxt_component_0$1$1;
      const _component_ElementsIgCard = __nuxt_component_1;
      const _component_nuxt_icon = _sfc_main$a;
      const _directive_inview = resolveDirective("inview");
      const _directive_fade = resolveDirective("fade");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flexible-ig-show container" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_inview)))}><div class="flexible-ig-show__bg" style="${ssrRenderStyle({ backgroundImage: "url(" + ((_b = (_a = __props.data) == null ? void 0 : _a.bg_img) == null ? void 0 : _b.url) + ")" })}"></div><div class="flexible-ig-show__wrapper"><div class="flexible-ig-show__wrapper-title"><p${ssrRenderAttrs(mergeProps(ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}>${ssrInterpolate((_c = __props.data) == null ? void 0 : _c.title)}</p>`);
      _push(ssrRenderComponent(_component_ElementsDecoTitle, {
        data: (_d = __props.data) == null ? void 0 : _d.deco_title
      }, null, _parent));
      _push(`</div><div class="flexible-ig-show__wrapper-ig"><!--[-->`);
      ssrRenderList((_e = __props.data) == null ? void 0 : _e.ig_cards, (card, key) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "flexible-ig-show__wrapper-ig-wrapper",
          key
        }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}>`);
        _push(ssrRenderComponent(_component_ElementsIgCard, { data: card }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="flexible-ig-show__swiper"><div class="flexible-ig-show__swiper-wrapper swiper-wrapper"><!--[-->`);
      ssrRenderList((_f = __props.data) == null ? void 0 : _f.ig_cards, (card, key) => {
        _push(`<div class="flexible-ig-show__swiper-wrapper-slide swiper-slide">`);
        _push(ssrRenderComponent(_component_ElementsIgCard, { data: card }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="flexible-ig-show__swiper-navigation"><div class="flexible-ig-show__swiper-navigation-prev">`);
      _push(ssrRenderComponent(_component_nuxt_icon, { name: "arrow_right" }, null, _parent));
      _push(`</div><div class="flexible-ig-show__swiper-navigation-text"><span>${ssrInterpolate(unref(swiperIndex) + 1)}</span><span>/</span><span>${ssrInterpolate((_g = __props.data) == null ? void 0 : _g.ig_cards.length)}</span></div><div class="flexible-ig-show__swiper-navigation-next">`);
      _push(ssrRenderComponent(_component_nuxt_icon, { name: "arrow_right" }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/flexible/igShow.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "roomShow",
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
      var _a, _b, _c, _d;
      const _component_ElementsDecoTitle = __nuxt_component_0$1$1;
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_nuxt_icon = _sfc_main$a;
      const _directive_inview = resolveDirective("inview");
      const _directive_fade = resolveDirective("fade");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flexible-room-show container" }, _attrs))}><div class="flexible-room-show__title"><h2${ssrRenderAttrs(mergeProps(ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}>${ssrInterpolate((_a = __props.data) == null ? void 0 : _a.title)}</h2>`);
      _push(ssrRenderComponent(_component_ElementsDecoTitle, {
        data: (_b = __props.data) == null ? void 0 : _b.deco_title
      }, null, _parent));
      _push(`</div><div class="flexible-room-show__rooms"><!--[-->`);
      ssrRenderList((_c = __props.data) == null ? void 0 : _c.rooms, (room, key) => {
        var _a2, _b2, _c2, _d2;
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "flexible-room-show__rooms-item",
          key
        }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}><figure><img${ssrRenderAttr("src", (_a2 = room.room_type) == null ? void 0 : _a2.image.url)} alt=""></figure><div class="flexible-room-show__rooms-item-info"><h3 class="-en">${ssrInterpolate((_b2 = room.room_type) == null ? void 0 : _b2.deco_title)}</h3><h4>${ssrInterpolate((_c2 = room.room_type) == null ? void 0 : _c2.name)}</h4>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: `/room?roomType=${(_d2 = room.room_type) == null ? void 0 : _d2.deco_title.toLowerCase()}`
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
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="flexible-room-show__swiper"><div class="flexible-room-show__swiper-wrapper swiper-wrapper"><!--[-->`);
      ssrRenderList((_d = __props.data) == null ? void 0 : _d.rooms, (room, key) => {
        var _a2, _b2, _c2;
        _push(`<div class="flexible-room-show__swiper-wrapper-slide swiper-slide"><figure><img${ssrRenderAttr("src", (_a2 = room.room_type) == null ? void 0 : _a2.image.url)} alt=""></figure><div class="flexible-room-show__swiper-wrapper-slide-info"><h3 class="-en">${ssrInterpolate((_b2 = room.room_type) == null ? void 0 : _b2.deco_title)}</h3><h4>${ssrInterpolate((_c2 = room.room_type) == null ? void 0 : _c2.name)}</h4>`);
        _push(ssrRenderComponent(_component_nuxt_link, { to: `/room` }, {
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
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="flexible-room-show__swiper-navigation"><div class="flexible-room-show__swiper-navigation-prev">`);
      _push(ssrRenderComponent(_component_nuxt_icon, { name: "arrow_right" }, null, _parent));
      _push(`</div><div class="flexible-room-show__swiper-navigation-text"><span>${ssrInterpolate(unref(swiperIndex) + 1)}</span><span>/</span><span>${ssrInterpolate(__props.data.rooms.length)}</span></div><div class="flexible-room-show__swiper-navigation-next">`);
      _push(ssrRenderComponent(_component_nuxt_icon, { name: "arrow_right" }, null, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
        class: "flexible-room-show__btn",
        to: "/room"
      }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6240\u6709\u623F\u578B `);
          } else {
            return [
              createTextVNode(" \u6240\u6709\u623F\u578B ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/flexible/roomShow.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "bigSlider",
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
      const _component_ElementsDecoTitle = __nuxt_component_0$1$1;
      const _component_ElementsCarousel = __nuxt_component_0$3;
      const _directive_inview = resolveDirective("inview");
      const _directive_fade = resolveDirective("fade");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flexible-big-slider" }, _attrs))}><div class="flexible-big-slider__title"><h2${ssrRenderAttrs(mergeProps(ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}>${ssrInterpolate((_a = __props.data) == null ? void 0 : _a.title)}</h2>`);
      _push(ssrRenderComponent(_component_ElementsDecoTitle, {
        data: (_b = __props.data) == null ? void 0 : _b.deco_title
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ElementsCarousel, mergeProps({
        data: __props.data.sliders
      }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)), null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/flexible/bigSlider.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "halfLayout",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ElementsDecoTitle = __nuxt_component_0$1$1;
      const _directive_inview = resolveDirective("inview");
      const _directive_fade = resolveDirective("fade");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flexible-half-layout" }, _attrs))}><!--[-->`);
      ssrRenderList((_a = __props.data) == null ? void 0 : _a.block, (item, key) => {
        _push(`<div class="flexible-half-layout__block"><figure><img${ssrRenderAttr("src", item.image.url)}${ssrRenderAttr("alt", item.image.alt)}></figure><div class="flexible-half-layout__block-content">`);
        if (item == null ? void 0 : item.title) {
          _push(`<h3${ssrRenderAttrs(mergeProps(ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}>${ssrInterpolate(item == null ? void 0 : item.title)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        if (item == null ? void 0 : item.deco_title) {
          _push(`<span>`);
          _push(ssrRenderComponent(_component_ElementsDecoTitle, {
            data: item == null ? void 0 : item.deco_title,
            small: true,
            center: true
          }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<span${ssrRenderAttrs(mergeProps({ class: "-en" }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}>${ssrInterpolate(key + 1 > 9 ? key + 1 : `0${key + 1}`)}</span>`);
        }
        if (item == null ? void 0 : item.des) {
          _push(`<p${ssrRenderAttrs(mergeProps(ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}>${ssrInterpolate(item == null ? void 0 : item.des)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (item == null ? void 0 : item.s_img) {
          _push(`<figure${ssrRenderAttrs(mergeProps(ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}><img${ssrRenderAttr("src", item == null ? void 0 : item.s_img.url)}${ssrRenderAttr("alt", item == null ? void 0 : item.s_img.alt)}></figure>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/flexible/halfLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$1;
const _sfc_main = {
  __name: "titleBigImg",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      const _component_ElementsDecoTitle = __nuxt_component_0$1$1;
      const _component_nuxt_link = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flexible-title-big-img" }, _attrs))}><div class="flexible-title-big-img__title"><h3>${ssrInterpolate((_a = __props.data) == null ? void 0 : _a.title)}</h3>`);
      _push(ssrRenderComponent(_component_ElementsDecoTitle, {
        data: (_b = __props.data) == null ? void 0 : _b.deco_title
      }, null, _parent));
      _push(`</div><div class="flexible-title-big-img__wrapper container">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: (_d = (_c = __props.data) == null ? void 0 : _c.link) == null ? void 0 : _d.url,
        target: (_f = (_e = __props.data) == null ? void 0 : _e.link) == null ? void 0 : _f.target
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2;
          if (_push2) {
            _push2(`<figure${_scopeId}><img${ssrRenderAttr("src", (_a2 = __props.data) == null ? void 0 : _a2.image.url)}${ssrRenderAttr("alt", (_b2 = __props.data) == null ? void 0 : _b2.image.alt)}${_scopeId}></figure>`);
          } else {
            return [
              createVNode("figure", null, [
                createVNode("img", {
                  src: (_c2 = __props.data) == null ? void 0 : _c2.image.url,
                  alt: (_d2 = __props.data) == null ? void 0 : _d2.image.alt
                }, null, 8, ["src", "alt"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (((_h = (_g = __props.data) == null ? void 0 : _g.link) == null ? void 0 : _h.title) && ((_j = (_i = __props.data) == null ? void 0 : _i.link) == null ? void 0 : _j.url)) {
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "flexible-title-big-img__btn",
          to: (_l = (_k = __props.data) == null ? void 0 : _k.link) == null ? void 0 : _l.url,
          target: (_n = (_m = __props.data) == null ? void 0 : _m.link) == null ? void 0 : _n.target
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/flexible/titleBigImg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = _sfc_main;

export { __nuxt_component_0$1 as _, __nuxt_component_1$1 as a, __nuxt_component_2 as b, __nuxt_component_3 as c, __nuxt_component_4 as d, __nuxt_component_5 as e, __nuxt_component_6 as f, __nuxt_component_7 as g };
//# sourceMappingURL=titleBigImg-6b72dc1c.mjs.map
