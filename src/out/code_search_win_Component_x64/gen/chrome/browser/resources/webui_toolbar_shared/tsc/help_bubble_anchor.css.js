import { css } from '//resources/lit/v3_0/lit.rollup.js';
import './webui_toolbar_shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host(.help-anchor-highlight) .iph-visual-target{--cr-hover-background-color:transparent;--cr-icon-button-hover-background-color:transparent;--cr-icon-button-active-background-color:transparent;--cr-button-ripple-color:transparent;background-color:transparent !important;isolation:isolate}:host(.help-anchor-highlight) .iph-visual-target::after{opacity:0 !important}:host(.help-anchor-highlight) .iph-visual-target::before{animation:pulse 1600ms infinite !important;background-color:var(--color-button-feature-attention-highlight) !important;background-image:linear-gradient(var(--iph-pressed-color,transparent)) !important;border-radius:inherit;content:'';inset:0;opacity:1 !important;pointer-events:none;position:absolute;transition:none !important}@keyframes pulse{0%{inset:0;animation-timing-function:var(--ease-out-cubic-bezier)}50%{inset:3px;animation-timing-function:var(--ease-out-cubic-bezier)}100%{inset:0}}`]);
}
