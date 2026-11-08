import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import {getCss as getPdfShared} from './pdf_shared.css.js';
import {getCss as getSidePanelShared} from './side_panel_shared.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getPdfShared(),getSidePanelShared()], css`:host{--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}cr-icon-button{--cr-icon-button-fill-color:var(--viewer-icon-ink-fill-color)}cr-icon-button[data-selected='true']{--cr-icon-button-fill-color:var(--viewer-icon-ink-selected-fill-color);background-color:var(--viewer-icon-ink-selected-background-color)}#brush-options{padding-top:27px}ink-brush-selector{border-bottom:1px solid var(--viewer-border-color);padding:12px 0}ink-color-selector,ink-size-selector{margin:16px 0 32px}`]);
}