import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getSidebarChromium} from './sidebar-chromium.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getSidebarChromium()], css`:host{background-color:var(--leo-color-container-background) !important}`]);
}