import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import { getCss as getSettingsSharedLit } from '../../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSettingsSharedLit()], css `.cr-padded-text{flex:1}.list-frame{padding-inline-start:var(--cr-section-indent-width)}#outer{display:flex;flex-direction:column}#outer>tab-discard-exception-entry:not(:first-of-type){border-top:var(--cr-separator-line)}#expandButton{padding-inline-end:0;padding-inline-start:0;--cr-icon-button-margin-end:0}`]);
}
