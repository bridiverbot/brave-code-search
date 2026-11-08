import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSpinnerStyleLit} from 'chrome://resources/cr_elements/cr_spinner_style_lit.css.js';
import {getCss as getSettingsSharedLit} from '../../settings_shared_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getSettingsSharedLit(),getCrSpinnerStyleLit()], css`.spinner{padding-bottom:12px}#header{display:flex;justify-content:flex-start}site-favicon{margin-inline-end:2px;min-width:16px}.icon-placeholder{margin-inline-end:var(--cr-icon-button-margin-end);margin-inline-start:var(--cr-icon-button-margin-start);width:var(--cr-icon-ripple-size)}.site{flex:1}.user-name{flex:1}.user-display-name{flex:0.8}.user-display-name,.user-name,.site{align-items:center;display:inline-block;overflow:hidden;overflow-wrap:break-word;padding-inline-start:0.3rem;text-align:start}#siteHeader,#userDisplayNameHeader,#userNameHeader{font-weight:bold}#siteHeader{margin-inline-start:1rem}.edit{display:flex;flex-direction:column}#title{user-select:none}`]);
}