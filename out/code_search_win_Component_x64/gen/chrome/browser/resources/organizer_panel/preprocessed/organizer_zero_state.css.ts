import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{display:block}.zero-state-text{color:var(--color-organizer-panel-foreground-subtle,var(--cr-secondary-text-color));font-size:12px;margin:8px 16px}`]);
}