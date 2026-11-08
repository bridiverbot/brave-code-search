import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getPdfShared } from './pdf_shared.css.js';
import './shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getPdfShared()], css `:host{display:inline-block}cr-radio-group{--cr-radio-group-item-padding:6px;display:flex;justify-content:center}selectable-icon-button{--selectable-icon-button-size:36px;--selectable-icon-button-icon-size:24px}`]);
}
