import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getMdSelectLit} from 'chrome://resources/cr_elements/md_select_lit.css.js';
import './shared_vars.css.js';
import {getCss as getBottomToolbarShared} from './bottom_toolbar_shared.css.js';
import {getCss as getPdfShared} from './pdf_shared.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getBottomToolbarShared(),getMdSelectLit(),getPdfShared()], css`:host{--cr-focus-outline-color:var(--viewer-icon-focus-outline-color);border-radius:16px 16px 0 0;z-index:2}.md-select{--md-select-width:130px;margin-inline-end:8px}.md-select.size-select{--md-select-width:64px;margin-inline-end:var(--toolbar-item-gap)}text-styles-selector{--text-styles-selector-gap:8px}text-alignment-selector{padding:6px}`]);
}