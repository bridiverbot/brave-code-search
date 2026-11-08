import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrHiddenStyleLit} from '//resources/cr_elements/cr_hidden_style_lit.css.js';
import {getCss as getToolbarButton} from './toolbar_button.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrHiddenStyleLit(),getToolbarButton()], css`#button{--cr-icon-button-fill-color:var(--color-performance-intervention-button-icon-inactive,currentColor)}:host(.anchor-highlight) #button{--cr-icon-button-fill-color:var(--color-performance-intervention-button-icon-active,currentColor)}`]);
}