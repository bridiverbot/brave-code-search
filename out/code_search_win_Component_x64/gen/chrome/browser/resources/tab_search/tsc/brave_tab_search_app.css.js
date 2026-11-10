import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{display:flex;flex-direction:column;width:100%;height:100%}`]);
}
