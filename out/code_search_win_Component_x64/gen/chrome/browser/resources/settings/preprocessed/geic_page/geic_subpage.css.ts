import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrIconsLit} from 'chrome://resources/cr_elements/cr_icons_lit.css.js';
import {getCss as getCrSharedStyleLit} from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import {getCss as getSettingsColumnedSectionLit} from '../settings_columned_section_lit.css.js';
import {getCss as getSettingsSharedLit} from '../settings_shared_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrIconsLit(),getCrSharedStyleLit(),getSettingsColumnedSectionLit(),getSettingsSharedLit()], css`.section{padding:0 var(--cr-section-padding)}.separator{margin-inline-end:4px;margin-inline-start:0}.toggle-actions-container{align-items:center;display:flex}`]);
}