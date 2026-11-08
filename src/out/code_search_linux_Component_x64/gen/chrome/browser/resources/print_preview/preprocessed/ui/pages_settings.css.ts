import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getMdSelectLit} from 'chrome://resources/cr_elements/md_select_lit.css.js';
import {getCss as getPrintPreviewShared} from './print_preview_shared.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getPrintPreviewShared(),getMdSelectLit()], css`:host([error-state_='0']) #pageSettingsCustomInput,:host([error-state_='3']) #pageSettingsCustomInput{--cr-input-error-display:none}:host([error-state_='1']) #customInputWrapper,:host([error-state_='2']) #customInputWrapper{margin-bottom:8px}#pageSettingsCustomInput{cursor:default;--cr-form-field-label-height:100%}:host #title{align-self:baseline}`]);
}