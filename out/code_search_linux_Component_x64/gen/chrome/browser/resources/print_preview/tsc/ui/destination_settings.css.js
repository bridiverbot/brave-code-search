import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getPrintPreviewShared } from './print_preview_shared.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getPrintPreviewShared()], css `#seeMore{--cr-button-border:none;--cr-button-height:34px;display:flex;margin-inline-end:var(--print-preview-sidebar-margin);margin-inline-start:auto;margin-top:12px;width:fit-content}`]);
}
