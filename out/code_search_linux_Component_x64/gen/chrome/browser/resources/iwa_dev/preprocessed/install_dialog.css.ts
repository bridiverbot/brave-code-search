import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import '//resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`.tab-content{min-height:120px;padding-top:24px}.tab-content:has(iwa-dev-install-update-manifest-tab){min-height:220px}cr-tabs[inert]{opacity:0.6}`]);
}