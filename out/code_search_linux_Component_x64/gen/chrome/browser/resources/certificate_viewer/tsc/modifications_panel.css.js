import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrHiddenStyleLit } from '//resources/cr_elements/cr_hidden_style_lit.css.js';
import { getCss as getCrIconsLit } from '//resources/cr_elements/cr_icons_lit.css.js';
import { getCss as getCrSharedStyleLit } from '//resources/cr_elements/cr_shared_style_lit.css.js';
import { getCss as getMdSelectLit } from '//resources/cr_elements/md_select_lit.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrIconsLit(), getCrSharedStyleLit(), getCrHiddenStyleLit(), getMdSelectLit()], css `.constraint{padding-bottom:7px}.modifications-row-label{width:150px}.horizontal-row{color:#616161;display:flex;flex-direction:row;align-content:flex-start;align-items:baseline;padding-top:10px;padding-inline-start:20px;padding-bottom:10px}.error{margin:4px 10px;color:var(--cr-fallback-color-error)}.input-with-error{display:flex;flex-direction:column}h3{font-size:100%;margin-bottom:15px;margin-top:32px;font-weight:normal}.vertical-box{display:flex;flex-direction:column;height:100%;position:relative;width:100%}cr-input{--cr-input-background-color:rgb(225,227,225);--cr-input-error-color:rgb(179,38,30);--cr-input-focus-color:rgb(11,87,208);--cr-input-color:rgb(31,31,31);--cr-input-placeholder-color:rgb(130,130,130)}#trustStateSelect{--md-select-option-bg-color:white}`]);
}
