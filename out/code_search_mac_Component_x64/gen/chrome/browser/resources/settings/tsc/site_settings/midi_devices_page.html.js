import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared site-settings-shared"></style>
<settings-subpage page-title="$i18n{siteSettingsMidiDevices}"
    search-label="$i18n{siteSettingsAllSitesFilter}"
    search-icon="settings20:filter-list"
    search-term="{{searchTerm}}" route-path$="[[routePath]]">
  <div class="content-settings-header secondary">
    $i18n{siteSettingsMidiDescription}
  </div>
  <settings-category-default-radio-group
      category="[[contentSettingsTypesEnum_.MIDI_DEVICES]]"
      ask-option-label="$i18n{siteSettingsMidiAsk}"
      ask-option-icon="privacy:piano"
      block-option-label="$i18n{siteSettingsMidiBlocked}"
      block-option-icon="privacy:piano-off">
  </settings-category-default-radio-group>
  <category-setting-exceptions
      category="[[contentSettingsTypesEnum_.MIDI_DEVICES]]"
      read-only-list
      allow-header="$i18n{siteSettingsMidiAllowedExceptions}"
      block-header="$i18n{siteSettingsMidiBlockedExceptions}"
      search-filter="[[searchTerm]]">
  </category-setting-exceptions>
</settings-subpage>
<!--_html_template_end_-->`;
}
