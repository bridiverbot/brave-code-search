import { css } from '//resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{display:none}:host([visible]){display:flex}cr-icon-button{--cr-icon-button-icon-size:20px;--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0;--cr-icon-button-size:32px;--cr-icon-button-fill-color:var(--color-toolbar-button-icon)}`]);
}
