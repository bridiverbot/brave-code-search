import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`.forgot-password{--leo-link-color:var(--leo-color-text-secondary);font:var(--leo-font-small-link);margin:0 var(--leo-spacing-s) 0 0;text-decoration-skip-ink:none;text-underline-offset:2.4px}`]);
}