import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{display:flex;align-items:center;justify-content:center;width:100%;height:100%;background-color:transparent}iframe{display:block;width:100%;height:100%;border:none;overflow:hidden;background-color:transparent}`]);
}
