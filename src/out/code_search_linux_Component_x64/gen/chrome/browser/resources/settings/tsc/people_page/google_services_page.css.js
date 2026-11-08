import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `settings-personalization-options{--settings-signin-choice-padding:0px 20px 10px}`]);
}
