import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrRadioButtonStyleLit } from 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button_style_lit.css.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSettingsSharedLit(), getCrRadioButtonStyleLit()], css `:host{display:block}:host([disabled]){opacity:1}cr-policy-pref-indicator,:host([disabled]) cr-expand-button{pointer-events:auto}:host([disabled]) .disc-wrapper{opacity:var(--cr-disabled-opacity)}:host([disabled]) #labelWrapper{opacity:1}cr-collapse{margin-inline-end:0;margin-inline-start:calc(var(--cr-radio-button-label-spacing,20px) + var(--cr-radio-button-size))}.disc-wrapper{margin-inline-end:var(--cr-radio-button-label-spacing,20px)}.separator{margin-inline-end:0;min-height:calc(var(--settings-collapse-toggle-min-height,48px) / 2)}#borderWrapper{align-items:center;border-top:var(--settings-collapse-separator-line);display:flex;min-height:var(--settings-collapse-toggle-min-height);width:100%}#buttonIcon{padding-inline-end:6px}#labelWrapper{--cr-radio-button-label-spacing:0}#radioCollapse{align-items:center;display:flex}slot[name='noSelectionCollapse']{cursor:auto}`]);
}
