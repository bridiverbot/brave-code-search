import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getMdSelectLit } from '//resources/cr_elements/md_select_lit.css.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSettingsSharedLit(), getMdSelectLit()], css `:host(.list-frame) settings-toggle-button,:host(.list-frame) .toggle-button-wrapper{padding-inline-end:0;padding-inline-start:0}:host(.list-frame) cr-link-row{padding-inline-end:8px;padding-inline-start:0}.hr:not(.hr:not([hidden])~*){border-top:0}#chromeSigninUserChoiceSetting{padding:var(--settings-signin-choice-padding,10px 0 10px)}#labelWrapper{margin-inline-end:20px}#restart{margin-inline-end:20px}`]);
}
