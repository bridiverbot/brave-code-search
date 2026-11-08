import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{height:100%;width:100%}cr-grid{--cr-grid-gap:8px}#moduleContent{display:flex;justify-content:center}:host([format='narrow']) .tile-item,:host([format='narrow']) img{width:120px}.tile-item{color:var(--color-new-tab-page-primary-foreground);height:120px;width:170px}img{border-radius:8px}`]);
}