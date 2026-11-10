import { css } from '//resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{--odd-row-background-color:rgb(239,243,255);--nested-table-border-color:var(--odd-row-background-color)}tr:nth-child(odd){--nested-table-border-color:white;background:var(--odd-row-background-color)}ul{list-style-type:none;margin:0;padding:0}cr-expand-button{padding-inline-start:1em}cr-expand-button:hover{filter:contrast(1.1);text-decoration:underline}.unloaded{opacity:50%}table table{border-style:hidden;border-collapse:collapse;td,th{padding:2px;border:solid 2px var(--nested-table-border-color)}th{font-size:.8em}}`]);
}
