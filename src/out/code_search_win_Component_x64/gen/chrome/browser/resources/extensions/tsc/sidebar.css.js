import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrIconsLit } from 'chrome://resources/cr_elements/cr_icons_lit.css.js';
import { getCss as getCrHiddenStyleLit } from 'chrome://resources/cr_elements/cr_hidden_style_lit.css.js';
import { getCss as getCrNavMenuItemStyleLit } from 'chrome://resources/cr_elements/cr_nav_menu_item_style_lit.css.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrIconsLit(), getCrHiddenStyleLit(), getCrNavMenuItemStyleLit(), getCrSharedStyleLit()], css `:host{--sidebar-inactive-color:#5a5a5a;color:var(--sidebar-inactive-color);display:flex;flex-direction:column;height:100%;overflow-x:hidden;overflow-y:auto;width:var(--sidebar-width)}@media (prefers-color-scheme:dark){:host{--sidebar-inactive-color:var(--cr-primary-text-color)}}#sectionMenu{padding-top:8px}.separator{border-top:var(--cr-separator-line);margin:8px 0}#moreExtensions{align-items:center;display:flex;margin-bottom:8px}#web-store-icon{--iron-icon-height:24px;--iron-icon-width:24px;margin-inline-end:18px;margin-inline-start:-2px}.cr-secondary-text{line-height:19px;margin-inline-end:10px}#discover-more-text a,#promo-message-text a{color:var(--cr-link-color)}:host-context([webui-refresh-2026]){#discover-more-text a:focus,#promo-message-text a:focus{border-radius:2px;outline:solid 2px var(--cr-focus-outline-color)}}#promo-message-text{overflow-wrap:anywhere;hyphens:auto}
`]);
}
