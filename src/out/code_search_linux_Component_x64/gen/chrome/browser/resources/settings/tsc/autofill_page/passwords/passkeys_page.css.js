import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import { getCss as getSettingsSharedLit } from '../../settings_shared_lit.css.js';
import { getCss as getAutofillSharedLit } from '../autofill_shared_lit.css.js';
import { getCss as getPasswordsShared } from './passwords_shared.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSettingsSharedLit(), getPasswordsShared(), getAutofillSharedLit()], css `#passkeys-list-header{padding-inline-end:calc(var(--cr-icon-ripple-size) + var(--cr-icon-button-margin-start))}#iconContainer{height:24px;line-height:100%;margin-inline-end:20px;padding:4px;width:24px}`]);
}
