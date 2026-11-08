import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrNavMenuItemStyleLit } from '//resources/cr_elements/cr_nav_menu_item_style_lit.css.js';
import { getCss as getCrSharedStyleLit } from '//resources/cr_elements/cr_shared_style_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getCrNavMenuItemStyleLit()], css `:host{display:flex;height:100%}#sidebar{border-inline-end:1px solid var(--cr-separator-color);box-sizing:border-box;min-width:256px;overflow:auto}#selector{padding-inline-end:12px}h1{color:var(--cr-primary-text-color);font-size:170%;font-weight:500;padding-inline-start:24px}iframe{border:none;height:100%;width:100%}#main{flex:1;overflow:auto;padding:16px}#toggleDescription{flex:1}.cr-row{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:var(--cr-section-min-height);padding:0 var(--cr-section-padding)}`]);
}
