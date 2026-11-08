import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{background:white;color:var(--primary-color);height:100%;--primary-color:var(--google-grey-900)}@media (prefers-color-scheme:dark){:host{background:var(--google-grey-900);--primary-color:var(--google-grey-200)}}span.bold{font-weight:700}`]);
}