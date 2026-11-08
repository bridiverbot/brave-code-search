import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getSigninShared} from '/signin_shared.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getSigninShared()], css`.container{width:100%}.details{padding:0 24px}#syncDisabledDetails{line-height:20px;margin-bottom:8px;margin-top:16px;padding:0 24px}`]);
}