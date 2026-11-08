import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrIconsLit} from 'chrome://resources/cr_elements/cr_icons_lit.css.js';
import {getCss as getCrSharedStyleLit} from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import {getCss as getSettingsSharedLit} from '../settings_shared_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrIconsLit(),getCrSharedStyleLit(),getSettingsSharedLit()], css`.permission-item{align-items:center;border-bottom:var(--cr-separator-line);display:flex;flex:1;min-height:48px}.flex-centered{align-items:center;display:flex}.favicon{margin-inline-end:16px;margin-inline-start:16px}.section{margin-inline-end:var(--cr-section-padding);margin-inline-start:var(--cr-section-padding)}.no-sites{padding-bottom:32px;padding-top:16px;padding-inline-start:40px}.header-container{padding-bottom:14px}.url-column{flex:2;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.username-column{flex:3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}cr-icon-button{--cr-icon-button-icon-size:16px}`]);
}