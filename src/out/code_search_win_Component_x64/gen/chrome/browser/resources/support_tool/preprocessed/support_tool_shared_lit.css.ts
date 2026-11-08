import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`h1{color:var(--cr-primary-text-color);font-size:20px;font-weight:normal;margin-bottom:18px}.support-tool-title{color:var(--cr-title-text-color);font-size:14px;line-height:20px;margin-bottom:8px;margin-top:8px}.navigation-buttons{float:right;margin-bottom:20px;margin-top:32px;position:relative;right:0}.support-case-id{height:32px;margin-bottom:3px;width:248px}.data-collector-checkbox{padding-bottom:8px;padding-top:8px}.data-collector-list{width:520px;padding-top:8px}.select-all-checkbox{border-bottom:var(--cr-separator-line);padding-bottom:16px}`]);
}