import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getSettingsSharedLit} from '../settings_shared_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getSettingsSharedLit()], css`cr-view-manager [hidden-by-search],cr-view-manager[show-all] [slot=view][data-parent-view-id]{display:none}`]);
}