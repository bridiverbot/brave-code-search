import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getPdfShared } from './pdf_shared.css.js';
import './shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getPdfShared()], css `:host{--dropdown-button-size:32px;display:flex;position:relative}cr-button{--cr-focus-outline-color:var(--viewer-icon-focus-outline-color);--iron-icon-fill-color:var(--viewer-icon-ink-fill-color);border:none;height:var(--dropdown-button-size);width:var(--dropdown-button-size);margin:0;min-width:auto}cr-button[data-selected='true']{--iron-icon-fill-color:var(--viewer-icon-ink-selected-fill-color);background-color:var(--viewer-icon-ink-selected-background-color)}div{background-color:var(--viewer-side-background-color);bottom:48px;border-radius:8px;left:50%;margin-bottom:4px;padding:0 8px;position:absolute;transform:translateX(-50%)}`]);
}
