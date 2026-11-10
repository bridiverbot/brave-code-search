import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrPageHostStyleLit } from 'chrome://resources/cr_elements/cr_page_host_style_lit.css.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrPageHostStyleLit(), getCrSharedStyleLit()], css `:host{display:block;height:100%;overflow:hidden}cr-button{width:95%;margin:3%}cr-toolbar{--cr-toolbar-left-spacer-width:500px}#requests{height:calc(100% - var(--cr-toolbar-height));overflow:auto}[slot='header']{padding:0 var(--cr-section-padding) var(--cr-section-padding)}`]);
}
