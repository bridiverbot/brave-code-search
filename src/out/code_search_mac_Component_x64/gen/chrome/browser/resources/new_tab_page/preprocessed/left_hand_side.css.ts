import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{display:block;height:100%}#expanded,#folded{height:100%}#expanded{color-scheme:light;frame-sizing:content-width;width:0}:host([is-dark]) #expanded{color-scheme:dark}#expanded.ready{width:auto}`]);
}