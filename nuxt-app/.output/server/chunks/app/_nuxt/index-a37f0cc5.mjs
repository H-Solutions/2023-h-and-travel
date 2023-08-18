import { _ as __nuxt_component_0 } from './nuxt-link-129bc6c8.mjs';
import _sfc_main$1 from './nuxt-icon-503afd00.mjs';
import { a as useGlobal } from '../server.mjs';
import { useSSRContext, ref, resolveDirective, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const global = useGlobal();
    ref();
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_nuxt_icon = _sfc_main$1;
      const _directive_inview = resolveDirective("inview");
      const _directive_fade = resolveDirective("fade");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}><div class="footer__top container"><div class="footer__top-wrapper"><figure class="footer__top-wrapper-logo"><img${ssrRenderAttrs(mergeProps({
        src: (_c = (_b = (_a = unref(global)) == null ? void 0 : _a.footer) == null ? void 0 : _b.logo) == null ? void 0 : _c.url,
        alt: (_f = (_e = (_d = unref(global)) == null ? void 0 : _d.footer) == null ? void 0 : _e.logo) == null ? void 0 : _f.alt
      }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}></figure><p>${ssrInterpolate((_h = (_g = unref(global)) == null ? void 0 : _g.footer) == null ? void 0 : _h.copyright)}</p><div class="footer__top-wrapper-info"><div class="footer__top-wrapper-info-left"><p${ssrRenderAttrs(mergeProps(ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}>\u806F\u7D61\u8CC7\u8A0A</p>`);
      if ((_i = unref(global)) == null ? void 0 : _i.footer.phone) {
        _push(`<p${ssrRenderAttrs(mergeProps(ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}>${ssrInterpolate(`\u96FB\u8A71\uFF5C${(_j = unref(global)) == null ? void 0 : _j.footer.phone}`)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if ((_k = unref(global)) == null ? void 0 : _k.footer.address) {
        _push(`<p${ssrRenderAttrs(mergeProps(ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}>${ssrInterpolate(`\u5730\u5740\uFF5C${(_l = unref(global)) == null ? void 0 : _l.footer.address}`)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if ((_m = unref(global)) == null ? void 0 : _m.footer.email) {
        _push(`<p${ssrRenderAttrs(mergeProps(ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}>${ssrInterpolate(`\u4FE1\u7BB1\uFF5C${(_n = unref(global)) == null ? void 0 : _n.footer.email}`)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="footer__top-wrapper-info-right"><p${ssrRenderAttrs(mergeProps(ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}>\u8FFD\u8E64\u6211\u5011</p><!--[-->`);
      ssrRenderList((_p = (_o = unref(global)) == null ? void 0 : _o.footer) == null ? void 0 : _p.socials, (item, key) => {
        var _a2, _b2;
        _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
          key,
          to: (_a2 = item.link) == null ? void 0 : _a2.url,
          target: (_b2 = item.link) == null ? void 0 : _b2.target
        }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p${_scopeId}>${ssrInterpolate(item.link.title)}</p>`);
              _push2(ssrRenderComponent(_component_nuxt_icon, { name: "arrow_right" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("p", {
                  textContent: toDisplayString(item.link.title)
                }, null, 8, ["textContent"]),
                createVNode(_component_nuxt_icon, { name: "arrow_right" })
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div></div><div class="footer__bottom"><div class="container"><div${ssrRenderAttrs(mergeProps({ class: "footer__bottom-wrapper" }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}><span>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/privacy" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cookie Policy`);
          } else {
            return [
              createTextVNode("Cookie Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/privacy" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><p>${ssrInterpolate((_r = (_q = unref(global)) == null ? void 0 : _q.footer) == null ? void 0 : _r.copyright)}</p></div></div><div class="footer__bottom-marquee"><!--[-->`);
      ssrRenderList(3, (item, key) => {
        _push(`<div class="footer__bottom-marquee-group"><!--[-->`);
        ssrRenderList(3, (item2, key2) => {
          var _a2, _b2;
          _push(`<p>${ssrInterpolate((_b2 = (_a2 = unref(global)) == null ? void 0 : _a2.footer) == null ? void 0 : _b2.marquee)}</p>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_1 as _ };
//# sourceMappingURL=index-a37f0cc5.mjs.map
