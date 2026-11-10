import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getPdfShared} from './pdf_shared.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getPdfShared()], css`:host,cr-radio-group{--cr-radio-group-item-padding:0;display:flex;gap:var(--ink-brush-button-gap,16px);justify-content:center}selectable-icon-button{--selectable-icon-button-size:var(--ink-brush-button-size,48px)}`]);
}