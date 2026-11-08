import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrHiddenStyleLit } from 'chrome://resources/cr_elements/cr_hidden_style_lit.css.js';
import { getCss as getPrintPreviewShared } from './print_preview_shared.css.js';
import './print_preview_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getPrintPreviewShared(), getCrHiddenStyleLit()], css `#dialog::part(dialog){height:-webkit-fit-content;max-height:calc(100vh - 2 * var(--print-preview-dialog-margin));max-width:calc(100vw - 2 * var(--print-preview-dialog-margin))}#dialog::part(wrapper){height:calc(100vh - 2 * var(--print-preview-dialog-margin))}#dialog::part(body-container){flex:1}print-preview-search-box{margin-bottom:8px;margin-top:16px}cr-dialog [slot=body]{display:flex;flex-direction:column;height:100%}#itemList{flex:1;overflow-x:hidden;overflow-y:overlay}#itemList.searching{padding-bottom:20px;padding-top:20px}`]);
}
