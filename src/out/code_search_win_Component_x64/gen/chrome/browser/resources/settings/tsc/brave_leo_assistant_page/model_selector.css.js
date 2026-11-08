import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `.menu-item-with-icon{--leo-icon-size:20px;display:flex;flex-direction:row;align-items:center;gap:var(--leo-spacing-m)}.menu-item-with-icon .model-info{flex:1;min-width:0}.menu-item-with-icon .model-icon{flex-shrink:0}.value-with-icon{--leo-icon-size:16px;display:inline-flex;flex-direction:row;align-items:center;gap:var(--leo-spacing-s);margin:-2px 0}.model-subtitle{font:var(--leo-font-small-regular);color:var(--leo-color-text-tertiary);padding:0;margin:0}.menu-section-title{background-color:var(--leo-color-page-background);padding:var(--leo-spacing-l) var(--leo-spacing-xl);color:var(--leo-color-text-tertiary);font:var(--leo-font-components-label);text-transform:uppercase}leo-dropdown{min-width:240px}leo-option{padding:var(--leo-spacing-m)}`]);
}
