import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSettingsSharedLit()], css `#dialog-title{align-items:center;display:flex}#dialog-body{display:flex;flex-direction:column;height:350px;overflow:auto;padding-inline-end:0;padding-inline-start:0}#dialog-title>span,#list{flex:1}cr-checkbox{padding-bottom:7px;padding-inline-end:var(--cr-section-padding);padding-inline-start:40px;padding-top:7px}cr-checkbox::part(label-container){min-width:0}`]);
}
