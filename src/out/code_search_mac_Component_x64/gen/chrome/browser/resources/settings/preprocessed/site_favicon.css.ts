import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`#favicon{background-repeat:no-repeat;background-size:contain;border-radius:var(--site-favicon-border-radius,inherit);display:block;height:var(--site-favicon-height,16px);width:var(--site-favicon-width,16px)}`]);
}