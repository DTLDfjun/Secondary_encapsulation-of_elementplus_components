import { defineComponent as l, ref as a, onMounted as s, resolveComponent as c, openBlock as i, createBlock as m, mergeProps as u, unref as f } from "vue";
const g = /* @__PURE__ */ l({
  __name: "index",
  props: {
    // 进度条进度
    percentage: {
      type: Number,
      required: !0
    },
    // 是否有动画效果
    isAnimate: {
      type: Boolean,
      default: !1
    },
    // 动画时长(毫秒)
    time: {
      type: Number,
      default: 3e3
    }
  },
  setup(r) {
    a(0);
    let e = r, t = a(0);
    return s(() => {
      if (e.isAnimate) {
        let n = Math.ceil(e.time / e.percentage), o = setInterval(() => {
          t.value += 1, t.value >= e.percentage && (t.value = e.percentage, clearInterval(o));
        }, n);
      }
    }), (n, o) => {
      const p = c("el-progress");
      return i(), m(p, u({ percentage: f(t) }, n.$attrs), null, 16, ["percentage"]);
    };
  }
}), _ = {
  install(r) {
    r.component("m-progress", g);
  }
};
export {
  _ as default
};
