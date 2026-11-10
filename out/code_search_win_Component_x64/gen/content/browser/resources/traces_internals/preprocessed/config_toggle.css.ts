import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`.config-toggle-container{align-items:center;font-size:1.2em;border-radius:4px;box-sizing:border-box;display:flex}.config-toggle-description{padding-inline-end:12px}.config-toggle-description em{display:block}.config-toggle{flex:none}.config-toggle:not(:defined){width:34px}`]);
}