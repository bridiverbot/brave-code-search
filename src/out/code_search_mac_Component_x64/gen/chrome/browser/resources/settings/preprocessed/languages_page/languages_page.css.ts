import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSharedStyleLit} from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import {getCss as getSettingsSharedLit} from '../settings_shared_lit.css.js';
import '../settings_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSharedStyleLit(),getSettingsSharedLit()], css`cr-action-menu.complex .dropdown-item{min-height:36px}cr-action-menu:not(.complex) hr{display:none}cr-action-menu.complex hr{border:none;border-top:var(--cr-separator-line);margin:6px 0 0 0}div.list-item.non-target .target-info{display:none}div.list-item.target~div.list-item.target .target-info{display:none}#languagesSectionHeader{padding-bottom:12px;padding-top:12px}

`]);
}