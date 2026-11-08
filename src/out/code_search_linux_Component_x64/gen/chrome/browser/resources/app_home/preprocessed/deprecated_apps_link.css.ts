import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`#container{align-items:center;margin-top:10px;padding-inline-end:20px;position:fixed;right:0}:host-context(html[dir='rtl']) #container{left:0;right:auto}#container img{height:16px;margin-inline-end:5px;width:16px}`]);
}