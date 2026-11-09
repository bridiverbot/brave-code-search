import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style include="settings-shared site-settings-shared"></style>
<settings-subpage page-title="$i18n{siteSettingsAutoPictureInPicture}"
    search-label="$i18n{siteSettingsAllSitesFilter}"
    search-icon="settings20:filter-list"
    search-term="{{searchTerm}}" route-path$="[[routePath]]">
   <div class="content-settings-header secondary">
     $i18n{siteSettingsAutoPictureInPictureDescription}
   </div>
   <!-- This options uses "allowed" language but is implemented as "ask". -->
   <settings-category-default-radio-group
       category="[[contentSettingsTypesEnum_.AUTO_PICTURE_IN_PICTURE]]"
       ask-option-label=
           "$i18n{siteSettingsAutoPictureInPictureAllowed}"
       ask-option-icon="settings:picture-in-picture"
       block-option-label="$i18n{siteSettingsAutoPictureInPictureBlocked}"
       block-option-icon="settings:picture-in-picture-off">
   </settings-category-default-radio-group>
   <category-setting-exceptions
       category="[[contentSettingsTypesEnum_.AUTO_PICTURE_IN_PICTURE]]"
       allow-header=
           "$i18n{siteSettingsAutoPictureInPictureAllowedExceptions}"
       block-header=
           "$i18n{siteSettingsAutoPictureInPictureBlockedExceptions}"
       search-filter="[[searchTerm]]">
   </category-setting-exceptions>
</settings-subpage>
<!--_html_template_end_-->`;
}