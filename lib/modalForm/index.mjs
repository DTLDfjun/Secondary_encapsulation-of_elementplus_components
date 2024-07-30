import { defineComponent as g, ref as m, watch as d, resolveComponent as u, openBlock as O, createElementBlock as h, normalizeClass as R, createVNode as c, mergeProps as B, unref as f, isRef as C, withCtx as t, renderSlot as l } from "vue";
const w = /* @__PURE__ */ g({
  __name: "index",
  props: {
    // 是否只在可视区域内滚动
    isScroll: {
      type: Boolean,
      default: !1
    },
    visible: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array,
      required: !0
    },
    onChange: {
      type: Function
    },
    beforeUpload: {
      type: Function
    },
    onPreview: {
      type: Function
    },
    onRemove: {
      type: Function
    },
    beforeRemove: {
      type: Function
    },
    onSuccess: {
      type: Function
    },
    onExceed: {
      type: Function
    }
  },
  emits: ["update:visible"],
  setup(e, { emit: p }) {
    let i = e, v = p, a = m(), n = m(i.visible);
    return d(
      () => i.visible,
      (o) => {
        n.value = o;
      }
    ), d(
      () => n.value,
      (o) => {
        v("update:visible", o);
      }
    ), (o, r) => {
      const y = u("m-form"), b = u("el-dialog");
      return O(), h(
        "div",
        {
          class: R({ "m-choose-icon-dialog-body-height": e.isScroll })
        },
        [
          c(b, B({
            modelValue: f(n),
            "onUpdate:modelValue": r[0] || (r[0] = (s) => C(n) ? n.value = s : n = s)
          }, o.$attrs), {
            default: t(() => [
              c(y, {
                ref_key: "form",
                ref: a,
                options: e.options,
                "label-width": "100px",
                onOnChange: e.onChange,
                onBeforeUpload: e.beforeUpload,
                onOnPreview: e.onPreview,
                onOnRemove: e.onRemove,
                onBeforeRemove: e.beforeRemove,
                onOnSuccess: e.onSuccess,
                onOnExceed: e.onExceed
              }, {
                uploadArea: t(() => [
                  l(o.$slots, "uploadArea")
                ]),
                uploadTip: t(() => [
                  l(o.$slots, "uploadTip")
                ]),
                _: 3
                /* FORWARDED */
              }, 8, ["options", "onOnChange", "onBeforeUpload", "onOnPreview", "onOnRemove", "onBeforeRemove", "onOnSuccess", "onOnExceed"])
            ]),
            footer: t(() => [
              l(o.$slots, "footer", { form: f(a) })
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["modelValue"])
        ],
        2
        /* CLASS */
      );
    };
  }
}), S = {
  install(e) {
    e.component("m-modal-form", w);
  }
};
export {
  S as default
};
