import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getSettingsSharedLit } from '../../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSettingsSharedLit()], css `cr-policy-pref-indicator::part(tooltip){clip:rect(0 0 0 0);height:1px;overflow:hidden;width:1px}cr-policy-pref-indicator{padding-inline-end:8px}`]);
}
