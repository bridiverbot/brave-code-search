import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSharedStyleLit} from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSharedStyleLit()], css`.body-1{font-size:14px;line-height:20px}.title-1{font-size:16px;line-height:24px}.button-image{margin-inline-end:8px}.center-content{display:flex;justify-content:center;width:100%}.space-1{height:8px}.space-2{height:32px}.text-button:not(:focus){border:none;box-shadow:none}.text-button:hover{background-color:transparent}#buttons cr-button{margin-inline-start:8px}#error-message-container{min-height:16px}#remembered-device-footnote{align-items:center;display:flex;font-size:12px;line-height:18px;justify-content:center}#remembered-device-icon{align-self:flex-start;flex-shrink:0;height:20px;padding-inline-end:16px;width:20px}a[href]{color:var(--color-link-foreground);text-decoration:none}cr-dialog::part(dialog){border-radius:0;height:100%;width:100%}cr-dialog [slot=body]{height:480px}`]);
}