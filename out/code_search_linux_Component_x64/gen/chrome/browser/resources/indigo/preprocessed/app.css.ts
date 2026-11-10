import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{position:absolute;height:100%;width:100%;margin:0}#image{width:100%;height:100%}#watermark{position:absolute;bottom:20px;right:20px;background-color:rgba(255,255,255,1);color:black;mix-blend-mode:screen;border-radius:12px;padding:2px 8px;font-family:'Google Sans','Roboto',sans-serif;font-size:12px;font-weight:500}@media (max-width:170px){#watermark{display:none}}`]);
}