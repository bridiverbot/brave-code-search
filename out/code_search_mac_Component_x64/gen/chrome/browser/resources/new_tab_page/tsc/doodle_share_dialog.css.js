import { css } from '//resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `#dialog::part(dialog){max-width:300px}#buttons{display:flex;flex-direction:row;justify-content:center;margin-bottom:28px;margin-top:20px}#buttons cr-button{--iron-icon-height:48px;--iron-icon-width:48px;border:none;height:48px;min-width:48px;padding:0;width:48px}#buttons cr-button:hover{opacity:0.8}#buttons>:not(:last-child){margin-inline-end:12px}#url{--cr-input-error-display:none}#copyButton{margin-inline-start:2px}`]);
}
