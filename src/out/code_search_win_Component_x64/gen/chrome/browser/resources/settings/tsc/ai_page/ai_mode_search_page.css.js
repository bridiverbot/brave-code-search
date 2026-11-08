import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSettingsSharedLit()], css `.separator{margin:0 4px}.separator+settings-toggle-button{margin-inline-end:12px}.cr-padded-text{flex:1}cr-policy-pref-indicator{margin-inline-end:var(--cr-icon-button-margin-start)}`]);
}
