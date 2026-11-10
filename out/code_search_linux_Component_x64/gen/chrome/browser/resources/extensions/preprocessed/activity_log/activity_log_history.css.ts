import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getSharedStyle} from '../shared_style.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getSharedStyle()], css`:host{--activity-log-call-and-count-width:514px;--activity-type-width:85px;--activity-count-width:100px;display:flex;flex-direction:column}cr-search-field{align-self:center;margin-inline-end:auto}cr-icon-button{margin:0}.activity-table-headings{width:var(--activity-log-call-and-count-width)}#activity-list{overflow-y:auto}#activity-type{flex:0 var(--activity-type-width)}#activity-key{flex:1;margin-inline-start:10px}#activity-count{flex:0 var(--activity-count-width);text-align:end}`]);
}