import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{display:block;height:100%;position:relative;width:100%}glic-selection-overlay{inset:0;position:absolute;z-index:1}#closeButton{position:absolute;right:16px;top:16px;z-index:2}`]);
}