import { css } from '//resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `#currentTabButton{align-items:center;background-color:var(--color-composebox-context-entrypoint-hover-background);border:none;color:var(--color-searchbox-results-foreground);display:flex;font-size:13px;height:var(--cr-icon-button-height,32px);justify-content:center;padding:8px 12px;border-radius:100px}@media (forced-colors:active){#currentTabButton{--cr-button-text-color:Highlight}}:host([has-virtual-focus]) #currentTabButton{box-shadow:inset 0 0 0 2px var(--cr-focus-outline-color)}`]);
}
