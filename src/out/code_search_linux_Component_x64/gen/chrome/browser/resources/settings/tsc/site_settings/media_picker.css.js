import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getMdSelectLit } from 'chrome://resources/cr_elements/md_select_lit.css.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSettingsSharedLit(), getMdSelectLit()], css `:host{display:block}`]);
}
