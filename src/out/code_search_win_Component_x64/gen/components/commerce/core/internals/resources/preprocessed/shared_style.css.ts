import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`*{font-family:sans-serif}.list th,.list tr{text-align:left;vertical-align:top}tr:nth-child(even){background-color:#eee}tr:nth-child(odd){background-color:#c7dee9}`]);
}