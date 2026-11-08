import { html } from '//resources/lit/v3_0/lit.rollup.js';
export function getHtml() {
    return html `<!--_html_template_start_-->
<div ?hidden="${this.app.hideWindowMode}">
    <div class="permission-section-header">
      <div class="header-text">$i18n{appManagementOpenModeLabel}</div>
    </div>
    <div class="permission-list indented-permission-block">
      ${this.windowModes.map(mode => html `<leo-radiobutton class="subpermission-row" name="window-mode" @change="${this.onChange}" value="${mode.value}" currentvalue="${this.app.windowMode}">
        ${mode.label}
      </leo-radiobutton>`)}
    </div>
  </div>
<!--_html_template_end_-->`;
}
