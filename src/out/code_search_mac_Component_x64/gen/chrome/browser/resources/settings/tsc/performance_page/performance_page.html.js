import { html } from '//resources/lit/v3_0/lit.rollup.js';
export function getHtml() {
    return html `<!--_html_template_start_--><settings-section ?show-send-feedback-button="${this.showSendFeedbackButton_()}" @send-feedback="${this.onSendFeedback_}" page-title="$i18n{generalPageTitle}">
  <settings-toggle-button id="performanceInterventionToggleButton" @change="${this.onPerformanceInterventionToggleButtonChange_}" pref-key="performance_tuning.intervention_notification.enabled" label="$i18n{performanceInterventionEnabledLabel}" sub-label-with-link="$i18n{performanceInterventionEnabledDescription}" @sub-label-link-clicked="${this.onPerformanceInterventionSubLabelLinkClicked_}">
  </settings-toggle-button>
  
  <cr-link-row label="$i18n{tabHoverPreviewCardLinkTitle}" sub-label="$i18n{tabHoverPreviewCardLinkSubtitle}" @click="${this.onTabHoverPreviewCardLinkClick_}" external="">
  </cr-link-row>
  <tab-discard-exception-list id="exceptionList">
  </tab-discard-exception-list>
</settings-section>
<!--_html_template_end_-->`;
}
