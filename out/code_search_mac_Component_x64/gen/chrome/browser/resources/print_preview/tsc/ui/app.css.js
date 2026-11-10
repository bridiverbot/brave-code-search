import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './print_preview_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{display:flex;height:100%;user-select:none}@media (prefers-color-scheme:dark){:host{background:var(--google-grey-900)}}print-preview-sidebar{flex:none;width:var(--print-preview-sidebar-width)}#preview-area-container{align-items:center;background-color:var(--preview-area-background-color);flex:1}`]);
}
