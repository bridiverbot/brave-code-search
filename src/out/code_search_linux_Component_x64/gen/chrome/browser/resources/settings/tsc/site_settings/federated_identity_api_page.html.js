import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared site-settings-shared"></style>
<settings-subpage
    page-title="$i18n{siteSettingsCategoryFederatedIdentityApi}"
    search-label="$i18n{siteSettingsAllSitesFilter}"
    search-icon="settings20:filter-list"
    search-term="{{searchTerm}}" route-path$="[[routePath]]">
  <div class="content-settings-header secondary">
    $i18n{siteSettingsFederatedIdentityApiDescription}
  </div>
  <settings-category-default-radio-group
      category="[[contentSettingsTypesEnum_.FEDERATED_IDENTITY_API]]"
      allow-option-label="$i18n{siteSettingsFederatedIdentityApiAllowed}"
      allow-option-icon="privacy:account-circle"
      block-option-label="$i18n{siteSettingsFederatedIdentityApiBlocked}"
      block-option-icon="privacy:account-circle-off">
  </settings-category-default-radio-group>
  <category-setting-exceptions
      category="[[contentSettingsTypesEnum_.FEDERATED_IDENTITY_API]]"
      allow-header="$i18n{siteSettingsFederatedIdentityApiAllowedExceptions}"
      block-header="$i18n{siteSettingsFederatedIdentityApiBlockedExceptions}"
      search-filter="[[searchTerm]]">
  </category-setting-exceptions>
</settings-subpage>
<!--_html_template_end_-->`;
}
