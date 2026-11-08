import { css } from '//resources/lit/v3_0/lit.rollup.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `cr-icon-button{--cr-icon-button-icon-size:20px;--cr-icon-button-size:28px;--cr-icon-button-fill-color:var(--cr-icon-button-fill-color-default);--cr-icon-button-focus-outline-color:var(--toolbar-focus-outline-color);--cr-icon-button-hover-background-color:var(--toolbar-icon-hover-background-color);margin:4px}cr-button{--cr-focus-outline-color:var(--toolbar-focus-outline-color)}cr-icon-button.active{background-color:var(--cr-active-background-color)}cr-toggle{--cr-toggle-width:26px;--cr-toggle-bar-height:16px;--cr-toggle-knob-diameter:12px;--cr-toggle-ripple-diameter:12px}.toolbar-button{position:relative;z-index:9998}`]);
}
