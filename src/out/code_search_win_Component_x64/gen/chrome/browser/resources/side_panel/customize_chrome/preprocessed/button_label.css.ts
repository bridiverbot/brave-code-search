import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrHiddenStyleLit} from 'chrome://resources/cr_elements/cr_hidden_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrHiddenStyleLit()], css`:host{display:block}#label{color:var(--cr-primary-text-color)}#labelDescription{color:var(--cr-secondary-text-color);font-weight:400;margin-block-start:4px}`]);
}