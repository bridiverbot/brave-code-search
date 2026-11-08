import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{display:flex;flex-direction:row;justify-content:flex-end;padding-bottom:var(--print-preview-sidebar-margin);padding-inline-end:var(--print-preview-sidebar-margin);padding-top:16px}@media (prefers-color-scheme:light){:host{background-color:white}}:host cr-button:not(:last-child){margin-inline-end:8px}:host cr-button:last-child{margin-inline-end:0}`]);
}
