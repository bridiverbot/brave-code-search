import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSpinnerStyleLit } from 'chrome://resources/cr_elements/cr_spinner_style_lit.css.js';
import { getCss as getSupportToolSharedLit } from './support_tool_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSupportToolSharedLit(), getCrSpinnerStyleLit()], css `.spinner{display:flex;margin:0 auto;margin-top:30px}`]);
}
