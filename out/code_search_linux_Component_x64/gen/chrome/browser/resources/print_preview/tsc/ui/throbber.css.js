import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import './print_preview_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `.throbber{background:url(chrome://resources/images/throbber_small.svg) no-repeat;display:inline-block;height:var(--throbber-size);width:var(--throbber-size)}`]);
}
