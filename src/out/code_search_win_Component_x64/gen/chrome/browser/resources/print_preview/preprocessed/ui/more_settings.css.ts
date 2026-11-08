import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrHiddenStyleLit} from 'chrome://resources/cr_elements/cr_hidden_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import {getCss as getPrintPreviewShared} from './print_preview_shared.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrHiddenStyleLit(),getPrintPreviewShared()], css`:host{border-top:var(--print-preview-settings-border);display:block}:host([disabled]){pointer-events:none}div{align-items:center;display:flex;font:inherit;margin:0;min-height:48px}:host cr-expand-button{flex:1;padding-inline-end:calc(var(--print-preview-sidebar-margin) + 6px);padding-inline-start:var(--print-preview-sidebar-margin);--cr-expand-button-size:28px}:host([hidden]){display:none}:host([disabled]) #label{opacity:var(--cr-disabled-opacity)}`]);
}