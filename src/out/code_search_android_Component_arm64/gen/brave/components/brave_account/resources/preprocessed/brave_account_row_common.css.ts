import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{display:flex;flex-direction:column;margin:0 auto;max-width:500px}.title-and-description{display:flex;flex-direction:column;min-width:0;.title{color:var(--leo-color-text-primary)}.description{color:var(--leo-color-text-secondary)}}.cancel-verification-button{--leo-button-color:var(--leo-color-systemfeedback-error-text)}leo-button{flex:none}.first-row{display:flex;flex-direction:column;gap:var(--leo-spacing-3xl);padding:var(--leo-spacing-2xl);.title-and-description{gap:var(--leo-spacing-m);.title{font:var(--leo-font-heading-h3)}.description{font:var(--leo-font-default-regular)}}}.second-row{display:flex;flex-direction:column;gap:var(--leo-spacing-m);padding:0 var(--leo-spacing-2xl) var(--leo-spacing-2xl)}`]);
}