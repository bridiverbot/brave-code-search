import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);color:var(--cr-primary-text-color);display:block;margin:16px;max-width:640px;min-width:500px;padding:16px}h1{font-size:1rem;font-weight:500;margin:0;padding:0 0 14px 0}p{font-size:0.8125rem;margin:0;max-width:450px}cr-icon{height:24px;margin-inline-end:0.5rem;margin-top:-0.4rem;width:24px}`]);
}