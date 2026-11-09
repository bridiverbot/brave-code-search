import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{align-items:center;display:flex;justify-content:space-between;padding:var(--print-preview-sidebar-margin) var(--print-preview-sidebar-margin) 12px}@media (prefers-color-scheme:light){:host{background-color:white}}#headerContainer{align-items:center;display:flex}.summary,.title{color:var(--cr-primary-text-color);line-height:calc(20/13 * 1em);margin:0}.title{font-size:calc(16/13 * 1em);font-weight:400}.summary{font-weight:500}cr-icon{align-self:center;fill:var(--cr-secondary-text-color);height:16px;margin-inline-start:8px;width:16px}`]);
}
