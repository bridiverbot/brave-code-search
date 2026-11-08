import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import '//resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`th,td{overflow:auto}.source-location{text-overflow:ellipsis;white-space:nowrap;width:15%}.message{word-wrap:break-word;width:70%}.main{margin:20px}a{color:var(--cr-link-color)}`]);
}