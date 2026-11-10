// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{html}from"//resources/lit/v3_0/lit.rollup.js";export function getHtml(){return html`<!--_html_template_start_-->
<button class="new-folder-row" ?disabled="${this.disabled}"
    ?compact="${this.compact}" aria-label="$i18n{createNewFolderA11yLabel}">
  <div class="new-folder-icon-container">
    <cr-icon icon="cr:add"></cr-icon>
  </div>
  $i18n{tooltipNewFolder}
</button>
<!--_html_template_end_-->`}