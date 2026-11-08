import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getActionLinkLit } from 'chrome://resources/cr_elements/action_link_lit.css.js';
import { getCss as getCrScrollableLit } from 'chrome://resources/cr_elements/cr_scrollable_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSettingsSharedLit(), getActionLinkLit(), getCrScrollableLit()], css `#editOptions>div{border-top:var(--cr-separator-line)}#outer{display:flex;flex-direction:column;max-height:355px}#container settings-startup-url-entry{cursor:default}`]);
}
