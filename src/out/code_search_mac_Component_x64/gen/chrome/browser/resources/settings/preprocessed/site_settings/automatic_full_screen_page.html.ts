import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style include="settings-shared site-settings-shared"></style>
<settings-subpage
    page-title="$i18n{siteSettingsCategoryAutomaticFullscreen}"
    search-label="$i18n{siteSettingsAllSitesFilter}"
    search-icon="settings20:filter-list"
    search-term="{{searchTerm}}" route-path$="[[routePath]]">
  <div class="content-settings-header secondary">
    $i18n{siteSettingsAutomaticFullscreenDescription}
  </div>
  <category-setting-exceptions read-only-list
      category="[[contentSettingsTypesEnum_.AUTOMATIC_FULLSCREEN]]"
      allow-header=
          "$i18n{siteSettingsAutomaticFullscreenAllowedExceptions}"
      block-header=
          "$i18n{siteSettingsAutomaticFullscreenBlockedExceptions}"
          search-filter="[[searchTerm]]">
  </category-setting-exceptions>
</settings-subpage>
<!--_html_template_end_-->`;
}