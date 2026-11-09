import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{--button-position-offset:24px;bottom:0;left:0;padding:48px 0;position:fixed;right:auto;user-select:none;z-index:3}:host-context([dir='rtl']){left:auto;right:0}#zoom-buttons{left:var(--button-position-offset);opacity:1;position:relative;right:auto;transition:opacity 250ms;transition-timing-function:cubic-bezier(0,0,0.2,1)}:host-context([dir='rtl']) #zoom-buttons{left:auto;right:var(--button-position-offset)}:host(:not([visible_])) #zoom-buttons{opacity:0;transition-timing-function:cubic-bezier(0.4,0,1,1)}viewer-zoom-button{display:block}#zoom-in-button{margin-top:24px}#zoom-out-button{margin-top:10px}
`]);
}
