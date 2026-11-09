import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSharedStyleLit} from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import {getCss as getSettingsColumnedSectionLit} from '../settings_columned_section_lit.css.js';
import {getCss as getSettingsSharedLit} from '../settings_shared_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSharedStyleLit(),getSettingsSharedLit(),getSettingsColumnedSectionLit()], css`#header-text{border-inline-end:var(--cr-separator-line)}#expandedContent{border-top:var(--cr-separator-line)}#optInAuthenticationToggle{border-top:var(--cr-separator-line)}`]);
}