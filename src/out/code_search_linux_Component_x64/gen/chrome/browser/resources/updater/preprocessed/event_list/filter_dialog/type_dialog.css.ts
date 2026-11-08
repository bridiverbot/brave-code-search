import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import {getCss as getFilterDialogShared} from './filter_dialog_shared.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getFilterDialogShared()], css`:host{display:block}cr-button.filter-menu-item{background:none;color:inherit;border:none;font:inherit;text-align:inherit;outline:none;margin:0;display:block;width:100%;border-radius:0}`]);
}