import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from '//resources/cr_elements/cr_shared_style_lit.css.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSettingsSharedLit()], css `#other-sync-items{padding-bottom:8px}.passphrase-reset-container{align-items:flex-start;display:flex;margin-top:10px}.passphrase-reset-icon{margin-inline-end:8px}cr-link-row{padding-inline-end:0;padding-inline-start:0}cr-collapse>cr-link-row{padding-inline-start:var(--cr-section-indent-padding)}`]);
}
