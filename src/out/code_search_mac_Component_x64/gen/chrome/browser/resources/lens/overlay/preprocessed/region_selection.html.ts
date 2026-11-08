import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style>#highlightImgContainer{display:none}#regionSelectionCanvas{background:transparent;left:0;position:absolute;top:0}:host([border-glow-enabled]) #regionSelectionCanvas{opacity:0;transition:opacity 166ms cubic-bezier(0.3,0,1,1)}:host([skip-scrim-transition]) #regionSelectionCanvas{transition:none}:host([border-glow-enabled][is-selecting]:not([multi-region-selection-enabled])) #regionSelectionCanvas{background:rgba(0,0,0,0.3);opacity:1}:host([multi-region-selection-enabled][is-selecting]) #regionSelectionCanvas{background:rgba(0,0,0,0.1);opacity:1}:host([border-glow-enabled][has-selected]) #regionSelectionCanvas{background:rgba(0,0,0,0.1);opacity:1}#keyboardSelection{inset:0px;pointer-events:none;position:absolute;z-index:6}#keyboardSelection:focus-visible{outline:3px solid var(--cr-focus-outline-color);outline-offset:-3px}:host(:not([display-keyboard-selection])) #keyboardSelection{display:none}</style>
<canvas
  id="regionSelectionCanvas"
  height="[[canvasPhysicalHeight]]"
  width="[[canvasPhysicalWidth]]"
  style$="height: [[canvasHeight]]px; width: [[canvasWidth]]px;"
></canvas>
<!-- Provides image source for canvas; element is not displayed. -->
<div id="highlightImgContainer">
  <canvas id="highlightImgCanvas"></canvas>
</div>
<div on-keyup="onKeyboardSelection"
  id="keyboardSelection" tabindex="0" role="button"
  aria-label="$i18n{searchScreenshot}"></div>
<!--_html_template_end_-->`;
}