import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{display:block;padding:16px}table{border-collapse:collapse;max-width:600px;width:100%}th,td{border:1px solid #ccc;padding:8px 12px;text-align:left}th{background-color:#f0f0f0}.valid{color:green}.invalid{color:red;font-weight:bold}`]);
}