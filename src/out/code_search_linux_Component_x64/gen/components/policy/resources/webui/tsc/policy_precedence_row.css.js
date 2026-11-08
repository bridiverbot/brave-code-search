import { css } from '//resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host(:not([hidden])){display:block}.row:not([hidden]){display:flex}.row>*{box-sizing:border-box;flex:0 0 10%;overflow:hidden;padding:12px;text-align:start;text-overflow:ellipsis;white-space:nowrap}.name{border-inline-end:1px solid var(--table-border);flex:0 0 25%}.value{flex:0 0 25%}.precedence.row:hover{background-color:var(--element-hover)}.precedence.row .value{flex-grow:1;max-height:200px;overflow:auto;overflow-wrap:break-word;text-overflow:unset;white-space:pre-wrap}@media (min-width:768px){.precedence.row .name{text-align:end}}@media (max-width:768px){.value{display:none}.name{flex:0 0 50%}.value.row .name{flex:0 0 25%}.precedence.row .value{display:block;flex:1}.precedence.row .name{white-space:pre-wrap}}`]);
}
