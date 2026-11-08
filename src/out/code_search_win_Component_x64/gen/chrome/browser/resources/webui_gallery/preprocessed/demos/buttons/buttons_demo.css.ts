import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getDemo} from '../demo.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getDemo()], css`cr-expand-button{min-width:100px;padding:0 12px;width:45%}`]);
}