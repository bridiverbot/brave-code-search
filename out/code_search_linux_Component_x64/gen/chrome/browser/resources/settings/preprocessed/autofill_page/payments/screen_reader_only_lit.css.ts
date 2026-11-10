import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`.screen-reader-only{clip-path:inset(100%);position:fixed}.screen-reader-only-host-node{position:relative}.screen-reader-only-host-node .screen-reader-only{height:100%;overflow:hidden;position:absolute;width:100%}`]);
}