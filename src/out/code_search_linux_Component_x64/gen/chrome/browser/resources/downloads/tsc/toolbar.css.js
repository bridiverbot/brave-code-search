import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrHiddenStyleLit } from '//resources/cr_elements/cr_hidden_style_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrHiddenStyleLit()], css `:host{align-items:center;display:flex;min-height:56px}#toolbar{flex:1;min-width:0}#clearAll{white-space:nowrap}`]);
}
