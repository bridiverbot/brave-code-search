import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrHiddenStyleLit} from '//resources/cr_elements/cr_hidden_style_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrHiddenStyleLit()], css`:host{display:block}.divider{background-color:var(--organizer-divider-color,var(--color-organizer-panel-divider,var(--color-sys-divider,var(--cr-fallback-color-divider))));display:none;height:1px;margin:8px}organizer-list-section:not([hidden])~.divider:has(+organizer-list-section:not([hidden])){display:block}`]);
}