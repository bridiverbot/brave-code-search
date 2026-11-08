import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit()], css `:host{align-items:center;display:flex}span{background:var(--google-grey-200);border-radius:50%;display:inline-block;height:8px;margin:0 4px;width:8px}span.active{background:var(--google-blue-600)}.screen-reader-only{clip:rect(0,0,0,0);position:fixed}@media (prefers-color-scheme:dark){span{background:var(--google-grey-500)}span.active{background:var(--google-blue-300)}}`]);
}
