import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSharedStyleLit} from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import {getCss as getSettingsSharedLit} from '../settings_shared_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSharedStyleLit(),getSettingsSharedLit()], css`.cr-row-with-template{padding:0}#liveCaptionToggleButton{width:100%}.language-dropdown{margin-inline-start:auto}#defaultLanguageLabel{color:var(--cr-secondary-text-color)}.sub-item{padding-inline-start:var(--cr-section-indent-padding,36px)}`]);
}