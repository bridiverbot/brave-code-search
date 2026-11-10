import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getPrintPreviewShared} from './print_preview_shared.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getPrintPreviewShared()], css`:host{display:flex;padding-inline-start:var(--print-preview-sidebar-margin)}::slotted([slot=controls]),::slotted([slot=title]){display:flex;flex-direction:column;justify-content:center;min-height:var(--print-preview-row-height);word-break:break-word}::slotted([slot=controls]){flex:1;overflow:hidden}::slotted([slot=title]){color:var(--cr-primary-text-color);flex:none;font-size:1em;line-height:calc(20/13 * 1em);width:var(--print-preview-title-width)}`]);
}