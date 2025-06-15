(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("#baseButton{padding:1rem 2rem;cursor:pointer;border:none;background-color:var(--cf32ecb4);font-size:var(--3fb37bcd)}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
import { defineComponent as n, useCssVars as c, computed as r, createElementBlock as a, openBlock as l, renderSlot as u } from "vue";
const p = { id: "baseButton" }, _ = /* @__PURE__ */ n({
  __name: "BaseButton",
  props: {
    size: { default: 16 },
    color: { default: "skyblue" }
  },
  setup(t) {
    c((e) => ({
      cf32ecb4: e.color,
      "3fb37bcd": s.value
    }));
    const o = t, s = r(() => `${o.size}px`);
    return (e, d) => (l(), a("button", p, [
      u(e.$slots, "default")
    ]));
  }
});
class i {
  _start() {
    console.log("start");
  }
}
export {
  i as BASE_APP,
  _ as BaseButton
};
