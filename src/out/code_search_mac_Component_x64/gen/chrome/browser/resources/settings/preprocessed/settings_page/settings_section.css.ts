import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{display:flex;flex-direction:column;outline:none;position:relative}:host-context([settings-refresh-2026]){&:host{margin-bottom:24px}#header{padding:0}#title{font-size:16px;font-weight:500;line-height:24px;margin:0;padding:16px 20px}#card{display:flex;flex-direction:column;row-gap:2px}}#header{display:flex;justify-content:space-between;padding-inline-end:var(--cr-section-padding)}#header .title{color:var(--cr-primary-text-color);font-size:108%;font-weight:400;letter-spacing:.25px;margin-bottom:12px;margin-top:var(--cr-section-vertical-margin);outline:none;padding-bottom:4px;padding-top:8px}#feedback{margin-top:var(--cr-section-vertical-margin)}#card{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);flex:1;overflow:hidden}@media (forced-colors:active){#card{border:var(--cr-border-hcm)}}`]);
}