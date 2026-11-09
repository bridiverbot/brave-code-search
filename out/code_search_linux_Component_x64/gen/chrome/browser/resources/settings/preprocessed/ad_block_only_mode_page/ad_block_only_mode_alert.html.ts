import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style include="settings-shared">.alert-container{padding-top:var(--leo-spacing-m);padding-bottom:var(--leo-spacing-xl)}.alert-title{font:var(--leo-font-heading-h4)}.alert-content{font:var(--leo-font-default-regular)}</style>

<template is="dom-if" if="[[isAdBlockOnlyModeEnabled_]]">
  <div class="alert-container">
    <leo-alert type="info" hideIcon="true">
      <div class="alert-title">$i18n{adBlockOnlyModeAlertTitle}</div>
      <div class="alert-content">$i18n{adBlockOnlyModeAlertDesc}</div>
      <div slot="actions">
        <leo-button on-click="onTurnOffAdBlockOnlyMode_" class="alert-button">
          $i18n{adBlockOnlyModeAlertTurnOffButton}
        </leo-button>
      </div>
    </leo-alert>
  </div>
</template>
<!--_html_template_end_-->`;
}