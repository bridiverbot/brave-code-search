import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSettingsSharedLit()], css `#search-wrapper{align-items:center;display:flex;min-height:var(--cr-section-min-height)}.default-search-engine .cr-row{--cr-section-min-height:55px;gap:12px;padding:0}.default-search-engine{padding-top:var(--cr-section-vertical-padding)}.search-engine-name{margin-inline-end:auto}`]);
}
