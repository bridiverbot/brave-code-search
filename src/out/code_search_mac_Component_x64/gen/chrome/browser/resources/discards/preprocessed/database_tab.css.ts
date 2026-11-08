import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`@media (prefers-color-scheme:dark){:host{color:var(--cr-secondary-text-color)}}.add-origin-container{display:flex;padding-top:10px}table{border-collapse:collapse}table td,table th{border:1px solid #777;padding-inline-end:4px;padding-inline-start:4px}table th{background:rgb(224,236,255);color:black;padding-bottom:4px;padding-inline-end:16px;padding-top:4px;white-space:nowrap}.header-cell-container{align-items:center;display:flex;justify-content:flex-start}table th[data-sort-key]{cursor:pointer}th div.header-cell-container::after{content:'▲';opacity:0}th.sort-column div.header-cell-container::after{content:'▲';opacity:1}th.sort-column-reverse div.header-cell-container::after{content:'▼';opacity:1}`]);
}