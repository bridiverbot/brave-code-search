import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSharedStyleLit} from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSharedStyleLit()], css`#outerRow{align-items:center;display:flex;min-height:var(--cr-section-two-line-min-height);width:100%}#outerRow[no-sub-label]{min-height:var(--cr-section-min-height)}cr-checkbox{margin-bottom:4px;margin-top:var(--settings-checkbox-margin-top,4px);width:100%}cr-policy-pref-indicator{margin-inline-start:var(--cr-controlled-by-spacing)}a{color:var(--cr-link-color)}`]);
}