import { css } from '//resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{display:block;--filter-border-color:var(--google-grey-300)}@media (prefers-color-scheme:dark){:host{--filter-border-color:var(--google-grey-700)}}.filter-menu-footer{border-top:1px solid var(--filter-border-color);padding:8px 16px 0 16px;text-align:end;margin-top:8px}`]);
}
