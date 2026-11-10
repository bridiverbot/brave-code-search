import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getPrintPreviewShared } from './print_preview_shared.css.js';
import { getCss as getCrIconsLit } from 'chrome://resources/cr_elements/cr_icons_lit.css.js';
import { getCss as getCrInputStyleLit } from 'chrome://resources/cr_elements/cr_input/cr_input_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getPrintPreviewShared(), getCrInputStyleLit(), getCrIconsLit()], css `:host{display:flex;--cr-input-error-display:none}cr-input::part(row-container){min-height:32px}#icon,#clearSearch{margin-inline-end:0;margin-inline-start:0}#icon{height:var(--search-icon-size);width:var(--search-icon-size)}#clearSearch{--clear-icon-size:28px;--cr-icon-button-size:var(--clear-icon-size);--cr-icon-button-icon-size:20px;height:var(--clear-icon-size);position:absolute;right:0;width:var(--clear-icon-size);z-index:1}:host-context([dir=rtl]) #clearSearch{left:0;right:auto}:host([has-search-text]) cr-input{--cr-input-padding-end:24px}.search-box-input{width:100%}.search-box-input::-webkit-search-cancel-button{-webkit-appearance:none}`]);
}
