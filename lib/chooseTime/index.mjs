import { defineComponent as y, ref as m, watch as u, resolveComponent as T, openBlock as V, createElementBlock as v, createElementVNode as c, createVNode as p, mergeProps as f, unref as i, isRef as S, createCommentVNode as h } from "vue";
const C = { style: { display: "flex" } }, E = { style: { "margin-right": "20px" } }, x = /* @__PURE__ */ y({
  __name: "index",
  props: {
    // 开始时间的占位符
    startPlaceholder: {
      type: String,
      default: "请选择开始时间"
    },
    // 结束时间的占位符
    endPlaceholder: {
      type: String,
      default: "请选择结束时间"
    },
    // 开始时间的开始选择
    startTimeStart: {
      type: String,
      default: "08:00"
    },
    // 开始时间的步进
    startStep: {
      type: String,
      default: "00:30"
    },
    // 开始时间的结束选择
    startTimeEnd: {
      type: String,
      default: "24:00"
    },
    // 结束时间的开始选择
    endTimeStart: {
      type: String,
      default: "08:00"
    },
    // 结束时间的步进
    endStep: {
      type: String,
      default: "00:30"
    },
    // 结束时间的结束选择
    endTimeEnd: {
      type: String,
      default: "24:00"
    },
    timeSelectWidth: {
      type: String,
      default: "300px"
    }
  },
  emits: ["startChange", "endChange"],
  setup(e, { emit: g }) {
    let s = g, l = m(""), a = m(""), r = m(!0);
    return u(
      () => l.value,
      (t) => {
        t === "" ? (a.value = "", r.value = !0) : (r.value = !1, s("startChange", t));
      }
    ), u(
      () => a.value,
      (t) => {
        t !== "" && s("endChange", {
          startTime: l.value,
          endTime: t
        });
      }
    ), (t, n) => {
      const o = T("el-time-select");
      return V(), v("div", C, [
        c("div", E, [
          p(o, f({
            modelValue: i(l),
            "onUpdate:modelValue": n[0] || (n[0] = (d) => S(l) ? l.value = d : l = d),
            placeholder: e.startPlaceholder,
            start: e.startTimeStart,
            step: e.startStep,
            end: e.startTimeEnd,
            style: { width: e.timeSelectWidth }
          }, t.$attrs.startOptions), null, 16, ["modelValue", "placeholder", "start", "step", "end", "style"])
        ]),
        c("div", null, [
          h("   min-time 是选择的时间，早于开始时间的都无法选择   "),
          h("   disabled 是这个选择时间的下拉框无法点击   "),
          p(o, f({
            modelValue: i(a),
            "onUpdate:modelValue": n[1] || (n[1] = (d) => S(a) ? a.value = d : a = d),
            "min-time": i(l),
            placeholder: e.endPlaceholder,
            start: e.endTimeStart,
            step: e.endStep,
            end: e.endTimeEnd,
            disabled: i(r),
            style: { width: e.timeSelectWidth }
          }, t.$attrs.endOptions), null, 16, ["modelValue", "min-time", "placeholder", "start", "step", "end", "disabled", "style"])
        ])
      ]);
    };
  }
}), b = {
  install(e) {
    e.component("m-choose-time", x);
  }
};
export {
  b as default
};
