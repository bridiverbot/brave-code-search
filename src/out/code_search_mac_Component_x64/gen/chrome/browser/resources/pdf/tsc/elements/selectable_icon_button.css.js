import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import './shared_vars.css.js';
import { getCss as getPdfShared } from './pdf_shared.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getPdfShared()], css `cr-icon-button{--cr-icon-button-fill-color:var(--viewer-icon-ink-fill-color);--cr-icon-button-icon-size:var(--selectable-icon-button-icon-size,20px);--cr-icon-button-size:var(--selectable-icon-button-size,32px)}:host([checked]) cr-icon-button{--cr-icon-button-fill-color:var(--viewer-icon-ink-selected-fill-color);background-color:var(--viewer-icon-ink-selected-background-color)}`]);
}
