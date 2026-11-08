import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSliderChromium} from './cr_slider-chromium.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSliderChromium()], css`:host{--cr-slider-active-color:var(--leo-color-button-background);--cr-slider-container-color:var(--leo-color-primary-20);--cr-slider-container-disabled-color:color-mix(in srgb,var(--cr-slider-container-color),transparent 40%);--cr-slider-knob-color-rgb:69,81,209}@media (prefers-color-scheme:dark){:host{--cr-slider-knob-color-rgb:193,198,255}}
`]);
}