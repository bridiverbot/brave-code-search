import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`cr-action-menu{--cr-menu-border-radius:16px;--cr-menu-background-color:var(--toolbar-menu-background-color)}cr-action-menu::part(dialog){max-height:none}.dropdown-item{color:var(--toolbar-text-color);margin-top:4px;min-width:230px;padding-block:4px;padding-inline-start:20px}#accountInfo{background-color:var(--color-sys-surface-container-high,var(--cr-hover-background-color));border-radius:12px;color:var(--cr-primary-text-color);font-size:13px;line-height:20px;margin:0 8px;overflow:hidden;padding:8px 12px;text-overflow:ellipsis;white-space:nowrap}`]);
}