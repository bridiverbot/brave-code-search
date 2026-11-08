import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host(:not([hidden])){display:block}#iframe{background-color:transparent;border:none;border-radius:inherit;color-scheme:inherit;display:block;frame-sizing:inherit;height:inherit;max-height:inherit;max-width:inherit;width:inherit}`]);
}