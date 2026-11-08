import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`a[href]{text-decoration:none !important}.content-settings-header{padding-top:var(--leo-spacing-2xl) !important}.settings-box :first-child{border-top:none !important}:has(>:is(settings-dropdown-menu,select.md-select)):not(settings-section,settings-subpage,.field-section,cr-dialog)>:first-child:not(settings-dropdown-menu,select,.cr-padded-text),:has(>:is(settings-dropdown-menu,select.md-select)) #labelWrapper:not(.cr-padded-text){padding-block-end:var(--cr-section-vertical-padding);padding-block-start:var(--cr-section-vertical-padding)}`]);
}