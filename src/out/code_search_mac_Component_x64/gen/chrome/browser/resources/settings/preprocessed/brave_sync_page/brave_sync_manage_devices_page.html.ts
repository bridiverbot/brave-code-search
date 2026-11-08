import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style include="settings-shared"></style>
<settings-section
  page-title="$i18n{braveSync}">
  <cr-link-row
    id="brave-sync-setup"
    label$="[[label]]"
    on-click="onSyncTap_"
    role-description="$i18n{subpageArrowRoleDescription}">
  </cr-link-row>
</settings-section>
<!--_html_template_end_-->`;
}