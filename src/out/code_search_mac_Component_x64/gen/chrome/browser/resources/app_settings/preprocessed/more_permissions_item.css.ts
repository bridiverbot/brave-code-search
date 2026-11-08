import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getAppManagementSharedStyle} from './app_management_shared_style.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getAppManagementSharedStyle()], css`:host{align-items:center;cursor:pointer;display:flex;flex:1;justify-content:space-between}`]);
}