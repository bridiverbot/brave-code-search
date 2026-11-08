import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit()], css `:host{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);display:block;margin:calc(var(--cr-section-padding) / 2);overflow:hidden}.cr-row{padding:calc(var(--cr-section-padding) / 2) var(--cr-section-padding)}.label:not(:first-child){margin-inline-start:var(--cr-icon-button-margin-start)}.status{--iron-icon-fill-color:var(--google-grey-700);--iron-icon-height:20px;--iron-icon-width:20px}@media (prefers-color-scheme:dark){.status{--iron-icon-fill-color:var(--google-grey-500)}}.content{flex-grow:1;overflow:auto;white-space:pre}.actions{align-self:flex-start;display:flex;flex-direction:column}.pagelabel{font-size:smaller;float:right}`]);
}
