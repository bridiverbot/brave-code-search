import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared site-settings-shared"></style>
<settings-subpage page-title="$i18n{siteSettingsPaymentHandler}"
    search-label="$i18n{siteSettingsAllSitesFilter}"
    search-icon="settings20:filter-list"
    search-term="{{searchTerm}}" route-path$="[[routePath]]">
  <div class="content-settings-header secondary">
    $i18n{siteSettingsPaymentHandlersDescription}
  </div>
  <settings-category-default-radio-group
      category="[[contentSettingsTypesEnum_.PAYMENT_HANDLER]]"
      allow-option-label=
          "$i18n{siteSettingsPaymentHandlersAllowed}"
      allow-option-icon="privacy:credit-card"
      block-option-label="$i18n{siteSettingsPaymentHandlersBlocked}"
      block-option-icon="privacy:credit-card-off">
  </settings-category-default-radio-group>
  <category-setting-exceptions
      category="[[contentSettingsTypesEnum_.PAYMENT_HANDLER]]"
      allow-header=
          "$i18n{siteSettingsPaymentHandlersAllowedExceptions}"
      block-header=
          "$i18n{siteSettingsPaymentHandlersBlockedExceptions}"
      search-filter="[[searchTerm]]">
  </category-setting-exceptions>
</settings-subpage>
<!--_html_template_end_-->`;
}
