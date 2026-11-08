import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getPdfShared } from './pdf_shared.css.js';
import './shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getPdfShared()], css `:host{display:inline-block}cr-grid{justify-content:center}.color-item{align-items:center;cursor:pointer;display:flex;height:48px;justify-content:center;width:48px}.color-chip{appearance:none;background:var(--item-color,magenta);border:1px solid var(--viewer-icon-ink-background-color);border-radius:50%;cursor:pointer;margin:0;height:24px;width:24px}.color-chip.blended{background:color-mix(in srgb,var(--item-color) 40%,white)}.color-chip[checked]{height:36px;width:36px}.color-chip:focus-visible:focus{outline:var(--viewer-icon-focus-outline-color) solid 2px;outline-offset:2px}`]);
}
