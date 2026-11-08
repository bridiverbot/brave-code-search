import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrHiddenStyleLit} from '//resources/cr_elements/cr_hidden_style_lit.css.js';
import {getCss as getCrSpinnerStyleLit} from '//resources/cr_elements/cr_spinner_style_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrHiddenStyleLit(),getCrSpinnerStyleLit()], css`:host{display:grid;grid-template-columns:auto auto 1fr 5fr;grid-auto-flow:column;gap:0 12px;padding:4px 4px;margin-bottom:4px;border-radius:4px;height:40px;align-items:center;min-width:0;position:relative}.info{overflow:hidden;font-size:13px;color:var(--cr-primary-text-color);text-overflow:ellipsis}.current-state-card{width:80px;border-radius:1000px;font-size:14px;display:flex;height:34px;align-items:center;padding:0 16px;color:var(--cr-primary-text-color)}.state-disabled{background-color:var(--google-grey-500)}.state-idle{background-color:var(--google-yellow-300)}.state-active{background-color:var(--google-blue-300)}.state-recording{background-color:var(--google-green-300)}`]);
}