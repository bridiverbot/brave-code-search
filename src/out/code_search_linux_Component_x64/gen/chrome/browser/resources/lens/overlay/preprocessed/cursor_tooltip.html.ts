import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style>#cursorTooltip{background-color:rgba(var(--color-scrim-rgb),.8);border-radius:8px;left:var(--offset-left);padding:6px 12px;pointer-events:none;position:absolute;transform:translateX(-50%);transition:opacity 200ms ease-out;top:var(--offset-top)}#cursorTooltipContainer.hidden{visibility:hidden}.tooltip-text{color:var(--color-overlay-button-label);font-size:12px;line-height:20px;vertical-align:middle}</style>
<div id="cursorTooltipContainer"
    class$="[[getHiddenCursorClass(currentTooltip, isPointerInsideViewport,
            canShowTooltipFromPrefs, forceTooltipHidden)]]">
  <div id="cursorTooltip">
    <span class="tooltip-text">[[tooltipMessage]]</span>
  </div>
</div>
<!--_html_template_end_-->`;
}