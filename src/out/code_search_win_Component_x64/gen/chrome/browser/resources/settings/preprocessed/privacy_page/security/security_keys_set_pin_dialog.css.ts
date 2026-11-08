import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSpinnerStyleLit} from 'chrome://resources/cr_elements/cr_spinner_style_lit.css.js';
import {getCss as getSettingsSharedLit} from '../../settings_shared_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getSettingsSharedLit(),getCrSpinnerStyleLit()], css`cr-input{display:inline-block;--cr-input-width:8em}#newPIN{padding-inline-end:2em}#newPINRow{display:flex;flex-direction:row}#newPINRow cr-input{--cr-input-error-white-space:nowrap;width:8em}.spinner{padding-bottom:12px}`]);
}