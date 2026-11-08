import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getSettingsSharedLit } from '../../settings_shared_lit.css.js';
import '../../settings_vars.css.js';
import { getCss as getPasswordsShared } from './passwords_shared.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSettingsSharedLit(), getPasswordsShared()], css `cr-icon-button{--cr-icon-button-icon-size:16px;margin-inline-start:2px}#footnote{margin-inline-start:2px;margin-top:16px}cr-input{--cr-input-error-display:none}#websiteInput[invalid].has-error-message,#usernameInput{margin-top:var(--cr-form-field-bottom-spacing)}#usernameInput[invalid]{--cr-input-error-display:block;margin-top:var(--cr-form-field-bottom-spacing)}`]);
}
