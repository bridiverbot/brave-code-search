import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from '//resources/cr_elements/cr_shared_style_lit.css.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
import '../settings_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSettingsSharedLit()], css `#create-password-box{margin-bottom:1em}#create-password-box .list-item{margin-bottom:var(--cr-form-field-bottom-spacing)}cr-input{--cr-input-width:var(--cr-default-input-max-width)}.passphrase-reset-icon{margin-inline-end:8px}cr-radio-button[name='encrypt-with-passphrase']{align-items:start}`]);
}
