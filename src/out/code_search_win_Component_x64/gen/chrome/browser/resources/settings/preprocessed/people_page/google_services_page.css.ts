import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`settings-personalization-options{--settings-signin-choice-padding:0px 20px 10px}`]);
}