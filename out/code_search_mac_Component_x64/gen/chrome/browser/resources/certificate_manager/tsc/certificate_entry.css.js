import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from '//resources/cr_elements/cr_shared_style_lit.css.js';
import { getCss as getCrIconsLit } from '//resources/cr_elements/cr_icons_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getCrIconsLit()], css `.cert-row{display:flex;border-top:none;overflow-wrap:anywhere;padding-top:10px;padding-bottom:10px}.cert-hash{--cr-input-error-display:none;margin-left:auto;min-width:20em;max-width:20em}`]);
}
