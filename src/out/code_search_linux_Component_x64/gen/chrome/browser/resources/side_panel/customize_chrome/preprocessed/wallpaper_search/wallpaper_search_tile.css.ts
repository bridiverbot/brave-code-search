import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{background:linear-gradient(131deg,var(--color-sys-gradient-primary) 12.23%,var(--color-sys-gradient-tertiary) 89.37%);display:block;height:100%;width:100%}svg{height:100%;width:100%}#dark{display:none}@media (prefers-color-scheme:dark){:host{background:linear-gradient(131deg,var(--color-sys-gradient-tertiary) 12.23%,var(--color-sys-gradient-primary) 89.37%)}#light{display:none}#dark{display:block}}`]);
}