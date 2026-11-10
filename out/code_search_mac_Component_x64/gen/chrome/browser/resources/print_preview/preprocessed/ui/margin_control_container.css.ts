import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{display:block;left:0;position:absolute;top:0}:host([dragging_=dragging-vertical]){cursor:ns-resize}:host([dragging_=dragging-horizontal]){cursor:ew-resize}`]);
}