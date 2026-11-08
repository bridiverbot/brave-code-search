import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import './updater_shared.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{color:var(--cr-primary-text-color)}.header-bar{display:flex;align-items:center;gap:4px}#controls{margin-inline-start:auto}.file-selection-banner{border-radius:4px;display:flex;align-items:center;gap:12px;padding:8px 12px}.file-selection-banner[error]{background-color:var(--error-background-color);color:var(--error-icon-color)}#logo{background-image:image-set('chrome://theme/current-channel-logo@1x' 1x,'chrome://theme/current-channel-logo@2x' 2x);background-size:cover;height:24px;margin-inline-end:10px;width:24px}h1{font-size:1.7em;font-weight:500;letter-spacing:0.25px;line-height:80%;margin:0}h2{margin-bottom:0.5em}#content{display:flex;flex-direction:column;gap:16px;padding-top:16px}`]);
}