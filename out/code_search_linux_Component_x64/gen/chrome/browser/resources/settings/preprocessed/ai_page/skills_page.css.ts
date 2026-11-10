import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSharedStyleLit} from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import {getCss as getSettingsColumnedSectionLit} from '../settings_columned_section_lit.css.js';
import {getCss as getSettingsSharedLit} from '../settings_shared_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSharedStyleLit(),getSettingsSharedLit(),getSettingsColumnedSectionLit()], css`.settings-columned-section h2.description-header{font-weight:500}`]);
}