import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrHiddenStyleLit} from 'chrome://resources/cr_elements/cr_hidden_style_lit.css.js';
import {getCss as getMdSelectLit} from 'chrome://resources/cr_elements/md_select_lit.css.js';
import {getCss as getPrintPreviewShared} from './print_preview_shared.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getPrintPreviewShared(),getCrHiddenStyleLit(),getMdSelectLit()], css`:host{--duplex-icon-side-padding:8px;--duplex-icon-size:16px}.md-select{background-position:var(--duplex-icon-side-padding) center,calc(100% - var(--md-select-side-padding)) center;background-size:var(--duplex-icon-size),var(--md-arrow-width);padding-inline-start:32px}:host-context([dir=rtl]) .md-select{background-position-x:calc(100% - var(--duplex-icon-side-padding)),var(--md-select-side-padding)}`]);
}