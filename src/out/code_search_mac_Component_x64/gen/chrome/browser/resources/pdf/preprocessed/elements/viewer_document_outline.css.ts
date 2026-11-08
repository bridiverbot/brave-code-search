import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getPdfShared} from './pdf_shared.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getPdfShared()], css`:host{display:block;padding-inline-end:20px;padding-top:20px}`]);
}