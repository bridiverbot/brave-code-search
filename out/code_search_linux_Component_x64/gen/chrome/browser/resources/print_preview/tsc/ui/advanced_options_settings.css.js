import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getPrintPreviewShared } from './print_preview_shared.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getPrintPreviewShared()], css `cr-button{height:fit-content;min-height:32px;text-align:center;width:calc(100% - 2 * var(--print-preview-sidebar-margin))}`]);
}
