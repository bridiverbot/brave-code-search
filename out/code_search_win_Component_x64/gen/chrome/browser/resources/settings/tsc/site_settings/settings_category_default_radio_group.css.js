import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSettingsSharedLit()], css `#radioSection{padding:0 var(--cr-section-padding)}#radioGroupSubLabel{padding-bottom:10px}settings-collapse-radio-button{--settings-collapse-toggle-min-height:var(--cr-section-min-height)}settings-collapse-radio-button.two-line{--settings-collapse-toggle-min-height:var(--cr-section-two-line-min-height)}settings-collapse-radio-button:not(:first-of-type){--settings-collapse-separator-line:var(--cr-separator-line)}`]);
}
