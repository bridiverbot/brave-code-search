import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSharedStyleLit} from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSharedStyleLit()], css`cr-input{margin-top:var(--cr-form-field-bottom-spacing);--cr-input-error-display:none;margin-bottom:4px}cr-button[slot='suffix']{margin-inline-start:10px}`]);
}