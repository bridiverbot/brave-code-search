import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from '//resources/cr_elements/cr_shared_style_lit.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSettingsSharedLit()], css `#sync-data-types .list-item:not([hidden])~.list-item:not([hidden]){border-top:var(--cr-separator-line)}.list-item{display:flex}.list-item>div:not(.separator){flex:1}cr-policy-indicator{margin-inline-end:var(--cr-controlled-by-spacing)}#toggles-header .cr-row.first h2{padding-top:18px}`]);
}
