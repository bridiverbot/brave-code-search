import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
import { getCss as getMdSelectLit } from 'chrome://resources/cr_elements/md_select_lit.css.js';
import { getCss as getCrSpinnerStyleLit } from 'chrome://resources/cr_elements/cr_spinner_style_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSettingsSharedLit(), getMdSelectLit(), getCrSpinnerStyleLit()], css `.description{align-items:center;display:flex;margin-top:16px}.spinner{margin:0 8px}#successIcon{fill:var(--cr-checked-color);height:80px;margin:auto;width:100%}.md-select{margin-top:2px}`]);
}
