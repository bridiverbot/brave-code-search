import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSettingsSharedLit()], css `:host{display:block}.zoom-label{color:var(--cr-secondary-text-color);margin-inline-end:16px}#empty{margin-top:15px}.list-item site-favicon{flex-shrink:0}.list-item .middle{overflow-x:hidden;text-overflow:ellipsis}.content-settings-header{padding:0 var(--cr-section-padding)}`]);
}
