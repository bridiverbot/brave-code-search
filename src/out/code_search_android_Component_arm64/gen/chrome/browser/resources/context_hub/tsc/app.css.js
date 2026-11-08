import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrNavMenuItemStyleLit } from 'chrome://resources/cr_elements/cr_nav_menu_item_style_lit.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrNavMenuItemStyleLit()], css `:host{color:var(--cr-primary-text-color);display:flex;height:100vh;overflow:hidden}aside{border-inline-end:1px solid var(--cr-separator-color);box-sizing:border-box;flex-shrink:0;width:240px}.logo-section{align-items:center;display:flex;font-size:20px;font-weight:600;gap:12px;margin-bottom:32px;padding-block-start:24px;padding-inline:24px}#selector{padding-inline-end:12px}.content-area{box-sizing:border-box;flex:1;min-width:0;overflow-y:auto;padding:32px;scrollbar-width:none}.content-area::-webkit-scrollbar{display:none}.cr-nav-menu-item.disabled{cursor:not-allowed;opacity:var(--cr-disabled-opacity,0.38);pointer-events:none !important;user-select:none}`]);
}
