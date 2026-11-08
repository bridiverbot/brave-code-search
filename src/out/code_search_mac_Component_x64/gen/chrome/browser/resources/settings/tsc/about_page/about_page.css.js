import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSettingsSharedLit()], css `:host{--about-page-image-space:10px}.info-sections{padding:var(--cr-section-vertical-padding) var(--cr-section-padding)}.info-section{margin-bottom:12px}.product-title{font-size:153.85%;font-weight:400;margin-bottom:auto;margin-top:auto}#productLogo{margin-inline-end:var(--about-page-image-space)}.icon-container{margin-inline-end:var(--about-page-image-space);min-width:32px;text-align:center}cr-icon[icon='cr:check-circle']{fill:var(--cr-checked-color)}cr-icon[icon='cr:error-filled']{fill:var(--settings-error-color)}#throbber{height:var(--cr-icon-size);vertical-align:middle}cr-button{white-space:nowrap}`]);
}
