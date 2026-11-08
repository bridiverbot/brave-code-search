import {html} from '//resources/lit/v3_0/lit.rollup.js';

import type {SettingsA11yPageIndexElement} from './a11y_page_index.js';

export function getHtml(this: SettingsA11yPageIndexElement) {
  // clang-format off
  return html`<!--_html_template_start_-->
<cr-view-manager id="viewManager" class="cr-centered-card-container" ?show-all="${this.shouldShowAll}">
  <settings-a11y-page slot="view" id="parent" route-path="${this.routes_.ACCESSIBILITY.path}">
  </settings-a11y-page>


  

</cr-view-manager>
<!--_html_template_end_-->`;
  // clang-format on
}
