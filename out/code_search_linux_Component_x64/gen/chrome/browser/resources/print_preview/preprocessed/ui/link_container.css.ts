import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrHiddenStyleLit} from 'chrome://resources/cr_elements/cr_hidden_style_lit.css.js';
import {getCss as getCrSharedStyleLit} from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import {getCss as getThrobber} from './throbber.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSharedStyleLit(),getThrobber(),getCrHiddenStyleLit()], css`:host{display:block}:host(:not([should-show-system-dialog-link_])){display:none}:host cr-icon-button{--cr-icon-button-icon-size:16px;--cr-icon-button-margin-end:-2px;--cr-icon-button-margin-start:0;--cr-icon-button-size:28px}.link:not([actionable]){pointer-events:none}.throbber{margin:8px;min-height:16px;min-width:16px}.link{align-items:center;display:flex;min-height:46px;padding:0 var(--print-preview-sidebar-margin)}#systemDialogLink{padding-top:0.5em}.label{flex:1}.link:not([actionable]) .label{opacity:var(--cr-disabled-opacity)}`]);
}