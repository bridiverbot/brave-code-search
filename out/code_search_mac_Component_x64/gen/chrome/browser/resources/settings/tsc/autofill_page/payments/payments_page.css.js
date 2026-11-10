import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getSettingsSharedLit } from '../../settings_shared_lit.css.js';
import { getCss as getAutofillSharedLit } from '../autofill_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSettingsSharedLit(), getAutofillSharedLit()], css `.expiration-column{align-items:center;display:flex;flex:1}.arrow-icon-down{fill:currentColor;flex-shrink:0;margin-inline-start:6px;margin-inline-end:-6px;width:var(--cr-icon-size)}.payment-list-margin-start{padding-inline-start:20px}.settings-card>*+*{border-top:1px solid var(--cr-separator-color)}
`]);
}
