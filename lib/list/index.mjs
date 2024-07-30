import { defineComponent as $, resolveComponent as a, openBlock as e, createElementBlock as n, createVNode as m, withCtx as d, Fragment as y, renderList as f, createBlock as h, createCommentVNode as s, createElementVNode as u, toDisplayString as i, createTextVNode as B, resolveDynamicComponent as L, unref as w } from "vue";
const z = (c) => c.replace(/([A-Z])/g, "$1").toLowerCase(), D = { class: "list-tabs__item" }, E = ["onClick"], T = {
  key: 0,
  class: "avatar"
}, q = { class: "content" }, F = {
  key: 0,
  class: "title"
}, O = {
  key: 1,
  class: "time"
}, S = {
  key: 2,
  class: "time"
}, Z = { class: "actions" }, j = ["onClick"], G = {
  key: 0,
  class: "a-icon"
}, H = { class: "a-text" }, J = /* @__PURE__ */ $({
  __name: "index",
  props: {
    // 列表的内容
    list: {
      type: Array,
      required: !0
    },
    // 操作的内容
    actions: {
      type: Array,
      default: () => []
    }
  },
  emits: ["clickItem", "clickAction"],
  setup(c, { emit: v }) {
    const o = v, p = (r, _) => {
      o("clickItem", { item: r, index: _ });
    }, k = (r, _) => {
      o("clickAction", { item: r, index: _ });
    };
    return (r, _) => {
      const x = a("el-avatar"), b = a("el-tag"), C = a("el-scrollbar"), A = a("el-tab-pane"), I = a("el-tabs");
      return e(), n("div", D, [
        m(I, null, {
          default: d(() => [
            (e(!0), n(
              y,
              null,
              f(c.list, (g, N) => (e(), h(A, {
                key: N,
                label: g.title
              }, {
                default: d(() => [
                  m(
                    C,
                    { "max-height": "300px" },
                    {
                      default: d(() => [
                        (e(!0), n(
                          y,
                          null,
                          f(g.content, (t, l) => (e(), n("div", {
                            class: "container",
                            onClick: (V) => p(t, l),
                            key: l
                          }, [
                            t.avatar ? (e(), n("div", T, [
                              m(x, {
                                size: "small",
                                src: t.avatar
                              }, null, 8, ["src"])
                            ])) : s("v-if", !0),
                            u("div", q, [
                              t.title ? (e(), n("div", F, [
                                u(
                                  "div",
                                  null,
                                  i(t.title),
                                  1
                                  /* TEXT */
                                ),
                                t.tag ? (e(), h(b, {
                                  key: 0,
                                  size: "mini",
                                  type: t.tagType
                                }, {
                                  default: d(() => [
                                    B(
                                      i(t.tag),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                }, 1032, ["type"])) : s("v-if", !0)
                              ])) : s("v-if", !0),
                              t.desc ? (e(), n(
                                "div",
                                O,
                                i(t.desc),
                                1
                                /* TEXT */
                              )) : s("v-if", !0),
                              t.time ? (e(), n(
                                "div",
                                S,
                                i(t.time),
                                1
                                /* TEXT */
                              )) : s("v-if", !0)
                            ])
                          ], 8, E))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  ),
                  u("div", Z, [
                    s(' :class="{ border: i !== actions.length }"  '),
                    (e(!0), n(
                      y,
                      null,
                      f(c.actions, (t, l) => (e(), n("div", {
                        class: "a-item",
                        key: l,
                        onClick: (V) => k(t, l)
                      }, [
                        t.icon ? (e(), n("div", G, [
                          (e(), h(L(`el-icon-${w(z)(t.icon)}`)))
                        ])) : s("v-if", !0),
                        u(
                          "div",
                          H,
                          i(t.text),
                          1
                          /* TEXT */
                        )
                      ], 8, j))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["label"]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        })
      ]);
    };
  }
});
const K = (c, v) => {
  const o = c.__vccOpts || c;
  for (const [p, k] of v)
    o[p] = k;
  return o;
}, M = /* @__PURE__ */ K(J, [["__scopeId", "data-v-67794d3c"]]), Q = {
  install(c) {
    c.component("m-list", M);
  }
};
export {
  Q as default
};
