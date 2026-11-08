import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getAppManagementSharedStyle } from './app_management_shared_style.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getAppManagementSharedStyle()], css `:host(:not([available_])){display:none}#file-handling-item{margin:var(--row-item-vertical-padding) 0;width:100%}#toggle-row:not([disabled_]){cursor:pointer}#dialog-body{user-select:text}`]);
}
