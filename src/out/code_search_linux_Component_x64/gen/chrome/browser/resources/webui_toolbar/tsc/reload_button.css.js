import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrIconsLit } from '//resources/cr_elements/cr_icons_lit.css.js';
import { getCss as getToolbarButton } from './toolbar_button.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrIconsLit(), getToolbarButton()], css `:host{margin:0;overflow:hidden}`]);
}
