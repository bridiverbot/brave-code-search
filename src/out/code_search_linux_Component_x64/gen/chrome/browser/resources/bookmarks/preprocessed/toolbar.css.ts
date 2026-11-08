import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getSharedStyleLit} from './shared_style_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getSharedStyleLit()], css`:host{position:relative}cr-toolbar{flex:1;--cr-toolbar-field-margin:calc(var(--sidebar-width) + var(--splitter-width))}cr-icon-button{justify-content:flex-end;margin:4px}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-fill-color:currentColor;--cr-icon-button-focus-outline-color:var(--cr-focus-outline-color)}}:host(:not([narrow_])) cr-toolbar-selection-overlay{--cr-toolbar-selection-overlay-padding:var(--card-padding-side);--cr-toolbar-field-margin:var(--sidebar-width);--cr-toolbar-selection-overlay-max-width:var(--card-max-width)}`]);
}