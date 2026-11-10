import {html} from '//resources/lit/v3_0/lit.rollup.js';
import type {CrPolicyPrefIndicatorElement} from './cr_policy_pref_indicator.js';

export function getHtml(this: CrPolicyPrefIndicatorElement) {
  return html`<!--_html_template_start_--><cr-tooltip-icon id="tooltipIcon" ?hidden="${!this.getIndicatorVisible_()}"
    tooltip-text="${this.indicatorTooltip}"
    icon-class="${this.getIndicatorIcon_()}"
    icon-aria-label="${this.iconAriaLabel}" exportparts="tooltip">
</cr-tooltip-icon>
<!--_html_template_end_-->`;
}