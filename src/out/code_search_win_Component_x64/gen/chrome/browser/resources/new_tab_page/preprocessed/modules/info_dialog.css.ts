import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`cr-dialog::part(dialog){max-width:100%;position:fixed}cr-dialog [slot='body']{line-height:20px}`]);
}