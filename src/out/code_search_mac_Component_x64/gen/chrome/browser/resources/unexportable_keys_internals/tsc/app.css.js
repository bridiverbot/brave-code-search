import { css } from '//resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{display:block;font-size:13px;padding:20px}h1{font-size:16px;font-weight:500;margin-bottom:20px;margin-top:0}table{border-collapse:collapse;width:100%}th{background-color:#f2f2f2}td,th{text-align:start;padding-bottom:8px;padding-inline-end:16px;padding-inline-start:16px;padding-top:8px;border:1px solid #ddd}.sort-header{cursor:pointer;user-select:none}.sort-header[aria-sort='ascending']::after{content:' ▲'}.sort-header[aria-sort='descending']::after{content:' ▼'}.wrapped-key{max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}cr-icon-button{margin-inline-start:auto}`]);
}
