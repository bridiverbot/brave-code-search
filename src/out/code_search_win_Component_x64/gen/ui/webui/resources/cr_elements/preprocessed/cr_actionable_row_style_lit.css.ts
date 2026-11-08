import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import './cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{align-items:center;align-self:stretch;background-color:var(--cr-actionable-row-background-color,transparent);display:flex;margin:0;outline:none}:host(:not([effectively-disabled_])){cursor:pointer}:host(:not([no-hover],[effectively-disabled_]):hover){background-color:var(--cr-hover-background-color)}:host(:not([no-hover],[effectively-disabled_]):active){background-color:var(--cr-active-background-color)}:host(:not([no-hover],[effectively-disabled_])) cr-icon-button{--cr-icon-button-hover-background-color:transparent;--cr-icon-button-active-background-color:transparent}`]);
}