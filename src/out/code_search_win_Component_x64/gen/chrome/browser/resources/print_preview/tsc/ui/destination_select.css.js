import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrHiddenStyleLit } from 'chrome://resources/cr_elements/cr_hidden_style_lit.css.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getMdSelectLit } from 'chrome://resources/cr_elements/md_select_lit.css.js';
import { getCss as getPrintPreviewShared } from './print_preview_shared.css.js';
import { getCss as getThrobber } from './throbber.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getPrintPreviewShared(), getThrobber(), getMdSelectLit(), getCrHiddenStyleLit()], css `:host{--printer-icon-side-padding:4px;--printer-icon-size:20px}select.md-select{background-position:var(--printer-icon-side-padding) center,calc(100% - var(--md-select-side-padding)) center;background-size:var(--printer-icon-size),var(--md-arrow-width);padding-inline-start:32px}:host-context([dir=rtl]) .md-select{background-position-x:calc(100% - var(--printer-icon-side-padding)),var(--md-select-side-padding)}.throbber-container{align-items:center;display:flex;overflow:hidden}.destination-additional-info,.destination-additional-info div{height:100%;min-height:0}.destination-status{color:var(--cr-secondary-text-color);font-size:calc(12/13 * 1em);padding:4px 0}`]);
}
