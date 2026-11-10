import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><settings-subpage page-title="[[pageTitle_]]" class="multi-card">
  <settings-section id="signInSection">
    <div id="signInRoot"></div>
    <settings-toggle-button
        class="cr-row"
        icon="email-shield"
        hidden$="[[!showEmailAliasesSettings_]]"
        pref-key="brave.email_aliases.new_alias_autofill_suggestion_enabled"
        label="[[autofillSuggestionToggleLabel_]]">
    </settings-toggle-button>
  </settings-section>
  <settings-section id="manageSection">
  </settings-section>
</settings-subpage>
<!--_html_template_end_-->`;
}
