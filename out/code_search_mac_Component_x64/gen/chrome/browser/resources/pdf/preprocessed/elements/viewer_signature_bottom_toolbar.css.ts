import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getBottomToolbarShared} from './bottom_toolbar_shared.css.js';
import {getCss as getPdfShared} from './pdf_shared.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getBottomToolbarShared(),getPdfShared()], css``]);
}