import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getPrintPreviewShared} from './print_preview_shared.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getPrintPreviewShared()], css`cr-button{height:fit-content;min-height:32px;text-align:center;width:calc(100% - 2 * var(--print-preview-sidebar-margin))}`]);
}