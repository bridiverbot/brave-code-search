import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './signin_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{--scrollbar-background:var(--google-grey-100);--scrollbar-width:4px}a{color:var(--cr-link-color);text-decoration:none}.container{color:var(--cr-primary-text-color);width:448px}.top-title-bar{align-items:center;border-bottom:var(--cr-separator-line);display:flex;font-size:16px;height:52px;padding:0 24px}.action-container{column-gap:8px;display:flex;padding:var(--action-container-padding);flex-flow:row-reverse;justify-content:flex-start}.custom-scrollbar::-webkit-scrollbar{width:var(--scrollbar-width)}.custom-scrollbar::-webkit-scrollbar-track{border-radius:var(--scrollbar-width)}.custom-scrollbar::-webkit-scrollbar-thumb{background:var(--scrollbar-background);border-radius:var(--scrollbar-width)}@media (prefers-color-scheme:dark){:host{--scrollbar-background:var(--google-grey-800)}}`]);
}
