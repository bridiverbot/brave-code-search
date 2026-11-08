import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{width:32px;height:32px;display:none}:host([visible]){display:flex}cr-button{padding:0;--cr-button-background-color:transparent;--cr-button-border-color:transparent;--cr-button-border:0;min-width:32px;--cr-button-height:32px}icon-from-table{width:20px;height:20px;margin:6px;--icon-size:20px;border-radius:4px}`]);
}