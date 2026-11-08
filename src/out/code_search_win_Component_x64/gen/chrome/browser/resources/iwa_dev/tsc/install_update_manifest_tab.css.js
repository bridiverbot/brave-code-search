import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{display:block}.fetch-row{align-items:flex-start;display:flex;gap:8px}.fetch-row cr-input{flex:1}.fetch-row cr-button{margin-top:24px}#details{display:flex;flex-direction:column;justify-content:center;margin-top:8px;min-height:80px}#dropdowns-row{display:flex;gap:16px;width:100%}#dropdowns-row iwa-dev-combobox{flex:1}.success-message{color:var(--google-green-700);font-size:0.85rem}@media (prefers-color-scheme:dark){.success-message{color:var(--google-green-300)}}`]);
}
