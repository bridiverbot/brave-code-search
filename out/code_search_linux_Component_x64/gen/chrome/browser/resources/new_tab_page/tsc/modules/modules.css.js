import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrHiddenStyleLit } from '//resources/cr_elements/cr_hidden_style_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrHiddenStyleLit()], css `#container{display:flex;flex-flow:row wrap;gap:var(--container-gap);justify-content:center;margin-top:8px;max-width:var(--container-max-width,inherit)}#undoToastMessage{flex-grow:1}`]);
}
