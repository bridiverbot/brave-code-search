import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSpinnerStyleLit} from 'chrome://resources/cr_elements/cr_spinner_style_lit.css.js';
import {getCss as getActionLinkLit} from 'chrome://resources/cr_elements/action_link_lit.css.js';
import {getCss as getSettingsSharedLit} from '../settings_shared_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getSettingsSharedLit(),getActionLinkLit(),getCrSpinnerStyleLit()], css`.spinner{margin:0 8px}#dialog-body{padding-bottom:2px}`]);
}