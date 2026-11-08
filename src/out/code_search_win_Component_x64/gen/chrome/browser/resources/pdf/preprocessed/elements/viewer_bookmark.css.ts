import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import {getCss as getCrHiddenStyleLit} from 'chrome://resources/cr_elements/cr_hidden_style_lit.css.js';
import {getCss as getPdfShared} from './pdf_shared.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getPdfShared(),getCrHiddenStyleLit()], css`#item{align-items:flex-start;cursor:pointer;display:flex;padding:5px 0;position:relative;transition:background-color 100ms ease-out}#item:hover{background-color:var(--cr-menu-background-focus-color)}#item:active{background-color:rgba(255,255,255,0.25)}#title{outline:none;overflow:hidden;text-overflow:ellipsis}#title:focus-visible{outline:auto -webkit-focus-ring-color}#expand-container{--expand-button-size:28px;flex-shrink:0;position:relative;width:var(--expand-button-size)}#expand-container::before{content:'.';visibility:hidden}#expand{--cr-icon-button-fill-color:var(--primary-text-color);--cr-icon-button-icon-size:16px;--cr-icon-button-size:var(--expand-button-size);left:0;margin:0;position:absolute;top:calc((100% - var(--cr-icon-button-size)) / 2);transition:transform 150ms}:host-context([dir=rtl]) #expand{transform:rotate(180deg)}:host([children-shown_]) #expand{transform:rotate(90deg)}`]);
}