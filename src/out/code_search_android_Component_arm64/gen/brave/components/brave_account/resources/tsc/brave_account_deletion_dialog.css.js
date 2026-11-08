import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getBraveAccountCommon } from './brave_account_common.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getBraveAccountCommon()], css `.delete-account-button{--leo-button-color:var(--leo-color-systemfeedback-error-icon)}`]);
}
