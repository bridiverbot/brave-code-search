import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getAppManagementSharedStyle} from './app_management_shared_style.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getAppManagementSharedStyle()], css`#disabledExplanationText{align-items:center;display:flex;flex-direction:row;height:var(--info-text-row-height)}#supportedLinksOption{height:48px}.info-icon{height:var(--help-icon-size);width:var(--help-icon-size)}#overlapWarning{color:var(--secondary-text-color);margin-block-start:-12px;margin-inline-start:36px}.list-frame{display:block;padding-block-end:0;padding-block-start:0;padding-inline-end:var(--cr-section-padding);padding-inline-start:var(--cr-section-indent-padding)}cr-radio-group{width:100%}cr-icon{flex-shrink:0}`]);
}