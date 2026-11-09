import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getMdSelectLit} from 'chrome://resources/cr_elements/md_select_lit.css.js';
import {getCss as getSettingsSharedLit} from '../settings_shared_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getSettingsSharedLit(),getMdSelectLit()], css`:host{display:block}`]);
}