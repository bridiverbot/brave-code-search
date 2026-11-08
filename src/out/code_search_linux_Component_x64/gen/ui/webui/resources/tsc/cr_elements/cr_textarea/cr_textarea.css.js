import { css } from '//resources/lit/v3_0/lit.rollup.js';
import '../cr_shared_vars.css.js';
import { getCss as getCrHiddenStyleLit } from '../cr_hidden_style_lit.css.js';
import { getCss as getCrSharedStyleLit } from '../cr_shared_style_lit.css.js';
import { getCss as getCrInputStyleLit } from '../cr_input/cr_input_style_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrHiddenStyleLit(), getCrInputStyleLit(), getCrSharedStyleLit()], css `textarea{display:block;resize:none;position:relative;z-index:1}#input-container{background-color:var(--cr-input-background-color)}:host([invalid]) #underline{border-color:var(--cr-input-error-color)}#input{padding-bottom:var(--cr-input-padding-bottom);padding-inline-end:var(--cr-input-padding-end);padding-inline-start:var(--cr-input-padding-start);padding-top:var(--cr-input-padding-top);scroll-padding-bottom:var(--cr-input-padding-end)}#footerContainer{border-top:0;display:var(--cr-textarea-footer-display,none);font-size:var(--cr-form-field-label-font-size);height:var(--cr-form-field-label-height);justify-content:space-between;line-height:var(--cr-form-field-label-line-height);margin:8px 0;min-height:0;padding:0;white-space:var(--cr-input-error-white-space)}:host([invalid]) #label,:host([invalid]) #footerContainer{color:var(--cr-input-error-color)}:host([autogrow]) #input{box-sizing:content-box;field-sizing:content;min-height:calc(1lh * attr(rows number));max-height:var(--cr-textarea-autogrow-max-height,none);max-width:calc(100% - var(--cr-input-padding-start) - var(--cr-input-padding-end))}`]);
}
