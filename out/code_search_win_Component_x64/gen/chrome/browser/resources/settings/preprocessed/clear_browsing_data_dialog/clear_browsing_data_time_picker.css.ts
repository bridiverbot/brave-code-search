import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{--cr-menu-border-radius:12px}#timePicker{max-width:512px}.dropdown-item{padding:4px 16px}.row{align-items:center;display:flex}.time-period-chip{margin-inline-end:5px}`]);
}