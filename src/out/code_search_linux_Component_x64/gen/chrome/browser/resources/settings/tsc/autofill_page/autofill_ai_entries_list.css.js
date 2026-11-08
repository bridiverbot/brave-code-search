import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrIconsLit } from 'chrome://resources/cr_elements/cr_icons_lit.css.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
import { getCss as getAutofillSharedLit } from './autofill_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSettingsSharedLit(), getCrIconsLit(), getAutofillSharedLit()], css `.dropdown-item{display:flex;align-items:center;justify-content:space-between;width:100%}.list-item{padding-top:8px;padding-bottom:8px}.entity-type-icon{margin-inline-end:var(--cr-icon-button-margin-start)}.start{overflow:hidden}#entries{margin-block-end:0;margin-block-start:0;padding-inline-start:var(--cr-section-padding);padding-inline-end:var(--cr-section-padding)}.cr-row{border-top:none}`]);
}
