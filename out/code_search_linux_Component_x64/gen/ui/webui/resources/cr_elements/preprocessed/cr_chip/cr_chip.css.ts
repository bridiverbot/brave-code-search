import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrChipChromium} from './cr_chip-chromium.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrChipChromium()], css`button{padding-inline:var(--cr-chip-padding-inline,revert)}button[selected]{padding-inline:var(--cr-chip-padding-inline,revert)}`]);
}