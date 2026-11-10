import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrPageHostStyleLit} from '//resources/cr_elements/cr_page_host_style_lit.css.js';
import {getCss as getCrSharedStyleLit} from '//resources/cr_elements/cr_shared_style_lit.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrPageHostStyleLit(),getCrSharedStyleLit()], css`:host{display:block;padding:20px}table{border-collapse:collapse;width:100%}th,td{border:1px solid var(--cr-separator-color);padding:8px;text-align:left}th{background-color:var(--cr-card-background-color)}.card{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);margin-block-end:24px;padding:16px}h2{margin-top:0}.property-name{font-weight:bold;width:300px}.path{word-break:break-all}a{color:var(--cr-link-color)}.progress-text{font-variant-numeric:tabular-nums;display:inline-block;min-width:150px}`]);
}