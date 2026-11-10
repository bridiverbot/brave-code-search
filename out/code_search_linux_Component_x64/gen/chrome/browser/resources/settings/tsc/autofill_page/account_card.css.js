import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSettingsSharedLit()], css `#profile-icon{background:center/cover no-repeat;border-radius:20px;flex-shrink:0;height:40px;width:40px}cr-link-row{--cr-link-row-icon-width:40px;border-top:var(--cr-separator-line)}settings-sync-account-control[showing-promo]::part(banner){border-top-left-radius:var(--cr-card-border-radius);border-top-right-radius:var(--cr-card-border-radius)}settings-sync-account-control[showing-promo]::part(title){font-size:1.1rem;line-height:1.625rem}#account-card{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);flex:1;margin-bottom:20px;margin-top:16px;overflow:hidden}@media (forced-colors:active){#account-card{border:var(--cr-border-hcm)}}`]);
}
