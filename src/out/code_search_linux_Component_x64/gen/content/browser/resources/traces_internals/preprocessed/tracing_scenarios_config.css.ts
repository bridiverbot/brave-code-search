import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import {getCss as getCrSpinnerStyleLit} from '//resources/cr_elements/cr_spinner_style_lit.css.js';
import {getCss as getConfigToggle} from './config_toggle.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSpinnerStyleLit(),getConfigToggle()], css`:host{height:100%;display:flex;flex-direction:column;color:var(--cr-primary-text-color);padding:8px 12px;overflow-y:auto}:host h3{color:var(--cr-secondary-text-color)}.action-panel{display:flex;justify-content:flex-end;gap:16px}.scenario-list-container{flex-direction:column;display:flex;margin:0 8px}.loading-spinner{width:100%;height:100px;display:flex;justify-content:center}.spinner{--cr-spinner-size:20px}

`]);
}