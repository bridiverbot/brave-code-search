import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getFolderNodeChromium } from './folder_node-chromium.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getFolderNodeChromium()], css `.cr-nav-menu-item{border-end-end-radius:0 !important;border-start-end-radius:0 !important;box-sizing:content-box !important}.cr-nav-menu-item:hover{background:transparent !important}.cr-nav-menu-item[selected]{--iron-icon-fill-color:var(--cr-link-color) !important;color:var(--cr-link-color) !important;background:transparent !important}.cr-nav-menu-item.drag-on{color:var(--cr-link-color) !important}@media (prefers-color-scheme:dark){.cr-nav-menu-item[selected] #arrow,.cr-nav-menu-item.drag-on #arrow{--cr-icon-button-fill-color:var(--cr-link-color) !important}.cr-nav-menu-item.drag-on{--iron-icon-fill-color:var(--cr-link-color) !important;background:transparent !important;color:var(--cr-link-color) !important}}.cr-nav-menu-item cr-ripple{display:none !important}`]);
}
