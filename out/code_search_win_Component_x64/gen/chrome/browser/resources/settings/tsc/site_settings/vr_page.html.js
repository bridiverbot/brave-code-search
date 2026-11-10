import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared site-settings-shared"></style>
<settings-subpage page-title="$i18n{siteSettingsVr}"
    search-label="$i18n{siteSettingsAllSitesSearch}"
    search-term="{{searchTerm}}" route-path$="[[routePath]]">
  <div class="content-settings-header secondary">
    $i18n{siteSettingsVrDescription}
  </div>
  <settings-category-default-radio-group
      category="[[contentSettingsTypesEnum_.VR]]"
      ask-option-label="$i18n{siteSettingsVrAsk}"
      ask-option-icon="privacy:cardboard"
      block-option-label="$i18n{siteSettingsVrBlocked}"
      block-option-icon="privacy:cardboard-off">
  </settings-category-default-radio-group>
  <category-setting-exceptions
      category="[[contentSettingsTypesEnum_.VR]]"
      read-only-list
      allow-header="$i18n{siteSettingsVrAllowedExceptions}"
      block-header="$i18n{siteSettingsVrBlockedExceptions}"
      search-filter="[[searchTerm]]">
  </category-setting-exceptions>
</settings-subpage>
<!--_html_template_end_-->`;
}
