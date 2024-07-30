import { defineComponent as s, resolveComponent as c, openBlock as r, createBlock as i, withCtx as l, renderSlot as d, createVNode as p, resolveDynamicComponent as u, unref as m } from "vue";
const _ = (e) => e.replace(/([A-Z])/g, "$1").toLowerCase(), f = /* @__PURE__ */ s({
  __name: "index",
  props: {
    // 图标
    icon: {
      type: String,
      default: "Bell"
    },
    // 显示值
    value: {
      type: [String, Number],
      default: "1"
    },
    // 最大值, 使用max时, value也必须是Number!!!!!!!!!!!!!
    max: {
      type: Number,
      default: 99
    },
    // 是否显示小圆点
    isDot: {
      type: Boolean,
      default: !1
    },
    //徽章类型
    type: {
      type: String,
      default: "danger"
    }
  },
  setup(e) {
    return (t, o) => {
      const n = c("el-badge"), a = c("el-popover");
      return r(), i(a, {
        placement: "top-start",
        trigger: "click",
        width: "350"
      }, {
        default: l(() => [
          d(t.$slots, "default", {}, void 0, !0)
        ]),
        reference: l(() => [
          p(n, {
            value: e.value,
            class: "item",
            type: e.type,
            max: e.max,
            isDot: e.isDot
          }, {
            default: l(() => [
              (r(), i(u(`el-icon-${m(_)(e.icon)}`)))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["value", "type", "max", "isDot"])
        ]),
        _: 3
        /* FORWARDED */
      });
    };
  }
});
const v = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, a] of t)
    o[n] = a;
  return o;
}, y = /* @__PURE__ */ v(f, [["__scopeId", "data-v-b07d75e8"]]), x = {
  install(e) {
    e.component("m-notification", y);
  }
};
export {
  x as default
};
