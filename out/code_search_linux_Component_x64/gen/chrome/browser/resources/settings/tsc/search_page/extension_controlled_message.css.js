import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSettingsSharedLit()], css `:host{align-items:center;display:flex;padding:16px 0;min-height:var(--cr-section-min-height)}cr-icon{fill:var(--cr-link-color);margin-inline-end:16px}`]);
}
