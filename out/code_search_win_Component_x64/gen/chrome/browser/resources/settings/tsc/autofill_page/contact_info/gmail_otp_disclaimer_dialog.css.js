import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getSettingsSharedLit } from '../../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSettingsSharedLit()], css `cr-dialog{--cr-dialog-body-padding-horizontal:20px;--cr-dialog-border-radius:12px;--cr-dialog-button-container-padding-bottom:20px;--cr-dialog-button-container-padding-horizontal:20px;--cr-dialog-button-container-padding-top:24px;--cr-dialog-title-slot-padding-bottom:20px;--cr-dialog-title-slot-padding-end:20px;--cr-dialog-title-slot-padding-start:20px;--cr-dialog-title-slot-padding-top:20px;--cr-dialog-width:384px}div[slot='title']{color:var(--cr-primary-text-color);font-size:15px;font-weight:500;line-height:22px}ol{color:var(--cr-secondary-text-color);font-size:14px;line-height:20px;margin:0;padding-inline-start:20px}li{line-height:20px}`]);
}
