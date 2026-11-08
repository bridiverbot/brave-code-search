import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`.page-title{font-weight:500;font-size:14px;line-height:20px;margin:0;color:var(--cr-primary-text-color)}.headline{font-weight:500;font-size:18px;line-height:24px;margin:0;color:var(--color-sys-on-surface)}.body-text{font-weight:400;font-size:14px;line-height:20px;color:var(--color-sys-on-surface-subtle);margin:8px}.skill-cards-container{display:grid;grid-template-columns:repeat(auto-fill,var(--skills-card-width));gap:var(--skills-card-gap);padding:var(--skills-card-gap) 0}`]);
}