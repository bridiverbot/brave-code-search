import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getPdfShared} from './pdf_shared.css.js';
import {getCss as getSidePanelShared} from './side_panel_shared.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getPdfShared(),getSidePanelShared()], css``]);
}