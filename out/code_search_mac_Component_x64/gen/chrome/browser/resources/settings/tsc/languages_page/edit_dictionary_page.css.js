import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from '//resources/cr_elements/cr_shared_style_lit.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSettingsSharedLit()], css `:host{display:flex;flex-direction:column}#newWord{width:100%;--cr-input-width:var(--cr-default-input-max-width)}#newWord::part(row-container){justify-content:normal}#list .word{flex:1}`]);
}
