import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{display:flex;flex-direction:column}.title-and-description{display:flex;flex-direction:column;min-width:0;.title{color:var(--leo-color-text-primary)}.description{color:var(--leo-color-text-secondary)}}.cancel-verification-button{--leo-button-color:var(--leo-color-systemfeedback-error-text)}leo-button{flex:none}.first-row{align-items:center;display:flex;gap:var(--leo-spacing-xl);min-height:82px;padding:0 var(--leo-spacing-2xl);>leo-icon{--leo-icon-size:var(--leo-icon-m)}.title-and-description{flex:auto;padding:var(--leo-spacing-l) 0;.title{font:var(--leo-font-default-semibold)}.description{font:var(--leo-font-small-regular);leo-link{--leo-link-visited-color:var(--leo-color-text-interactive)}}}}.second-row{align-items:flex-start;border-top:1px solid var(--leo-color-divider-subtle);display:flex;gap:var(--leo-spacing-m);padding:var(--leo-spacing-xl)}`]);
}