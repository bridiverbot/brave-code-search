import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared site-settings-shared"></style>
<settings-subpage page-title="$i18n{siteSettingsFileSystemWrite}"
    search-label="$i18n{siteSettingsAllSitesFilter}"
    search-icon="settings20:filter-list"
    search-term="{{searchTerm}}" route-path$="[[routePath]]">
  <div class="content-settings-header secondary">
    $i18n{siteSettingsFileSystemWriteDescription}
  </div>
  <settings-category-default-radio-group
      category="[[contentSettingsTypesEnum_.FILE_SYSTEM_WRITE]]"
      ask-option-label="$i18n{siteSettingsFileSystemWriteAsk}"
      ask-option-icon="privacy:file-save"
      block-option-label="$i18n{siteSettingsFileSystemWriteBlocked}"
      block-option-icon="privacy:file-save-off">
  </settings-category-default-radio-group>
  <category-setting-exceptions
      category="[[contentSettingsTypesEnum_.FILE_SYSTEM_WRITE]]"
      read-only-list
      block-header="$i18n{siteSettingsFileSystemWriteBlockedExceptions}"
      search-filter="[[searchTerm]]">
  </category-setting-exceptions>
  <template is="dom-if" if="[[enablePersistentPermissions_]]">
    <file-system-site-list></file-system-site-list>
  </template>
</settings-subpage>
<!--_html_template_end_-->`;
}
