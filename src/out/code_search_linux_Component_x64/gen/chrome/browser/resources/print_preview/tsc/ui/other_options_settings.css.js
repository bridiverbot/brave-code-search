import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrHiddenStyleLit } from 'chrome://resources/cr_elements/cr_hidden_style_lit.css.js';
import { getCss as getPrintPreviewShared } from './print_preview_shared.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getPrintPreviewShared(), getCrHiddenStyleLit()], css `print-preview-settings-section:not(.first-visible) .title{display:none}`]);
}
