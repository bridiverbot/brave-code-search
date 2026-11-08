import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getSettingsSharedLit } from '../../settings_shared_lit.css.js';
import { getCss as getAutofillSharedLit } from '../autofill_shared_lit.css.js';
import { getCss as getScreenReaderOnlyLit } from './screen_reader_only_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSettingsSharedLit(), getAutofillSharedLit(), getScreenReaderOnlyLit()], css `.misc-column{align-items:center;display:flex;justify-content:flex-end}.list-item{margin-bottom:8px;margin-top:8px}.sub-label{color:var(--cr-secondary-text-color)}#paymentsIcon{vertical-align:middle}#payOverTimeIssuerImage{line-height:0;margin-inline-end:16px;vertical-align:middle}`]);
}
