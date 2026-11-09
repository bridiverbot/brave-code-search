import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{cursor:auto;display:block;width:100%}cr-textarea{width:100%;--cr-textarea-footer-display:flex}`]);
}