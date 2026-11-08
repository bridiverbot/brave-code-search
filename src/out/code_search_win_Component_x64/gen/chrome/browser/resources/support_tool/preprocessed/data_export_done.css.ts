import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getActionLinkLit} from 'chrome://resources/cr_elements/action_link_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import {getCss as getSupportToolSharedLit} from './support_tool_shared_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getSupportToolSharedLit(),getActionLinkLit()], css`#check-icon{--iron-icon-fill-color:var(--google-green-500);height:20px;width:20px}#path-link{margin-inline-start:8px;margin-top:8px}`]);
}