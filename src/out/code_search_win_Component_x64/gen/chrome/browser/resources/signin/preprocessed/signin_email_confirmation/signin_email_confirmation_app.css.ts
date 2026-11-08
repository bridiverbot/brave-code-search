import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getSigninShared} from '/signin_shared.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getSigninShared()], css`.container{width:512px}.details{line-height:20px;margin-inline-start:-8px;padding:8px 24px 0}.radio-button-title-container{font-weight:500;line-height:20px}.radio-button-subtitle-container{line-height:20px}.top-title-bar{color:#333;height:auto;line-height:22px;padding:16px 24px}@media (prefers-color-scheme:dark){.top-title-bar{color:var(--cr-primary-text-color)}}`]);
}