import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared">cr-view-manager [hidden-by-search],cr-view-manager[show-all] [slot=view][data-parent-view-id]{display:none}cr-view-manager [slot=view]:not(.closing){position:initial}</style>

<cr-view-manager id="viewManager" class="cr-centered-card-container"
  show-all$="[[shouldShowAll]]">

  <settings-brave-default-extensions-page
    id="extensions"
    slot="view"
    in-search-mode="[[inSearchMode_]]">
  </settings-brave-default-extensions-page>

  <brave-extensions-v2-subpage
    id="manageV2Extensions"
    slot="view"
    data-parent-view-id="extensions">
  </brave-extensions-v2-subpage>
</cr-view-manager>
<!--_html_template_end_-->`;
}