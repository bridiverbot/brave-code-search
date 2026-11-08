import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{user-select:none}.translucent{opacity:0.3}#canvasDiv{height:240px;overflow:hidden;position:relative;width:460px}cr-lottie{display:inline-block;position:absolute}#fingerprintScanned{position:absolute}`]);
}