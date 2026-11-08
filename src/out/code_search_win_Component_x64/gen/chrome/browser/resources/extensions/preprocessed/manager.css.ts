import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrHiddenStyleLit} from 'chrome://resources/cr_elements/cr_hidden_style_lit.css.js';
import {getCss as getCrScrollableLit} from 'chrome://resources/cr_elements/cr_scrollable_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './shared_vars.css.js';
import {getCss as getSharedStyle} from './shared_style.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrHiddenStyleLit(),getCrScrollableLit(),getSharedStyle()], css`:host{color:var(--cr-primary-text-color);display:flex;flex-direction:column;height:100%}#viewManager{flex:1 1 var(--cr-toolbar-field-width);height:100%;position:relative}@media (min-width:1650px){#viewManager:has(extensions-item-list.active){flex-basis:1400px}}@media (max-width:1649px){#viewManager:has(extensions-item-list.active){flex-basis:950px}}extensions-item{display:inline-block}#container{align-items:flex-start;display:flex;flex:1;overflow:overlay;position:relative}#left{height:100%;min-width:var(--sidebar-width);position:sticky;top:0}#left extensions-sidebar{max-height:100%;overflow:auto;overscroll-behavior:contain}#left,#right{flex:1 1 0}picture[slot='header-icon']{display:inline-block;height:24px;margin-inline-end:16px;width:24px}picture[slot='header-icon'] img{display:block;height:100%;width:100%}
`]);
}