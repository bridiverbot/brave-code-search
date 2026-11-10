import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style include="settings-shared site-settings-shared"></style>
<settings-subpage page-title="$i18n{siteSettingsHidDevices}"
    learn-more-url="$i18n{chooserHidOverviewUrl}" route-path$="[[routePath]]">
  <div class="content-settings-header secondary">
    $i18n{siteSettingsHidDevicesDescription}
  </div>
  <settings-category-default-radio-group
      category="[[contentSettingsTypesEnum_.HID_DEVICES]]"
      ask-option-label="$i18n{siteSettingsHidDevicesAsk}"
      ask-option-icon="privacy:videogame-asset"
      block-option-label="$i18n{siteSettingsHidDevicesBlocked}"
      block-option-icon="privacy:videogame-asset-off">
  </settings-category-default-radio-group>
  <chooser-exception-list
      category="[[contentSettingsTypesEnum_.HID_DEVICES]]"
      chooser-type="[[chooserTypeEnum_.HID_DEVICES]]">
  </chooser-exception-list>
</settings-subpage>
<!--_html_template_end_-->`;
}