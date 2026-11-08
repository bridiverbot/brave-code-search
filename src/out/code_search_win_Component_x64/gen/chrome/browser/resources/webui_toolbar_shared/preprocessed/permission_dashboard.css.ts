import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{align-items:center;display:flex}#container{align-items:center;display:flex}#indicator-chip{position:relative;z-index:2}#request-chip{position:relative;z-index:1}`]);
}