import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getCrHiddenStyleLit } from 'chrome://resources/cr_elements/cr_hidden_style_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrHiddenStyleLit()], css `#item{align-items:flex-start;display:flex;padding:5px 28px;position:relative;transition:background-color 100ms ease-out}#item:hover{background-color:rgba(255,255,255,0.25)}#title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(:not([save-allowed_])) #title{opacity:var(--cr-disabled-opacity)}#download{--cr-icon-button-fill-color:var(--primary-text-color);--cr-icon-button-icon-size:16px;--cr-icon-button-size:28px;margin:0;position:absolute;right:0;top:calc((100% - var(--cr-icon-button-size)) / 2)}#download:focus-visible{outline:auto -webkit-focus-ring-color}`]);
}
