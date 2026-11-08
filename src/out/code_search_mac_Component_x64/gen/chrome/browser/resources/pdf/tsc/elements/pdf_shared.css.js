import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `cr-icon-button{--cr-icon-button-fill-color:var(--pdf-toolbar-text-color);--cr-icon-button-focus-outline-color:var(--viewer-icon-focus-outline-color);margin:0}cr-icon-button:hover{background:rgba(255,255,255,0.08);border-radius:50%}cr-action-menu,viewer-bookmark{--cr-menu-background-color:var(--google-grey-900);--cr-menu-shadow:rgba(0,0,0,.3) 0 1px 2px 0,rgba(0,0,0,.15) 0 3px 6px 2px;--cr-primary-text-color:var(--google-grey-200);--cr-menu-background-focus-color:var(--google-grey-700);--cr-separator-line:var(--cr-separator-height) solid rgba(255,255,255,.1);--cr-action-menu-disabled-item-color:var(--cr-primary-text-color);--cr-action-menu-disabled-item-opacity:var(--cr-disabled-opacity)}.md-select{--cr-fallback-color-neutral-outline:rgb(117,117,117);--cr-focus-outline-color:var(--viewer-icon-focus-outline-color);--md-select-option-bg-color:var(--google-grey-900-white-4-percent);--md-select-text-color:rgb(227,227,227);background-image:url(chrome://resources/images/dark/arrow_down.svg)}.md-select:hover{background-color:rgba(253,252,251,.10)}`]);
}
