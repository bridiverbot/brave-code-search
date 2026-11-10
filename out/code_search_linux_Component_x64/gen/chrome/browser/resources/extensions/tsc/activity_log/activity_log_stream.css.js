import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getSharedStyle } from '../shared_style.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSharedStyle()], css `:host{--activity-log-call-and-time-width:575px;--activity-type-width:85px;--activity-time-width:100px;display:flex;flex-direction:column}cr-search-field{align-self:center;margin-inline-end:auto}.activity-table-headings{width:var(--activity-log-call-and-time-width)}#activity-type{flex:0 var(--activity-type-width)}#activity-key{flex:1;margin-inline-start:10px}#activity-time{flex:0 var(--activity-time-width);text-align:end}cr-infinite-list{flex:1}`]);
}
