import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getPrintPreviewSharedChromium } from './print_preview_shared-chromium.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getPrintPreviewSharedChromium()], css `print-preview-settings-section [slot=controls]>.md-select{margin:1px var(--print-preview-sidebar-margin)}`]);
}
