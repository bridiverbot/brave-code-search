import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import { getCss as getSettingsColumnedSectionLit } from '../settings_columned_section_lit.css.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSettingsSharedLit(), getSettingsColumnedSectionLit()], css `:host{--cr-icon-size:16px;--info-card-background-color:var(--google-blue-50)}@media (prefers-color-scheme:dark){:host{--info-card-background-color:var(--google-grey-800)}}:host-context([webui-refresh-2026]){--info-card-background-color:var(--color-settings-info-card-background);--iron-icon-fill-color:var(--cr-secondary-text-color)}.settings-columned-section{background-color:var(--info-card-background-color)}.title{color:var(--cr-primary-text-color);font-size:1rem;font-weight:500;letter-spacing:.25px}.settings-columned-section h3.description-header{color:var(--cr-primary-text-color);font-weight:500}.icon-bulleted-list li{margin:8px 0}settings-section{--cr-card-shadow:none}@media (forced-colors:active){settings-section{--cr-border-hcm:none}}`]);
}
