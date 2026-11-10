import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSharedStyleLit} from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSharedStyleLit()], css`#noSearchResults{margin-top:80px;text-align:center}#noSearchResults div:first-child{font-size:123%;margin-bottom:10px}managed-footnote{border-top:none;margin-bottom:calc(-21px - 8px);padding-bottom:16px;padding-top:12px;position:relative;z-index:1}cr-view-manager{display:block;position:relative}cr-view-manager [hidden-by-search]{display:none}`]);
}