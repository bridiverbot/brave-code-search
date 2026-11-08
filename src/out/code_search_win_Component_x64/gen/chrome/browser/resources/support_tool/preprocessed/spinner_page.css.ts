import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSpinnerStyleLit} from 'chrome://resources/cr_elements/cr_spinner_style_lit.css.js';
import {getCss as getSupportToolSharedLit} from './support_tool_shared_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getSupportToolSharedLit(),getCrSpinnerStyleLit()], css`.spinner{display:flex;margin:0 auto;margin-top:30px}`]);
}