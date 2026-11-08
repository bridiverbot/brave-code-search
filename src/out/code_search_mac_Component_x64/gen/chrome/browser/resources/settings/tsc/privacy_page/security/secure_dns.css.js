import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getMdSelectLit } from 'chrome://resources/cr_elements/md_select_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getMdSelectLit()], css `:host{display:flex;flex-direction:column}:host(.no-hr) settings-toggle-button.hr{border-top:0}#resolverSelect{width:inherit}#resolverLabel{flex:1}#privacyPolicy{display:none;padding:calc(var(--cr-section-padding) / 2) var(--cr-section-padding)}#privacyPolicy a{color:var(--cr-link-color)}#secureDnsInputContainer{margin-top:calc(var(--cr-section-padding) / 2)}`]);
}
