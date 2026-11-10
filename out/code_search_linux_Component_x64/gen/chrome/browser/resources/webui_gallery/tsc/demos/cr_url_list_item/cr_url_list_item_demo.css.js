import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getDemo } from '../demo.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getDemo()], css `.badge{align-items:center;background:var(--google-grey-200);border-radius:100px;display:inline-flex;font-size:12px;gap:4px;height:20px;padding:2px 8px 2px 6px}@media (prefers-color-scheme:dark){.badge{background:var(--google-grey-700)}}cr-icon{height:12px;width:12px}cr-input{--cr-input-error-display:none}cr-checkbox::part(label-container){display:none}`]);
}
