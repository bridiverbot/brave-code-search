import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{display:flex;align-items:center;justify-content:center;width:100%;height:100%;background-color:transparent}drive-picker-host-untrusted-app{display:block;width:100%;height:100%;overflow:hidden}#picker-container{width:100%;height:100%}iframe{border:none;width:100%;height:100%}#error-screen{display:flex;flex-direction:column;box-sizing:border-box;width:100%;height:100%;background-color:var(--color-dialog-background,var(--cr-fallback-color-surface));color:var(--cr-primary-text-color);padding:24px}.error-title{font-size:15px;font-weight:500;margin-bottom:auto;text-align:left}.error-buttons{display:flex;gap:8px;justify-content:flex-end;margin-top:24px}`]);
}