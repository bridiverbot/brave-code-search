import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getSettingsSharedLit} from '../settings_shared_lit.css.js';
import {getCss as getSearchEngineEntryShared} from './search_engine_entry_shared.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getSettingsSharedLit(),getSearchEngineEntryShared()], css`.name-column{align-items:center;display:flex;flex:3;word-break:break-word}.keyword-column{flex:7}`]);
}