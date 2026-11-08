import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import {getCss as getSharedStyle} from './shared_style.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getSharedStyle()], css`:host{-webkit-tap-highlight-color:transparent;display:block}#cardHeading{cursor:pointer;justify-content:space-between;padding-inline-end:0}#tab-item-list{padding:8px 0}#last-update-time{color:var(--cr-secondary-text-color)}#title-left-content{display:flex;overflow:hidden}#device-name{overflow:hidden;padding-inline-end:3px;text-overflow:ellipsis}#right-buttons{color:var(--cr-secondary-text-color);margin-inline-end:24px}#collapse{overflow:hidden}#history-item-container{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow)}.item-container{align-items:center;display:flex;margin:0 20px;min-height:var(--item-height)}.window-separator{background-color:var(--card-border-color);height:1px;margin:5px auto;width:80%}`]);
}