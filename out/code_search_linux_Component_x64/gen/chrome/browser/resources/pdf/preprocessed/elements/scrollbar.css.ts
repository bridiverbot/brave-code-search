import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`::-webkit-scrollbar{--scrollbar-size:14px;height:var(--scrollbar-size);width:var(--scrollbar-size)}::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:var(--google-grey-500);border:4px solid transparent;border-radius:8px}::-webkit-scrollbar-thumb:hover{background-color:var(--google-grey-300)}::-webkit-scrollbar-track,::-webkit-scrollbar-corner{background:transparent}`]);
}