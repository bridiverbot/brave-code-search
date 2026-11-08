import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import './shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{--toolbar-item-gap:10px;align-items:center;background-color:var(--viewer-side-background-color);bottom:0;border-radius:24px 24px 0 0;display:flex;padding:12px;position:absolute}ink-color-selector{padding:20px}.toolbar-icon{padding:2px}.toolbar-icon:not(:first-child){padding-inline-start:4px}.toolbar-icon:not(:last-child){padding-inline-end:4px}.color-chip{background:var(--ink-brush-color,magenta);border:1px solid var(--viewer-icon-ink-background-color);border-radius:50%;height:20px;width:20px}`]);
}
