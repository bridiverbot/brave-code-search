import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
import { getCss as getSearchEngineListDialogShared } from './search_engine_list_dialog_shared.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSettingsSharedLit(), getSearchEngineListDialogShared()], css `[slot='header']{align-items:center}#searchField{margin:0}.no-search-results{color:var(--cr-secondary-text-color);padding:24px 16px;text-align:center}`]);
}
