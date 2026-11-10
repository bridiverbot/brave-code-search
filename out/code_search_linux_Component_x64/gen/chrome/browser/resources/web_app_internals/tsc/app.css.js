import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{display:block;padding:8px}pre{white-space:pre-wrap}button{padding:4px}#app-index{margin:8px 0;padding:8px;border:1px solid rgba(128,128,128,0.5);border-radius:4px;max-height:300px;overflow-y:auto}#app-index:empty{display:none}#app-index a{display:block;padding:2px 0}#app-index a.active{font-weight:bold}`]);
}
