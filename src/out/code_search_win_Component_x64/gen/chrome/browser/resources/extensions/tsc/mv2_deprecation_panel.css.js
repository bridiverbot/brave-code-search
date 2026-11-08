import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import { getCss as getSharedStyle } from './shared_style.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSharedStyle()], css `.cr-row{padding:0}.header-button,.extension-buttons{margin-inline-start:auto}@container (max-width:450px){.panel-extension-info{max-width:116px}}`]);
}
