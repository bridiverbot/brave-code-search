import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{--toolbar-chip-height:calc(var(--location-bar-trailing-icon-size) + var(--location-bar-page-action-icon-padding-top) + var(--location-bar-page-action-icon-padding-bottom));display:flex;align-items:center;gap:8px}:host([is-capsule]){background:var(--color-sys-base-container-elevated,var(--color-toolbar-background-subtle-emphasis));border-radius:calc(var(--toolbar-chip-height) / 2);gap:2px;padding:2px}`]);
}