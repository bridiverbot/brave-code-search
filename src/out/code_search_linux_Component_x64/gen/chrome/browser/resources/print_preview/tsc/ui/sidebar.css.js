import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getSidebarChromium } from './sidebar-chromium.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSidebarChromium()], css `:host{background-color:var(--leo-color-container-background) !important}`]);
}
