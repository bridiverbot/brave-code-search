import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{display:block;height:100%;width:100%;--search-background-color:rgba(255,255,255,1);--toolbar-background-color:var(--search-background-color);--toolbar-button-icon-color:var(--cr-fallback-color-on-surface-subtle);--toolbar-divider-color:rgb(211,227,253);--toolbar-favicon-border-color:var(--cr-fallback-color-surface5);--toolbar-menu-background-color:rgb(255,255,255);--toolbar-text-color:rgb(31,31,31);--toolbar-menu-icon-color:rgba(71,71,71,1);background-color:var(--search-background-color)}@media (prefers-color-scheme:dark){:host{--search-background-color:rgba(34,36,43,1);--toolbar-divider-color:rgb(94,94,94);--toolbar-menu-background-color:rgb(31,31,31);--toolbar-text-color:rgb(227,227,227);--toolbar-menu-icon-color:rgba(199,199,199,1)}}`]);
}