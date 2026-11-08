import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getSettingsColumnedSectionLit} from '../settings_columned_section_lit.css.js';
import {getCss as getSettingsSharedLit} from '../settings_shared_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getSettingsSharedLit(),getSettingsColumnedSectionLit()], css`.separator{margin:0 4px}.separator+settings-toggle-button{margin-inline-end:12px}cr-policy-pref-indicator{margin-inline-end:4px}`]);
}