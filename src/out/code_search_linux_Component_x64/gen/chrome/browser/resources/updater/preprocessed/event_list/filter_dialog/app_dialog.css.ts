import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import {getCss as getFilterDialogShared} from './filter_dialog_shared.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getFilterDialogShared()], css`:host{display:block;--filter-menu-input-background:var(--cr-fallback-color-surface-variant)}.filter-menu-input{border:0;border-bottom:1px solid var(--filter-border-color);padding:8px 16px;margin-bottom:8px;width:calc(100% - 32px);outline:none;display:block;margin-inline-start:auto;margin-inline-end:auto;background-color:var(--filter-menu-input-background);color:var(--cr-secondary-text-color)}.filter-menu-input:focus{border-bottom-color:var(--cr-link-color)}`]);
}