import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getPrintPreviewShared} from './print_preview_shared.css.js';
import './print_preview_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getPrintPreviewShared()], css`:host{--cr-input-width:calc(4em + 16px)}#sectionTitle{align-self:baseline}cr-input{margin-inline-end:16px;min-height:var(--print-preview-row-height);overflow:hidden}.input-wrapper{align-items:center;display:flex}:host([input-valid]) cr-input{--cr-input-error-display:none}span[slot=suffix]{max-width:calc(100% - 5em);min-height:var(--print-preview-row-height);overflow:hidden;word-wrap:break-word}`]);
}