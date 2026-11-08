import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getSettingsSharedLit } from '../../settings_shared_lit.css.js';
import { getCss as getAutofillSharedLit } from '../autofill_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSettingsSharedLit(), getAutofillSharedLit()], css `.card{overflow:hidden}`]);
}
