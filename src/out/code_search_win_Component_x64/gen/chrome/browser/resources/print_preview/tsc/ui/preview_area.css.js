import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrHiddenStyleLit } from 'chrome://resources/cr_elements/cr_hidden_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './print_preview_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrHiddenStyleLit()], css `@keyframes dancing-dots-jump{0%{top:0}55%{top:0}60%{top:-10px}80%{top:3px}90%{top:-2px}95%{top:1px}100%{top:0}}span.jumping-dots>span{animation:dancing-dots-jump 1800ms infinite;padding:1px;position:relative}span.jumping-dots>span:nth-child(2){animation-delay:100ms}span.jumping-dots>span:nth-child(3){animation-delay:300ms}:host{display:block;height:100%;overflow:hidden;position:relative;user-select:none}.preview-area-plugin-wrapper{height:100%}.preview-area-plugin{border:none;cursor:inherit;height:100%;opacity:1;transition:opacity 200ms linear;transition-delay:100ms;width:100%}.preview-area-overlay-layer{background:var(--preview-area-background-color);display:flex;flex-direction:column;height:100%;justify-content:center;margin:0;opacity:1;position:absolute;transition:opacity 200ms linear;transition-delay:350ms;user-select:none;width:100%;z-index:1}.preview-area-overlay-layer.invisible{opacity:0;pointer-events:none;transition:opacity 100ms linear}.preview-area-message{color:var(--cr-primary-text-color);line-height:20px;margin:0 10px;position:relative;text-align:center}`]);
}
