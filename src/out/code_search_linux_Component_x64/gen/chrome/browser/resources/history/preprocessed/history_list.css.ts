import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSharedStyleLit} from '//resources/cr_elements/cr_shared_style_lit.css.js';
import {getCss as getSharedStyle} from './shared_style.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSharedStyleLit(),getSharedStyle()], css`:host{box-sizing:border-box;display:block}:host([is-empty]){padding-block:80px}.history-cards{margin-block-start:var(--first-card-padding-top)}dialog [slot=body]{white-space:pre-wrap}.chunk{overflow-clip-margin:8px}`]);
}