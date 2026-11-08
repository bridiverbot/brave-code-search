import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getBraveAccountRowCommon } from './brave_account_row_common.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getBraveAccountRowCommon()], css `.row{align-items:center;cursor:pointer;display:flex;gap:var(--leo-spacing-xl);padding:var(--leo-spacing-l) var(--cr-section-padding);&:hover{background:var(--leo-color-container-highlight)}>leo-icon{--leo-icon-size:var(--leo-icon-m)}>leo-button{--leo-button-padding:var(--leo-spacing-s);margin-inline-end:calc(-1 * var(--leo-spacing-s));pointer-events:none}}.title-and-description{flex:auto;.title{font:var(--leo-font-default-semibold)}.description{font:var(--leo-font-small-regular);&.action-required{color:var(--leo-color-systemfeedback-error-text)}}}`]);
}
