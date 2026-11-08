import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrHiddenStyleLit } from '//resources/cr_elements/cr_hidden_style_lit.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrHiddenStyleLit()], css `:host{border-top:1px solid var(--cr-separator-color);display:flex}.card-content{flex:1}.card-content p,.card-content ol{color:var(--cr-secondary-text-color)}.card-content .subtitle{font-size:smaller;color:var(--cr-secondary-text-color);margin-inline-start:1ex}cr-button{flex:0;margin-block-start:var(--cr-section-vertical-padding)}ol{padding-inline-start:2ex}li{margin-block:1ex}#instructions,#data{margin-inline:var(--cr-section-padding)}#data cr-button{margin-block-start:0}
`]);
}
