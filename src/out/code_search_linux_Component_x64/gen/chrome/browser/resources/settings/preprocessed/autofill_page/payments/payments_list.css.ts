import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import {getCss as getSettingsSharedLit} from '../../settings_shared_lit.css.js';
import {getCss as getAutofillSharedLit} from '../autofill_shared_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getSettingsSharedLit(),getAutofillSharedLit()], css`.expiration-column{align-items:center;display:flex;flex:1}.vertical-list:has(.payment-method)~.vertical-list:has(.payment-method){border-top:var(--cr-separator-line);width:100%}`]);
}