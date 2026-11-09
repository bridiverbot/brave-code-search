import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import {getCss as getFilterDialogShared} from './filter_dialog_shared.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getFilterDialogShared()], css`:host{display:block}.filter-menu-section-header{padding:8px 16px;font-weight:bold;color:var(--cr-secondary-text-color);font-size:0.9em}`]);
}