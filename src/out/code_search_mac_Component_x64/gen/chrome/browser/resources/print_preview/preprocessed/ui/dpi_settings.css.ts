import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getPrintPreviewShared} from './print_preview_shared.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getPrintPreviewShared()], css`:host print-preview-settings-select{margin:0 calc(var(--print-preview-sidebar-margin) - 2px)}`]);
}