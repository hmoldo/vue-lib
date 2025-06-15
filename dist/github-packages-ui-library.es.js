(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("#baseButton{padding:1rem 2rem;cursor:pointer;border:none;background-color:var(--cf32ecb4);font-size:var(--3fb37bcd)}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
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
