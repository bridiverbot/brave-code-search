// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { html } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export function getHtml() {
    return html `<!--_html_template_start_-->
    ${this.dataUri ? html `
      <div id="chipRoot" class="chip">
        <img id="cropImage"
            src="${this.dataUri}"
            alt="${this.label_}"
            draggable="false">
        <cr-icon-button id="closeButton"
            iron-icon="cr:close"
            noink
            aria-label="${this.dismissLabel_}"
            title="${this.dismissLabel_}"
            @click="${this.onCloseClick_}">
        </cr-icon-button>
      </div>
    ` : ''}
  <!--_html_template_end_-->`;
}
