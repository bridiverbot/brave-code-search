import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSharedStyleLit} from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import {getCss as getMdSelectLit} from 'chrome://resources/cr_elements/md_select_lit.css.js';
import {getCss as getSettingsSharedLit} from '../settings_shared_lit.css.js';
import '../settings_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSharedStyleLit(),getSettingsSharedLit(),getMdSelectLit()], css`#custom-input{--cr-radio-button-disc-margin-block-start:calc((1.54em + 12px) / 2 - 8px);align-items:start}#themeRow cr-button,#toolbarRow cr-button{margin-inline-end:20px}#themeRow .separator,#toolbarRow .separator{margin-inline-start:0}#toolbarRow{border-top:var(--cr-separator-line)}.indented-toggles,.indented-rows{padding-inline-end:0}.indented-toggles settings-toggle-button,.indented-rows .cr-row{padding-inline-start:0}`]);
}