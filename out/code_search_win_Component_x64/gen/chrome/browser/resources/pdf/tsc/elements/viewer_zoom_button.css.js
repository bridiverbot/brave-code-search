import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `cr-icon-button{--cr-icon-button-fill-color:white;--cr-icon-button-icon-size:20px;--cr-icon-button-size:32px;background-color:var(--google-grey-600);border-radius:50%;box-shadow:var(--cr-elevation-1);overflow:visible}cr-icon-button[disabled]{box-shadow:none}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-ripple-opacity:.5}}@media (prefers-color-scheme:dark){cr-icon-button{--cr-icon-button-fill-color:var(--google-grey-200);background-color:var(--google-grey-900)}}:host([keyboard-navigation-active]) cr-icon-button:focus{box-shadow:var(--cr-elevation-4),inset 0 0 0 2px var(--cr-focus-outline-color)}cr-icon-button:active{box-shadow:var(--cr-elevation-5)}
`]);
}
