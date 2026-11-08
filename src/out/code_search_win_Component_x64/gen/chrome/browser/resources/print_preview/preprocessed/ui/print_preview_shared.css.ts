import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getPrintPreviewSharedChromium} from './print_preview_shared-chromium.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getPrintPreviewSharedChromium()], css`print-preview-settings-section [slot=controls]>.md-select{margin:1px var(--print-preview-sidebar-margin)}`]);
}