import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{background-color:var(--viewer-side-background-color);color:var(--google-grey-100);display:block;height:100%;overflow-y:auto;width:288px}.side-panel-content{padding:24px}h2{font-size:13px;font-weight:400;margin:0;margin-inline-start:6px}`]);
}