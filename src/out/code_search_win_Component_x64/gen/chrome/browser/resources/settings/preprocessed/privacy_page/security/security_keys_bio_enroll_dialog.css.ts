import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSpinnerStyleLit} from 'chrome://resources/cr_elements/cr_spinner_style_lit.css.js';
import {getCss as getSettingsSharedLit} from '../../settings_shared_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getSettingsSharedLit(),getCrSpinnerStyleLit()], css`div[slot='body']{padding-inline-end:16px}#header{display:flex}#header .header-label{flex:auto}h3{font-size:inherit;font-weight:500;margin:0;padding-bottom:12px;padding-top:32px}cr-icon{padding-inline-end:12px}.list-item .name{word-break:break-word}.name{flex:3}#container{padding-inline-start:var(--cr-section-padding)}.spinner{padding-bottom:16px}@media (prefers-color-scheme:dark){#lightIcon{display:none}}@media (prefers-color-scheme:light){#darkIcon{display:none}}`]);
}