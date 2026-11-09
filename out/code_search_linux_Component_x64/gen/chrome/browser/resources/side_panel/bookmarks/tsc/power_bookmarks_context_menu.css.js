import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrIconsLit } from '//resources/cr_elements/cr_icons_lit.css.js';
import { getCss as getCrHiddenStyleLit } from '//resources/cr_elements/cr_hidden_style_lit.css.js';
import { getCss as getSpSharedStyle } from '//bookmarks-side-panel.top-chrome/shared/sp_shared_style.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrIconsLit(), getCrHiddenStyleLit(), getSpSharedStyle()], css `hr{border:none;border-top:var(--cr-hairline)}.dropdown-item{justify-content:space-between}`]);
}
