import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getBraveAccountCommon} from './brave_account_common.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getBraveAccountCommon()], css`:host{display:flex;flex-direction:column;gap:var(--leo-spacing-s);.otp-inputs{display:flex;gap:var(--leo-spacing-m);justify-content:center;leo-input{--leo-control-font:var(--leo-font-heading-h4);--leo-control-padding:7px;caret-color:transparent;text-align:center;@media (min-width:500px){--leo-control-font:var(--leo-font-heading-h2)}}}}`]);
}