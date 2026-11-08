import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{align-items:center;background-position:center;background-repeat:no-repeat;border-radius:5px;display:flex;flex-shrink:0;height:36px;justify-content:center;margin-inline:0 12px;width:36px}@media (forced-colors:active){:host{forced-color-adjust:none}}`]);
}