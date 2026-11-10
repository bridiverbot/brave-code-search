import { css } from '//resources/lit/v3_0/lit.rollup.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{box-sizing:border-box;display:flex;flex-direction:column;min-height:100%;width:100%}:host([hidden]){display:none !important}#topics-view{box-sizing:border-box;display:flex;flex:1;flex-direction:column;width:100%}.container{box-sizing:border-box;display:flex;flex:1;flex-direction:column;max-width:960px;width:100%}.header-container{align-items:center;display:flex;flex-shrink:0;justify-content:space-between;margin-bottom:24px}h1{color:var(--cr-primary-text-color);font-family:inherit;font-size:28px;font-weight:600;line-height:34px;margin:0}#fishfoodNote{color:var(--cr-secondary-text-color);font-size:12px;line-height:16px;margin:4px 0 0}.empty-state{color:var(--cr-secondary-text-color);font-size:14px;margin:0}.cards-list{box-sizing:border-box;display:flex;flex-direction:column;gap:8px;padding-block-end:28px;width:100%}`]);
}
