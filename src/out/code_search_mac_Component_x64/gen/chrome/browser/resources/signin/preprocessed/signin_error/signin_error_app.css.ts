import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import {getCss as getSigninShared} from '/signin_shared.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getSigninShared()], css`.details{line-height:20px;margin-bottom:8px;margin-top:16px;padding:0 24px}#normal-error-message>p{margin-bottom:0}cr-icon{color:var(--cr-secondary-text-color);flex-shrink:0;height:var(--cr-icon-size);margin-inline-end:16px;width:var(--cr-icon-size)}`]);
}