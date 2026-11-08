import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getPdfShared } from './pdf_shared.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getPdfShared()], css `:host{display:block;padding-inline-end:20px;padding-top:20px}#warning{align-items:flex-start;padding:5px 28px 15px;position:relative}`]);
}
