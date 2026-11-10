import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{height:100%}feature-showcase-step{height:100%}#illustration{content:url('images/password_manager_illustration_light.png')}@media (prefers-color-scheme:dark){#illustration{content:url('images/password_manager_illustration_dark.png')}}`]);
}