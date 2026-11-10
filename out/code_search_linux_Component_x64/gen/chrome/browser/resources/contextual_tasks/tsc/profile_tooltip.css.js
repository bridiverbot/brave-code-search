import { css } from '//resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{--profile-tooltip-background-color:#202124;--profile-tooltip-title-color:#fff;--profile-tooltip-text-color:#c4c7c5;display:block}@media (prefers-color-scheme:dark){:host{--profile-tooltip-background-color:rgb(227,227,227);--profile-tooltip-title-color:rgb(31,31,31);--profile-tooltip-text-color:rgb(68,71,70)}}#tooltip{background-color:var(--profile-tooltip-background-color);border-radius:4px;box-sizing:border-box;font-size:12px;font-weight:500;line-height:16px;padding:4px 8px;pointer-events:none;position:fixed;text-align:start;white-space:nowrap;width:max-content;z-index:1000}#tooltip:not([open]){visibility:hidden}.title{color:var(--profile-tooltip-title-color)}.text{color:var(--profile-tooltip-text-color)}`]);
}
