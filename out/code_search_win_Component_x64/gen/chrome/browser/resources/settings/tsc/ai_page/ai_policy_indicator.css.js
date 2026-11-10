import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSettingsSharedLit()], css `.cr-row{--cr-section-min-height:0;padding-top:2px;padding-bottom:16px}cr-policy-pref-indicator{margin-inline-end:var(--cr-icon-button-margin-start)}`]);
}
