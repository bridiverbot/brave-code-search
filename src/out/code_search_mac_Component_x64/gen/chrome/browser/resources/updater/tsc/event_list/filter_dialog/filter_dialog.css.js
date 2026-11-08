import { css } from '//resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{display:block;--filter-border-color:var(--google-grey-300)}@media (prefers-color-scheme:dark){:host{--filter-border-color:var(--google-grey-700)}}dialog{padding:8px 0;background:var(--cr-menu-background-color);border:1px solid var(--filter-border-color);border-radius:4px;box-shadow:var(--cr-elevation-2);color:inherit;margin:0;position:fixed}dialog::backdrop{background:transparent}`]);
}
