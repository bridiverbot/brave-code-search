import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import {getCss as getSettingsSharedLit} from '../settings_shared_lit.css.js';
import '../settings_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getSettingsSharedLit()], css`#headers{display:flex;padding:10px 0}#headers .additional-info-column-group{align-items:center;display:flex;flex:6}#headers .controls-group{align-items:center;display:flex;flex:auto;justify-content:end;margin-left:auto}#headers .name{flex:3}#headers .shortcut,#headers .url{flex:auto;margin-inline-end:40px}settings-search-engine-entry{border-top:var(--cr-separator-line)}:host([fixed-height]) #container{max-height:calc((var(--cr-section-min-height) + var(--cr-separator-height)) * 6)}.icon-placeholder{margin-inline-end:0;margin-inline-start:var(--cr-icon-button-margin-start);width:var(--cr-icon-ripple-size)}.cr-row{padding-inline-end:7px;padding-inline-start:0}.list-frame{padding-inline-start:var(--cr-controlled-by-spacing)}`]);
}