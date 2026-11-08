import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{display:flex;gap:8px}leo-icon[name='caps-lock']{--leo-icon-color:var(--leo-color-text-interactive)}`]);
}