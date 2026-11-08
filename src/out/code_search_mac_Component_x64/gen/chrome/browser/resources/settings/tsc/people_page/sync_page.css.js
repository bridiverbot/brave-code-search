import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from '//resources/cr_elements/cr_shared_style_lit.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
import '../settings_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSettingsSharedLit()], css `#sync-separator{border-bottom:var(--cr-separator-line)}#create-password-box{margin-bottom:1em;margin-inline-start:var(--cr-section-indent-width)}#create-password-box .list-item{margin-bottom:var(--cr-form-field-bottom-spacing)}cr-input{--cr-input-width:var(--cr-default-input-max-width)}#existingPassphrase{border-bottom:var(--cr-separator-line);border-top:var(--cr-separator-line);padding-inline-start:var(--cr-section-padding)}#submitExistingPassphrase{margin-inline-start:16px}#passphraseRecoverHint{align-items:center}#other-sync-items{padding-bottom:8px}.passphrase-reset-icon{margin-inline-end:8px}#disabled-by-admin-icon{text-align:center;width:40px}#toast{left:0;z-index:1}:host-context([dir='rtl']) #toast{left:auto;right:0}cr-link-row{padding-inline-end:0;padding-inline-start:0}cr-collapse>cr-link-row{padding-inline-start:var(--cr-section-indent-padding)}`]);
}
