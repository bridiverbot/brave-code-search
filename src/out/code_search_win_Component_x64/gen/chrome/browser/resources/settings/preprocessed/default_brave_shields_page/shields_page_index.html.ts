import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style include="settings-shared">cr-view-manager [hidden-by-search],cr-view-manager[show-all] [slot=view][data-parent-view-id]{display:none}cr-view-manager [slot=view]:not(.closing){position:initial}</style>

<cr-view-manager id="viewManager" class="cr-centered-card-container"
    show-all$="[[shouldShowAll]]">
  <settings-default-brave-shields-page slot="view" id="parent">
  </settings-default-brave-shields-page>

  <settings-ad-block-only-mode-page slot="view" id="adBlockOnlyMode">
  </settings-ad-block-only-mode-page>

  <settings-social-blocking-page slot="view" id="socialBlocking">
  </settings-social-blocking-page>

  <adblock-subpage slot="view" id="adblock"
      data-parent-view-id="parent">
  </adblock-subpage>
</cr-view-manager>
<!--_html_template_end_-->`;
}