import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{--google-grey-200:rgb(232,234,237);--google-grey-900:rgb(32,33,36);display:block}@media (prefers-color-scheme:dark){:host{color:var(--google-grey-200)}}h1{font-size:1.5em;margin:0;margin-block-end:16px}h2{font-size:1.2em;margin-block-end:12px;margin-block-start:16px}.demos{align-items:flex-start;display:flex;flex-direction:column;gap:16px;margin-bottom:24px}.row{display:flex;gap:16px}.row.center{align-items:center}.flex{display:flex}`]);
}
