import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrIconsLit} from '//resources/cr_elements/cr_icons_lit.css.js';
import {getCss as getCrHiddenStyleLit} from '//resources/cr_elements/cr_hidden_style_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrIconsLit(),getCrHiddenStyleLit()], css`#main{position:relative;width:200px}#input{--cr-input-readonly-opacity:1}#input:not([invalid]){--cr-input-error-display:none}#edit,#clear{margin-inline-start:var(--cr-icon-ripple-padding)}`]);
}