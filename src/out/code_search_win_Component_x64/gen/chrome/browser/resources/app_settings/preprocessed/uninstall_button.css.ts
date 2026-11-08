import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getAppManagementSharedStyle} from './app_management_shared_style.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getAppManagementSharedStyle()], css`:host{align-items:center;display:flex;flex-direction:row}#policyIndicator{padding-inline-end:var(--app-management-controlled-by-spacing)}`]);
}