import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`#body{display:flex}.tonal-button{margin-inline-end:8px}#icon-wrapper,cr-icon{height:var(--cr-icon-size);width:var(--cr-icon-size);color:var(--google-red-700)}@media (prefers-color-scheme:dark){#icon-wrapper,cr-icon{color:var(--google-red-300)}}#icon-wrapper{margin-inline-end:8px}#body-text{color:var(--cr-primary-text-color)}#file-name{font-weight:bold}`]);
}