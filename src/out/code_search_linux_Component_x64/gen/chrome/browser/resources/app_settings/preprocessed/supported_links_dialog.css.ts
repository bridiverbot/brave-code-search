import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getAppManagementSharedStyle} from './app_management_shared_style.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getAppManagementSharedStyle()], css`#dialogBody{display:flex;flex-direction:column;height:350px;overflow-y:auto}.list-item{border-bottom:var(--cr-separator-line);align-items:center;display:flex;min-height:36px;padding:0}`]);
}