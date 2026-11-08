import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{display:flex;min-width:0;width:100%}.title-parts{align-items:center;display:flex;min-width:0;width:100%}.title-part{color:var(--color-organizer-panel-foreground,var(--cr-primary-text-color));flex:1;font-family:inherit;font-size:12px;font-weight:500;max-width:fit-content;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.separator{color:var(--color-organizer-panel-foreground,var(--cr-primary-text-color));flex-shrink:0;font-size:12px;font-weight:500;margin-inline:4px}`]);
}