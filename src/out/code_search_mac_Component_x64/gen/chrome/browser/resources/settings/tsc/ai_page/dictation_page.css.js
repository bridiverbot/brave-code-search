import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSettingsSharedLit()], css `.keyboard-shortcut-setting{align-items:center}.shortcut-input{margin-top:2px}.section{padding:0 var(--cr-section-padding)}`]);
}
