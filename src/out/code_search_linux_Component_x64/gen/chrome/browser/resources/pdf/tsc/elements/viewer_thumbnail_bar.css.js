import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getScrollbar } from './scrollbar.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getScrollbar()], css `:host{display:block;height:100%}:host(:focus){outline:none}#thumbnails{box-sizing:border-box;height:100%;overflow:auto;padding-bottom:24px;padding-inline-end:var(--viewer-thumbnail-bar-padding-inline-end);text-align:center}viewer-thumbnail{padding-top:24px}`]);
}
