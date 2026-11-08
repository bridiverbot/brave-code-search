import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getSettingsSharedLit} from '../../settings_shared_lit.css.js';
import {getCss as getAutofillSharedLit} from '../autofill_shared_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getSettingsSharedLit(),getAutofillSharedLit()], css`.card{overflow:hidden}`]);
}