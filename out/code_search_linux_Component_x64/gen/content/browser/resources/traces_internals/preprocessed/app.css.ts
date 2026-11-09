import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{display:flex;flex-flow:column;height:100%}cr-tabs{margin-top:4px;flex:0 0 auto}cr-page-selector{flex:1 1 auto;display:flex;flex-direction:column;height:100%;overflow:hidden}`]);
}