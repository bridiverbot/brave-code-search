import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getBraveAccountRowCommon } from './brave_account_row_common.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getBraveAccountRowCommon()], css `.delete-account-button{--leo-button-color:var(--leo-color-systemfeedback-error-text)}.details{column-gap:var(--leo-spacing-xl);display:grid;grid-template-columns:minmax(0,1fr) minmax(0,2fr) auto;.detail{align-items:center;border-bottom:1px solid var(--leo-color-divider-subtle);display:grid;grid-column:1/-1;grid-template-columns:subgrid;padding:var(--leo-spacing-l) var(--leo-spacing-2xl);.label{color:var(--leo-color-text-primary);font:var(--leo-font-default-regular);grid-column:1}leo-input{grid-column:2}leo-button{grid-column:3}}.account-actions{display:flex;gap:var(--leo-spacing-m);grid-column:1/-1;padding:var(--leo-spacing-xl)}}`]);
}
