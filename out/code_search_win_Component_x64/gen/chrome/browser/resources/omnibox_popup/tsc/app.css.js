import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getComposeboxSharedStyle } from '//resources/cr_components/composebox/composebox_shared_style.css.js';
import { getCss as getOmniboxPopupSharedStyle } from './omnibox_popup_shared_style.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getComposeboxSharedStyle(), getOmniboxPopupSharedStyle()], css `:host{--cr-searchbox-min-width:75%;--cr-searchbox-results-margin-bottom:0;--cr-searchbox-results-padding-bottom:0;--cr-searchbox-width:100%;--text-input-inline-start-spacing:16px;--contextual-entrypoint-and-carousel-context-menu-container-padding-inline-start:0;--contextual-entrypoint-and-carousel-carousel-divider-margin-top:8px;--contextual-entrypoint-and-carousel-carousel-divider-margin-bottom:8px;font-size:var(--omnibox-font-size)}:host([has-visible-matches_]) .dropdownContainer{padding-bottom:10px}:host([is-debug]){display:block;width:50%}`]);
}
