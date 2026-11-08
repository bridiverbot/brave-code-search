import { css } from '//resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `#frame{display:flex;flex-direction:column;height:100%;background-color:var(--color-toolbar);padding:8px;box-sizing:border-box}#header{display:flex;align-items:center;padding:0 10px}#header h2{font-size:14px;font-weight:500;line-height:20px}#closeButton{--cr-icon-button-icon-size:16px;margin-left:auto}#content{flex:1;border-radius:16px;border:1px var(--color-side-panel-content-area-separator) solid;overflow:hidden}`]);
}
