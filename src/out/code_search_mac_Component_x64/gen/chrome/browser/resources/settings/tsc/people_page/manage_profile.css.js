import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSettingsSharedLit()], css `cr-input{--cr-input-error-display:none}.cr-row.manage-profile-section{display:block;padding-bottom:24px}.cr-row:not(.first){padding-top:4px}.content{padding-inline-start:var(--cr-section-indent-width);padding-top:4px}#nameInput{width:288px}.grid-container{--icon-grid-gap:25px;--icon-size:72px;max-width:100%;overflow-x:auto;overflow-y:hidden}cr-theme-color-picker,cr-profile-avatar-selector{margin-bottom:10px}cr-theme-color-picker{--selected-border:9px;--cr-theme-color-picker-column-width:calc(var(--icon-size) + var(--selected-border));--cr-theme-color-picker-grid-gap:calc(var(--icon-grid-gap) - var(--selected-border));--cr-theme-color-picker-grid-padding:0;display:inline-block}#profileAvatarSelector{--avatar-size:var(--icon-size);--avatar-spacing:var(--icon-grid-gap);padding:4px}#outerRow{align-items:center;display:flex;min-height:var(--cr-section-two-line-min-height);padding:0 var(--cr-section-padding)}#labelWrapper{padding:var(--cr-section-vertical-padding) 0}#policyIcon{position:absolute;right:5%;height:15px;width:15px}`]);
}
