import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{color:var(--cr-primary-text-color)}cr-view-manager{display:flex;font-size:100%;margin:0}#product-logo-animation{height:160px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:160px}`]);
}