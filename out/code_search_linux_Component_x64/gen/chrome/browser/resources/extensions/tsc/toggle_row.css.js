import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit()], css `:host{align-items:center;display:flex;touch-action:none}input{display:none}label{box-sizing:border-box;cursor:pointer;flex:1}cr-toggle{display:inline-block}:host ::slotted(*){flex:1;margin-inline-end:20px}`]);
}
