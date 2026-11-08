import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from '//resources/cr_elements/cr_shared_style_lit.css.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSettingsSharedLit()], css `.cr-row-no-top-gap{margin-bottom:var(--cr-section-vertical-margin);min-height:auto}.preview-box{all:initial;align-items:center;background-image:url(chrome://theme/IDR_ACCESSIBILITY_CAPTIONS_PREVIEW_BACKGROUND);background-position:center;background-size:cover;border-radius:4px;display:flex;justify-content:center;margin:var(--cr-section-padding);margin-inline-start:var(--cr-section-indent-padding);min-height:112px;padding:20px;text-align:center}`]);
}
