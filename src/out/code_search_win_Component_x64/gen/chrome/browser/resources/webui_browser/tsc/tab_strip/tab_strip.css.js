import { css } from '//resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{display:block;width:100%}#tabstrip{-webkit-app-region:drag;display:flex;align-items:end;margin-left:12px;margin-top:7px}:host([drag-in-progress]) #tabstrip{overflow:visible}#tabstrip.nodrag{-webkit-app-region:no-drag}#newTabButton,webui-browser-tab{-webkit-app-region:no-drag}#newTabButton{margin:3px 10px;--cr-icon-button-icon-size:18px;--cr-icon-button-size:28px;--cr-icon-button-margin-end:8px}`]);
}
