import { defineComponent as p, useSlots as C, openBlock as t, createElementBlock as d, createElementVNode as a, normalizeStyle as l, createCommentVNode as s, unref as r, renderSlot as v, toDisplayString as w, createBlock as i, resolveDynamicComponent as u } from "vue";
const y = (e) => e.replace(/([A-Z])/g, "$1").toLowerCase(), m = { class: "trend" }, x = { key: 1 }, g = { class: "icon" }, S = /* @__PURE__ */ p({
  __name: "index",
  props: {
    // 标记当前趋势是上升还是下将
    type: {
      type: String,
      default: "up"
    },
    // 上升趋势的图标
    upIcon: {
      type: String,
      default: "ArrowUp"
    },
    // 下降趋势的图标
    downIcon: {
      type: String,
      default: "ArrowDown"
    },
    // 趋势显示的文本
    // 1. 父组件传递过来的数据
    // 2. 插槽
    text: {
      type: String,
      default: "文字"
    },
    // 颜色翻转只在默认颜色下生效, 如果使用了自定义颜色, 这个属性就不生效了
    reverseColor: {
      type: Boolean,
      default: !1
    },
    // 上升趋势的图标颜色
    upIconColor: {
      type: String,
      default: "#f5222d"
    },
    // 下降趋势的图标颜色
    downIconColor: {
      type: String,
      default: "#52c41a"
    },
    // 上升趋势的文字颜色
    upTextColor: {
      type: String,
      default: "#000"
    },
    // 下降趋势的文字颜色
    downTextColor: {
      type: String,
      default: "#000"
    }
  },
  setup(e) {
    const n = C();
    return (o, c) => (t(), d("div", m, [
      a(
        "div",
        {
          class: "text",
          style: l({ color: e.type === "up" ? e.upTextColor : e.downTextColor })
        },
        [
          s("   判断插槽有值就使用插槽   "),
          r(n).default ? v(o.$slots, "default", { key: 0 }, void 0, !0) : (t(), d(
            "div",
            x,
            w(e.text),
            1
            /* TEXT */
          ))
        ],
        4
        /* STYLE */
      ),
      a("div", g, [
        s(`<el-icon-arrow-up :style="{ color: !reverseColor ? upIconColor : '#52c41a' }" v-if="type === 'up'"></el-icon-arrow-up>
      <el-icon-arrow-down :style="{ color: !reverseColor ? downIconColor : '#f5222d' }" v-else></el-icon-arrow-down>`),
        e.type === "up" ? (t(), i(u(`el-icon-${r(y)(e.upIcon)}`), {
          key: 0,
          style: l({ color: e.reverseColor ? "#52c41a" : e.upIconColor })
        }, null, 8, ["style"])) : (t(), i(u(`el-icon-${r(y)(e.downIcon)}`), {
          key: 1,
          style: l({ color: e.reverseColor ? "#f5222d" : e.downIconColor })
        }, null, 8, ["style"]))
      ])
    ]));
  }
});
const I = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [c, f] of n)
    o[c] = f;
  return o;
}, k = /* @__PURE__ */ I(S, [["__scopeId", "data-v-5dd094da"]]), h = {
  install(e) {
    e.component("m-trend", k);
  }
};
export {
  h as default
};
