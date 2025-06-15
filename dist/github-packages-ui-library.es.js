import { defineComponent as n, useCssVars as c, computed as l, createElementBlock as r, openBlock as a, renderSlot as u } from "vue";
const _ = { id: "baseButton" }, f = /* @__PURE__ */ n({
  __name: "BaseButton",
  props: {
    size: { default: 16 },
    color: { default: "skyblue" }
  },
  setup(o) {
    c((e) => ({
      cf32ecb4: e.color,
      "3fb37bcd": s.value
    }));
    const t = o, s = l(() => `${t.size}px`);
    return (e, p) => (a(), r("button", _, [
      u(e.$slots, "default")
    ]));
  }
});
class m {
  _start() {
    console.log("start");
  }
  _test() {
    console.log("_test");
  }
  _more() {
    console.log("_more");
  }
}
export {
  m as BASE_APP,
  f as BaseButton
};
