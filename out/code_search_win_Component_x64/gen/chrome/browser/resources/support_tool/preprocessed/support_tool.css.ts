import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getSupportToolSharedLit} from './support_tool_shared_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getSupportToolSharedLit()], css`:host{block-size:fit-content;display:block;margin-inline-start:40px;margin-top:72px;width:fit-content}cr-button{margin-inline-start:8px}`]);
}