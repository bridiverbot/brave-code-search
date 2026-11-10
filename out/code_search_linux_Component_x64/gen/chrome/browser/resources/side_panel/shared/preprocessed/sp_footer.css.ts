import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{display:flex;justify-content:center}:host([pinned]){border-top:0;box-sizing:border-box;display:block;flex-shrink:0;height:56px;margin-block-start:auto;padding:8px;position:relative}`]);
}