import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared site-settings-shared"></style>
<settings-subpage page-title="$i18n{siteSettingsAds}"
    search-label="$i18n{siteSettingsAllSitesFilter}"
    search-icon="settings20:filter-list"
    search-term="{{searchTerm}}" route-path$="[[routePath]]">
  <div class="content-settings-header secondary">
    $i18n{siteSettingsAdsDescription}
  </div>
  <settings-category-default-radio-group
      category="[[contentSettingsTypesEnum_.ADS]]"
      allow-option-label="$i18n{siteSettingsAdsAllowed}"
      allow-option-icon="privacy:web-asset"
      block-option-label="$i18n{siteSettingsAdsBlocked}"
      block-option-icon="privacy:web-asset-off">
  </settings-category-default-radio-group>
  <category-setting-exceptions
      category="[[contentSettingsTypesEnum_.ADS]]"
      read-only-list
      allow-header="$i18n{siteSettingsAdsAllowedExceptions}"
      block-header="$i18n{siteSettingsAdsBlockedExceptions}"
      search-filter="[[searchTerm]]">
  </category-setting-exceptions>
</settings-subpage>
<!--_html_template_end_-->`;
}
