import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getPrintPreviewShared } from './print_preview_shared.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getPrintPreviewShared()], css `#collate{margin-inline-start:16px}`]);
}
