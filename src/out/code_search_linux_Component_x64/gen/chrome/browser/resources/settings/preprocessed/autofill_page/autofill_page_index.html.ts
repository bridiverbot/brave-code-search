import {html} from 'chrome://resources/lit/v3_0/lit.rollup.js';

import type {SettingsAutofillPageIndexElement} from './autofill_page_index.js';

export function getHtml(this: SettingsAutofillPageIndexElement) {
  return html`<!--_html_template_start_-->
<cr-view-manager id="viewManager" class="cr-centered-card-container" ?show-all="${this.shouldShowAll}">

  <settings-autofill-page slot="view" id="parent">
  </settings-autofill-page>

  <settings-contact-info-page slot="view" id="contactInfo" data-parent-view-id="parent" route-path="${this.routes_.CONTACT_INFO.path}">
  </settings-contact-info-page>

  



  <settings-payments-page slot="view" id="payments" data-parent-view-id="parent" route-path="${this.routes_.PAYMENTS.path}">
  </settings-payments-page>

  

  ${this.isShoppingEnabled_ ? html`
    <settings-shopping-page slot="view" id="shopping"
        data-parent-view-id="parent"
        route-path="${this.routes_.SHOPPING.path}">
    </settings-shopping-page>
  ` : ''}

  ${this.showSuggestionsFromGeminiSettings_ ? html`
    <settings-suggestions-from-gemini-page slot="view"
        id="suggestionsFromGemini" data-parent-view-id="parent"
        route-path="${this.routes_.SUGGESTIONS_FROM_GEMINI.path}">
    </settings-suggestions-from-gemini-page>
  ` : ''}

${this.isEmailAliasesEnabled_() ? html`
        <settings-email-aliases-page slot="view" id="email-aliases" data-parent-view-id="parent">
        </settings-email-aliases-page>
      ` : ''}</cr-view-manager>
<!--_html_template_end_-->`;
}
