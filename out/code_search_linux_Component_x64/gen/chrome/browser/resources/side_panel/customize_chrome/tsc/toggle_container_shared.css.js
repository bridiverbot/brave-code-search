import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getSpSharedStyle } from 'chrome://customize-chrome-side-panel.top-chrome/shared/sp_shared_style.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSpSharedStyle()], css `#showToggleContainer{align-items:center;display:flex;justify-content:space-between;margin:0;padding:var(--sp-card-padding)}#showToggleContainer:hover{background-color:var(--cr-hover-background-color);cursor:pointer}#showToggleContainer:focus{background-color:var(--cr-menu-background-focus-color);outline:none}#showToggleTitle{font-size:inherit;line-height:inherit}`]);
}
