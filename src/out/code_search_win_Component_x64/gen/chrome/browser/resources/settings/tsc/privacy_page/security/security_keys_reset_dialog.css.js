import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSpinnerStyleLit } from 'chrome://resources/cr_elements/cr_spinner_style_lit.css.js';
import { getCss as getSettingsSharedLit } from '../../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSettingsSharedLit(), getCrSpinnerStyleLit()], css `.spinner{padding-bottom:12px}`]);
}
