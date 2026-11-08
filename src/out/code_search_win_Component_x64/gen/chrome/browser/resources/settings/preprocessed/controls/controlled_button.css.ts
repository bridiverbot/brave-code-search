import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{--justify-margin:8px;align-items:center;display:flex}:host([enforced_]){pointer-events:none}cr-policy-pref-indicator{pointer-events:all}:host(:not([end-justified])) cr-policy-pref-indicator{margin-inline-start:var(--cr-controlled-by-spacing)}:host([end-justified]) cr-policy-pref-indicator{margin-inline-end:var(--cr-controlled-by-spacing);margin-inline-start:calc(var(--cr-controlled-by-spacing) - var(--justify-margin));order:-1}`]);
}