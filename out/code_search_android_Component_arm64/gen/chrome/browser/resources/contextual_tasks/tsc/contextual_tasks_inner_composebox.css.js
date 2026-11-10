import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrIconsLit } from '//resources/cr_elements/cr_icons_lit.css.js';
import { getCss as getComposeboxSharedStyle } from '//resources/cr_components/composebox/composebox_shared_style.css.js';
import { getCss as getComposebox } from '//resources/cr_components/composebox/composebox.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrIconsLit(), getComposeboxSharedStyle(), getComposebox()], css `#composebox{border-radius:inherit;display:flex;flex-direction:column;overflow:hidden;position:relative}#inputContainer{box-sizing:border-box;display:flex;flex-direction:column;width:100%}`]);
}
