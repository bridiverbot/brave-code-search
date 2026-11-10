import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getSettingsSharedLit } from '../../settings_shared_lit.css.js';
import { getCss as getCrScrollableLit } from 'chrome://resources/cr_elements/cr_scrollable_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSettingsSharedLit(), getCrScrollableLit()], css `#container{height:calc(5 * var(--cr-section-min-height))}#emptyText{padding-inline-end:20px;padding-inline-start:20px;padding-top:20px}.label-slot{align-items:center;display:flex}.checkbox-label{margin-inline-start:10px}cr-checkbox{padding:7px var(--cr-section-padding)}`]);
}
