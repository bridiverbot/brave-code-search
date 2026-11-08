import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getToolbarButton} from './toolbar_button.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getToolbarButton()], css`#buttonWrapper{align-items:center;display:flex;height:100%}:host(#back){align-self:stretch;height:auto;justify-content:flex-start;width:auto}:host(#back) #buttonWrapper{box-sizing:content-box;margin-inline-start:var(--toolbar-interior-margin-start,6px);padding-inline-start:0;width:var(--button-width)}:host(#back[window-is-maximized-or-fullscreen]) #buttonWrapper{margin-inline-start:0;padding-inline-start:var(--toolbar-interior-margin-start,6px)}#buttonWrapper:not([disabled]):hover #button{background-color:var(--cr-hover-background-color)}`]);
}