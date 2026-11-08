import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import { getCss as getSettingsColumnedSectionLit } from '../settings_columned_section_lit.css.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSettingsSharedLit(), getSettingsColumnedSectionLit()], css `.settings-section-bottom-padding{padding-block-end:var(--cr-section-vertical-padding)}settings-collapse-radio-button[hidden]+settings-collapse-radio-button{--settings-collapse-separator-line:0}settings-collapse-radio-button:not(:first-of-type){--settings-collapse-separator-line:var(--cr-separator-line)}.cpu-performance-override-header,#cpuPerformanceInfo{display:flex;flex:1;flex-direction:column;justify-content:center}`]);
}
