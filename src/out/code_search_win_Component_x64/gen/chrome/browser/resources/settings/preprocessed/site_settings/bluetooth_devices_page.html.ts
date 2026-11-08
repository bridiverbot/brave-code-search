import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style include="settings-shared site-settings-shared"></style>
<settings-subpage page-title="$i18n{siteSettingsBluetoothDevices}"
    learn-more-url="$i18n{bluetoothAdapterOffHelpURL}"
    route-path$="[[routePath]]">
  <div class="content-settings-header secondary">
    $i18n{siteSettingsBluetoothDevicesDescription}
  </div>
  <settings-category-default-radio-group
      category="[[contentSettingsTypesEnum_.BLUETOOTH_DEVICES]]"
      ask-option-label="$i18n{siteSettingsBluetoothDevicesAsk}"
      ask-option-icon="settings:bluetooth"
      block-option-label="$i18n{siteSettingsBluetoothDevicesBlocked}"
      block-option-icon="settings:bluetooth-disabled">
  </settings-category-default-radio-group>
  <chooser-exception-list
      category="[[contentSettingsTypesEnum_.BLUETOOTH_DEVICES]]"
      chooser-type="[[chooserTypeEnum_.BLUETOOTH_DEVICES]]">
  </chooser-exception-list>
</settings-subpage>
<!--_html_template_end_-->`;
}