import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`cr-dialog{--cr-dialog-body-padding-horizontal:16px;--cr-dialog-button-container-padding-horizontal:24px;--cr-dialog-button-container-padding-bottom:24px;--cr-dialog-button-container-padding-top:24px;--cr-dialog-top-container-min-height:0}[slot='header']{color:var(--cr-primary-text-color);column-gap:16px;display:grid;flex-shrink:0;font-size:calc(15 / 13 * 100%);grid-template-columns:1fr auto;line-height:1;padding:16px}.title{font-size:inherit;font-weight:inherit;margin:0}cr-dialog::part(body-container){max-height:360px}cr-dialog.fixed-height::part(wrapper){height:480px}cr-dialog.fixed-height::part(body-container){flex:1;max-height:none;scrollbar-gutter:stable}.dialog-body{color:var(--cr-primary-text-color)}cr-radio-button{--cr-radio-button-size:20px;margin:0 16px}#setAsDefaultButton{margin-inline-start:12px}#saveGuestChoiceCheckbox{margin-inline-end:auto}`]);
}