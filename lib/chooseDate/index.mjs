import { defineComponent as y, ref as s, watch as p, resolveComponent as V, openBlock as C, createElementBlock as P, createElementVNode as m, createVNode as c, mergeProps as f, unref as n, isRef as D } from "vue";
const T = { style: { display: "flex" } }, k = { style: { "margin-right": "20px" } }, x = /* @__PURE__ */ y({
  __name: "index",
  props: {
    // 开始日期的占位符
    startPlaceholder: {
      type: String,
      default: "请选择开始日期"
    },
    // 结束日期的占位符
    endPlaceholder: {
      type: String,
      default: "请选择结束日期"
    },
    // 是否禁用选择今天之前的日期
    disableToday: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["startChange", "endChange"],
  setup(a, { emit: h }) {
    let g = a, i = h, t = s(null), l = s(null), r = s(!0), b = (e) => {
      if (g.disableToday)
        return e.getTime() < Date.now() - 1e3 * 60 * 60 * 24;
    }, v = (e) => {
      if (t.value)
        return e.getTime() < t.value.getTime() + 1e3 * 60 * 60 * 24;
    };
    return p(() => t.value, (e) => {
      e ? (i("startChange", e), r.value = !1) : (r.value = !0, l.value = null);
    }), p(() => l.value, (e) => {
      e && i("endChange", {
        startDate: t.value,
        endDate: e
      });
    }), (e, o) => {
      const u = V("el-date-picker");
      return C(), P("div", T, [
        m("div", k, [
          c(u, f({
            modelValue: n(t),
            "onUpdate:modelValue": o[0] || (o[0] = (d) => D(t) ? t.value = d : t = d),
            type: "date",
            placeholder: a.startPlaceholder,
            disabledDate: n(b)
          }, e.$attrs.startOptions), null, 16, ["modelValue", "placeholder", "disabledDate"])
        ]),
        m("div", null, [
          c(u, f({
            modelValue: n(l),
            "onUpdate:modelValue": o[1] || (o[1] = (d) => D(l) ? l.value = d : l = d),
            type: "date",
            placeholder: a.endPlaceholder,
            disabled: n(r),
            disabledDate: n(v)
          }, e.$attrs.endOptions), null, 16, ["modelValue", "placeholder", "disabled", "disabledDate"])
        ])
      ]);
    };
  }
}), B = {
  install(a) {
    a.component("m-choose-date", x);
  }
};
export {
  B as default
};
