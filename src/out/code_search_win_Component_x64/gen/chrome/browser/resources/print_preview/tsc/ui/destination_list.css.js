import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrHiddenStyleLit } from 'chrome://resources/cr_elements/cr_hidden_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './print_preview_vars.css.js';
import { getCss as getThrobber } from './throbber.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrHiddenStyleLit(), getThrobber()], css `:host{display:flex;flex-direction:column;height:100%;overflow:hidden;user-select:none}#list{min-height:var(--destination-item-height)}.throbber-container{display:flex;margin-inline-start:calc((var(--search-icon-size) - var(--throbber-size))/2);min-height:var(--destination-item-height)}.throbber{align-self:center}.no-destinations-message{padding-bottom:8px;padding-inline-start:18px;padding-top:8px}.list-item{transition:background-color 150ms;border-radius:8px}.list-item:hover{background-color:var(--cr-hover-background-color)}.list-item:focus{outline:solid 2px var(--cr-focus-outline-color);outline-offset:-2px}@media (forced-colors:active){.list-item:hover{background:Highlight;forced-color-adjust:none}.list-item:hover:focus{outline:solid 2px transparent}}`]);
}
