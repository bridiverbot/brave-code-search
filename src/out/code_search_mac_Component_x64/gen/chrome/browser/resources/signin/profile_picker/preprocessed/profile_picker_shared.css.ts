import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getProfilePickerSharedChromium} from './profile_picker_shared-chromium.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getProfilePickerSharedChromium()], css`cr-button.plain{--leo-button-color:transparent}`]);
}