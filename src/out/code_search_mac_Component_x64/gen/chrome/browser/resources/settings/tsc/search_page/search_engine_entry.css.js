import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
import { getCss as getSearchEngineEntryShared } from './search_engine_entry_shared.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSettingsSharedLit(), getSearchEngineEntryShared()], css `:host([is-default]) .list-item{font-weight:500}.additional-info-column-group{align-items:center;display:flex;flex:6}#controls-column-group{align-items:center;display:flex;flex:auto;justify-content:end;margin-left:auto}cr-policy-indicator{display:inline-flex;justify-content:center;margin-inline-start:16px;vertical-align:middle;width:36px}settings-search-engine-icon{margin-inline-end:8px}#externalIcon{--cr-icon-size:16px;margin:-8px;margin-inline-start:auto}#name-column{align-items:center;display:flex;flex:3;word-break:break-word}#shortcut-column{word-break:break-word}#shortcut-column,#url-column{flex:auto;margin-inline-end:10px;max-width:200px}`]);
}
