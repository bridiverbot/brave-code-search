import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import './shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{display:flex;gap:var(--text-styles-selector-gap,16px)}cr-icon-button{--cr-icon-button-fill-color:var(--viewer-icon-ink-fill-color);--cr-icon-button-focus-outline-color:var(--viewer-icon-focus-outline-color);--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}cr-icon-button.active{--cr-icon-button-fill-color:var(--viewer-icon-ink-selected-fill-color);background-color:var(--viewer-icon-ink-selected-background-color);border-radius:50%}`]);
}