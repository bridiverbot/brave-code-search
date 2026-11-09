import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSharedStyleLit} from '//resources/cr_elements/cr_shared_style_lit.css.js';
import {getCss as getSettingsSharedLit} from '../settings_shared_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSharedStyleLit(),getSettingsSharedLit()], css`:host{flex-direction:column;display:flex;flex:1;padding:14px 16px}#header{font-weight:500;font-size:0.75rem;user-select:none}#subheader{font-size:0.6875rem;line-height:18px;user-select:none}cr-icon{height:var(--cr-icon-size);margin-bottom:10px;width:var(--cr-icon-size)}cr-icon.green{--iron-icon-fill-color:var(--google-green-700)}cr-icon.yellow{--iron-icon-fill-color:var(--google-yellow-700)}cr-icon.red{--iron-icon-fill-color:var(--google-red-600)}@media (prefers-color-scheme:dark){cr-icon.green{--iron-icon-fill-color:var(--google-green-300)}cr-icon.yellow{--iron-icon-fill-color:var(--google-yellow-300)}cr-icon.red{--iron-icon-fill-color:var(--google-red-300)}}`]);
}