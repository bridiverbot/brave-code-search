import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrHiddenStyleLit } from 'chrome://resources/cr_elements/cr_hidden_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getPrintPreviewShared } from './print_preview_shared.css.js';
import './print_preview_vars.css.js';
import { getCss as getThrobber } from './throbber.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getPrintPreviewShared(), getCrHiddenStyleLit(), getThrobber()], css `:host-context([dir=rtl]) #manageIcon{transform:scaleX(-1)}#dialog::part(dialog){height:calc(100vh - 2 * var(--print-preview-dialog-margin));max-width:640px;width:calc(100vw - 2 * var(--print-preview-dialog-margin))}#dialog::part(wrapper){height:calc(100vh - 2 * var(--print-preview-dialog-margin))}#dialog::part(body-container){flex:1}print-preview-search-box{margin-bottom:16px;margin-top:6px}cr-dialog [slot=body]{display:flex;flex-direction:column;height:100%}div[slot='button-container']{justify-content:space-between}cr-button{font-size:calc(12 / 13 * 1em)}.cancel-button{margin-inline-end:0}cr-button cr-icon{--iron-icon-fill-color:currentColor;margin-inline-start:8px}#warning-message{color:var(--cr-primary-text-color)}`]);
}
