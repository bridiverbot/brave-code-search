import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSettingsSharedLit()], css `site-favicon,#downloadedIcon{display:block;height:16px;width:16px;--site-favicon-height:16px;--site-favicon-width:16px}`]);
}
