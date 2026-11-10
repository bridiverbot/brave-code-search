import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{height:100%}feature-showcase-step{height:100%}#illustration{content:url(images/refresh_showcase_illustration.png)}`]);
}