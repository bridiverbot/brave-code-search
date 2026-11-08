import { css } from '//resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{align-items:center;display:flex;gap:var(--toolbar-icon-default-margin);height:100%}avatar-button[has-label]:not(.overflow-display-none)~app-menu-button[has-label]{margin-inline-start:0}`]);
}
