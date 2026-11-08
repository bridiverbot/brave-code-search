import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSharedStyleLit} from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import {getCss as getSettingsSharedLit} from '../settings_shared_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSharedStyleLit(),getSettingsSharedLit()], css`.sync-row{align-items:center;flex:auto}#profile-icon{background:center/cover no-repeat;border-radius:20px;flex-shrink:0;height:40px;width:40px}#account-subpage-row>#profile-icon{margin-inline-end:16px;order:-1}#sync-setup{--cr-secondary-text-color:var(--settings-error-color)}#sync-not-allowed{background:var(--google-grey-100);border-top:var(--cr-separator-line)}#sync-not-allowed-text{margin-left:8px}cr-link-row{--cr-link-row-icon-width:40px;border-top:var(--cr-separator-line)}.icon-container{display:flex;flex-shrink:0;justify-content:center;width:40px}#toast{left:0;z-index:1}:host-context([dir='rtl']) #toast{left:auto;right:0}settings-sync-account-control[showing-promo]::part(banner){border-top-left-radius:var(--cr-card-border-radius);border-top-right-radius:var(--cr-card-border-radius)}settings-sync-account-control[showing-promo]::part(title){font-size:1.1rem;line-height:1.625rem}@media (prefers-color-scheme:dark){#sync-not-allowed{background:var(--google-grey-800)}}`]);
}