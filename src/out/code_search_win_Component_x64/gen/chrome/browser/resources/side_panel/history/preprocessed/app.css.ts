import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getSpSharedStyle} from 'chrome://history-side-panel.top-chrome/shared/sp_shared_style.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getSpSharedStyle()], css`:host{display:flex;flex-direction:column;height:100%}`]);
}