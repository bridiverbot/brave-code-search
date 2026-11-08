import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared site-settings-shared"></style>
<settings-subpage
    page-title="$i18n{siteSettingsCategoryInsecureContent}"
    search-label="$i18n{siteSettingsAllSitesFilter}"
    search-icon="settings20:filter-list"
    search-term="{{searchTerm}}" route-path$="[[routePath]]">
  <div class="content-settings-header secondary">
    $i18n{siteSettingsInsecureContentDescription}
  </div>
  <div class="cr-row first secondary">
    $i18n{siteSettingsInsecureContentBlock}
  </div>
  <category-setting-exceptions
      category="[[contentSettingsTypesEnum_.MIXEDSCRIPT]]"
      allow-header="$i18n{siteSettingsInsecureContentAllowedExceptions}"
      block-header="$i18n{siteSettingsInsecureContentBlockedExceptions}"
      search-filter="[[searchTerm]]">
  </category-setting-exceptions>
</settings-subpage>
<!--_html_template_end_-->`;
}
