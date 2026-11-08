import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getMdSelectLit } from 'chrome://resources/cr_elements/md_select_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getMdSelectLit()], css `:host{align-items:center;display:inline-flex}cr-policy-pref-indicator{height:var(--iron-icon-width,24px);margin:0 var(--cr-controlled-by-spacing);order:var(--settings-dropdown-menu-policy-order,0);width:var(--iron-icon-width,24px)}option:disabled{display:none}`]);
}
