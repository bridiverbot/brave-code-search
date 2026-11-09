// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { html } from '//resources/lit/v3_0/lit.rollup.js';
// clang-format off
export function getHtml() {
    return html `<!--_html_template_start_-->
  <cr-dialog id="dialog" no-cancel show-on-attach>
    <div slot="title">$i18n{oauthErrorDialogTitle}</div>
    <div slot="body">$i18n{oauthErrorDialogBody}</div>
    <div slot="button-container">
      <cr-button class="action-button" @click="${this.onReloadClick_}">
        $i18n{oauthErrorDialogReloadButton}
      </cr-button>
    </div>
  </cr-dialog>
  <!--_html_template_end_-->`;
}
// clang-format on
