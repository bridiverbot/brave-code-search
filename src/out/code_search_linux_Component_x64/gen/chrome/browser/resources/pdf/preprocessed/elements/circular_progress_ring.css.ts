import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{display:contents}#progressRing{width:28px;height:28px;position:absolute;transform:rotate(-90deg)}#innerProgress,#progressTrack{r:90;cx:100;cy:100;fill:transparent;stroke-width:16px}#progressTrack{stroke:rgb(117,117,117);@media (prefers-color-scheme:dark){stroke:var(--cr-fallback-color-neutral-outline)}}#innerProgress{stroke-linecap:round;stroke-dasharray:565.48px;stroke:var(--cr-fallback-color-inverse-primary);@media (prefers-color-scheme:dark){stroke:var(--cr-fallback-color-primary)}}`]);
}