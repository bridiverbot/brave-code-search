import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{cursor:auto;display:block;width:100%}cr-input{width:100%;--cr-input-width:50%}cr-input::part(row-container){justify-content:normal}`]);
}
