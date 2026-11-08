import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSpinnerStyleLit} from 'chrome://resources/cr_elements/cr_spinner_style_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSpinnerStyleLit()], css`:host{--dialog-top-border-size:35px;display:flex;flex-direction:column;height:100%}.signin-frame{background-color:white;height:100%;margin:0;overflow:hidden;padding:0;width:100%}:host,#addAccount.active{align-items:center;display:flex;flex-direction:column;flex-grow:1;justify-content:center}.spinner{--cr-spinner-size:24px}`]);
}