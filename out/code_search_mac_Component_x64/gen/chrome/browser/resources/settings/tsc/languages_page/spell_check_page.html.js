// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { html } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export function getHtml() {
    return html `<!--_html_template_start_-->
<settings-section page-title="$i18n{spellCheckTitle}">
  <settings-toggle-button id="enableSpellcheckingToggle"
      label="$i18n{offerToEnableSpellCheck}"
      .subLabel="${this.getSpellCheckSubLabel_()}"
      pref-key="browser.enable_spellchecking"
      ?disabled="${this.isSpellCheckToggleDisabled_()}"
      @settings-boolean-control-change="${this.onEnableSpellcheckingToggleSettingsBooleanControlChange_}">
  </settings-toggle-button>
 <!-- _google_chrome or not is_macosx -->
</settings-section>
<!--_html_template_end_-->`;
}
