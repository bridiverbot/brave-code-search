// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{html}from"//resources/lit/v3_0/lit.rollup.js";export function getHtml(){return html`<!--_html_template_start_-->
<div id="container" aria-hidden="true">
  <img id="image" src="${this.thumbnailUrl}">
  <div class="overlay">
    ${this.isDeletable?html`
      <cr-icon-button id="remove" class="action-icon icon-clear"
          @click="${this.onRemoveButtonClick_}">
      </cr-icon-button>
    `:""}
  </div>
</div>
<!--_html_template_end_-->`}