import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrHiddenStyleLit} from 'chrome://resources/cr_elements/cr_hidden_style_lit.css.js';
import {getCss as getCrScrollableLit} from 'chrome://resources/cr_elements/cr_scrollable_lit.css.js';
import {getCss as getCrSharedStyleLit} from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrHiddenStyleLit(),getCrSharedStyleLit(),getCrScrollableLit()], css`:host{background-color:white;border-inline-start:var(--print-preview-settings-border);display:flex;flex-direction:column}@media (prefers-color-scheme:dark){:host{background-color:rgba(255,255,255,.04)}}#container{color:var(--cr-primary-text-color);flex:1;overflow:overlay}:host #destinationSettings{margin-bottom:20px;margin-top:12px}.cr-scrollable-top-shadow,.cr-scrollable-bottom-shadow{box-shadow:inset 0 5px 6px -3px rgba(0,0,0,.4)}.settings-section{display:block;margin-bottom:16px;margin-top:16px}`]);
}