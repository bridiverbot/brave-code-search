import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`#content{height:100%;position:fixed;width:100%;z-index:1}#plugin{display:block;height:100%;position:absolute;width:100%}#sizer{position:absolute;z-index:0}`]);
}