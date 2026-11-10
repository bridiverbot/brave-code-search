import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getDemo} from '../demo.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getDemo()], css`cr-input{--cr-input-error-display:none}#toastContent{flex:1}`]);
}