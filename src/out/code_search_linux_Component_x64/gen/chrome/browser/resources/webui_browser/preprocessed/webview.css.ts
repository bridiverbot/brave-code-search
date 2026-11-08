import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import '//resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{display:flex;flex-direction:column;height:100%;width:100%}.content{border:0;margin:0;padding:0;flex:1;width:100%;height:100%}`]);
}