import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getDemo} from '../demo.css.js';
import {getCss as getMdSelectLit} from '//resources/cr_elements/md_select_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getMdSelectLit(),getDemo()], css``]);
}