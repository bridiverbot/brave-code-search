import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSharedStyleLit} from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSharedStyleLit()], css`:host{--break-padding:8px}cr-dialog::part(dialog){width:fit-content}table{border-spacing:0}.break>td{--break-color:var(--google-grey-300);border-bottom:1px solid var(--break-color);padding-bottom:var(--break-padding)}.break+tr>td{padding-top:var(--break-padding)}.name{color:var(--cr-primary-text-color);padding-inline-end:12px;vertical-align:top}.value{color:var(--cr-secondary-text-color);max-width:300px;min-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#keywords{white-space:normal}`]);
}