import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{height:100%}feature-showcase-step{height:100%}#illustration{content:url('images/lens_overlay_illustration_light.png')}@media (prefers-color-scheme:dark){#illustration{content:url('images/lens_overlay_illustration_dark.png')}}`]);
}