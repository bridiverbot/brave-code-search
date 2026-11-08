import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import { getCss as getSharedStyle } from './shared_style.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSharedStyle()], css `.panel-header{padding:calc(var(--cr-section-padding) - var(--cr-section-vertical-padding)) 0}.header-group-wrapper{flex:1;margin-inline-start:15px}cr-icon[icon='cr:check']{padding-inline-start:10px;fill:var(--google-green-700)}@media (prefers-color-scheme:dark){cr-icon[icon='cr:check']{fill:var(--google-green-300)}}.completion-container{font-weight:500;font-size:14px;margin-top:20px;min-height:42px}.panel-extension-info{flex:1;margin-top:15px;margin-bottom:0}.bulk-action-button{margin-inline-start:auto}.cr-row{padding:0}`]);
}
