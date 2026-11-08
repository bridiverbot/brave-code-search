import { css } from '//resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{position:relative;display:flex;flex-direction:column;flex:1;overflow:hidden}:host(.modalScrim){filter:brightness(50%)}cr-tab-webview{display:flex;flex-direction:column;flex:1;width:100%;height:100%;visibility:hidden;position:absolute}cr-tab-webview.active{visibility:visible;position:static}`]);
}
