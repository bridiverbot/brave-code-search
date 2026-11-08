import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared site-settings-shared"></style>
<settings-subpage page-title="$i18n{siteSettingsCategoryJavascript}"
    search-label="$i18n{siteSettingsAllSitesFilter}"
    search-icon="settings20:filter-list"
    search-term="{{searchTerm}}" route-path$="[[routePath]]">
  <div class="content-settings-header secondary">
    $i18n{siteSettingsJavascriptDescription}
  </div>
  <settings-category-default-radio-group
      category="[[contentSettingsTypesEnum_.JAVASCRIPT]]"
      allow-option-label="$i18n{siteSettingsJavascriptAllowed}"
      allow-option-icon="privacy:code"
      block-option-label="$i18n{siteSettingsJavascriptBlocked}"
      block-option-icon="privacy:code-off">
  </settings-category-default-radio-group>
  <category-setting-exceptions
      category="[[contentSettingsTypesEnum_.JAVASCRIPT]]"
      allow-header="$i18n{siteSettingsJavascriptAllowedExceptions}"
      block-header="$i18n{siteSettingsJavascriptBlockedExceptions}"
      search-filter="[[searchTerm]]">
  </category-setting-exceptions>
</settings-subpage>
<!--_html_template_end_-->`;
}
