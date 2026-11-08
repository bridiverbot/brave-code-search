import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import {getCss as getMdSelectLit} from 'chrome://resources/cr_elements/md_select_lit.css.js';
import {getCss as getPdfShared} from './pdf_shared.css.js';
import './shared_vars.css.js';
import {getCss as getSidePanelShared} from './side_panel_shared.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getMdSelectLit(),getSidePanelShared(),getPdfShared()], css`h2{margin-inline-start:0;margin-bottom:8px}.md-select{--md-select-width:240px;margin-top:8px}text-styles-selector{padding-top:8px}text-alignment-selector{padding-top:16px}ink-color-selector{padding-top:4px}.side-panel-content:not(:first-child){padding-top:8px}`]);
}