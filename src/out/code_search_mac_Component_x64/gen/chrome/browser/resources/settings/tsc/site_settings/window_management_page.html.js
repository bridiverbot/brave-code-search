import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared site-settings-shared"></style>
<settings-subpage page-title="$i18n{siteSettingsWindowManagement}"
    search-label="$i18n{siteSettingsAllSitesSearch}"
    search-term="{{searchTerm}}" route-path$="[[routePath]]">
  <div class="content-settings-header secondary">
    $i18n{siteSettingsWindowManagementDescription}
  </div>
  <settings-category-default-radio-group
      category="[[contentSettingsTypesEnum_.WINDOW_MANAGEMENT]]"
      ask-option-label="$i18n{siteSettingsWindowManagementAsk}"
      ask-option-icon="privacy:select-window"
      block-option-label="$i18n{siteSettingsWindowManagementBlocked}"
      block-option-icon="privacy:select-window-off">
  </settings-category-default-radio-group>
  <category-setting-exceptions
      category="[[contentSettingsTypesEnum_.WINDOW_MANAGEMENT]]"
      allow-header="$i18n{siteSettingsWindowManagementAskExceptions}"
      block-header=
          "$i18n{siteSettingsWindowManagementBlockedExceptions}"
      search-filter="[[searchTerm]]">
  </category-setting-exceptions>
</settings-subpage>
<!--_html_template_end_-->`;
}
