import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSharedStyleLit} from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSharedStyleLit()], css`div[slot='body'] ul{background-color:#ffebee;margin:0;padding-bottom:10px;padding-inline-end:10px;padding-top:10px}@media (prefers-color-scheme:dark){div[slot='body'] ul{background-color:rgba(0,0,0,.3);color:var(--error-color)}}`]);
}