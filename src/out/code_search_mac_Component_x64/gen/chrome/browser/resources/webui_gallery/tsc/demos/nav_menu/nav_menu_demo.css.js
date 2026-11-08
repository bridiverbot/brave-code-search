import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getDemo } from '../demo.css.js';
import { getCss as getCrHiddenStyleLit } from '//resources/cr_elements/cr_hidden_style_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrHiddenStyleLit(), getDemo()], css `nav-menu{display:block;width:100%}`]);
}
