import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './print_preview_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit()], css `select.md-select{margin-bottom:2px;margin-top:2px;min-height:32px;padding-inline-end:32px;user-select:none;--md-select-width:calc(100% - 2 * var(--print-preview-sidebar-margin))}.checkbox cr-checkbox{min-height:var(--print-preview-row-height)}.checkbox cr-checkbox::part(label-container){overflow:hidden;padding-inline-start:16px}cr-input{line-height:20px}cr-input::part(row-container){min-height:var(--print-preview-row-height)}print-preview-settings-section [slot=controls]>*{margin:0 var(--print-preview-sidebar-margin)}cr-dialog::part(wrapper){max-height:calc(100vh - 68px);max-width:100%;width:calc(100vw - 68px)}cr-dialog [slot=body]{box-sizing:border-box}#dialog div[slot='title']{padding-bottom:8px}#dialog div[slot='button-container']{align-items:center;box-shadow:0 -1px 1px 0 var(--cr-separator-color);min-height:64px;padding-bottom:0;padding-top:0}`]);
}
