import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">cr-view-manager [hidden-by-search],cr-view-manager[show-all] [slot=view][data-parent-view-id]{display:none}cr-view-manager [slot=view]:not(.closing){position:initial}</style>

<cr-view-manager id="viewManager" class="cr-centered-card-container"
    show-all$="[[shouldShowAll]]">
  <brave-settings-getting-started slot="view" id="parent">
  </brave-settings-getting-started>

  <settings-brave-new-tab-page
    slot="view"
    id="newTab"
    in-search-mode="[[inSearchMode_]]">
  </settings-brave-new-tab-page>

  <settings-manage-profile slot="view" id="manageProfile"
      data-parent-view-id="parent">
  </settings-manage-profile>
</cr-view-manager>
<!--_html_template_end_-->`;
}
