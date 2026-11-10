import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `#content{align-items:center;color:#fff;direction:ltr;display:flex;font-size:0.81rem;text-align:center;--page-selector-spacing:4px}#pageSelector::selection{background-color:var(--viewer-text-input-selection-color)}input,#pagelength{width:calc(max(2,var(--page-length-digits)) * 1ch + 1px)}input{background:rgba(0,0,0,0.5);border:none;color:white;font-family:inherit;line-height:inherit;outline:none;padding:0 var(--page-selector-spacing);text-align:center}#divider{margin:0 var(--page-selector-spacing)}`]);
}
