import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getSharedStyleLit } from './shared_style_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSharedStyleLit()], css `:host{color:var(--cr-secondary-text-color);overflow-y:auto;padding-bottom:24px;padding-inline-end:var(--card-padding-side);padding-inline-start:calc(var(--card-padding-side) - var(--splitter-width));padding-top:24px}.card{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);margin:0 auto;min-width:300px;max-width:var(--card-max-width);padding:8px 0}#promoCard{margin-bottom:18px;padding:0}.centered-message{align-items:center;color:var(--md-loading-message-color);cursor:default;display:flex;font-size:14px;font-weight:500;height:100%;justify-content:center;user-select:none;white-space:nowrap}[role='row']:focus-within{z-index:1}`]);
}
