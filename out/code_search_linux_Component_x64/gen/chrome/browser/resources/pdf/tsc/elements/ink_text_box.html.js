// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { html } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export function getHtml() {
    return html `<!--_html_template_start_-->
<div class="textbox-wrapper">
  <textarea id="textbox" .value="${this.textValue_}" rows="1"
      @input="${this.onTextValueInput_}">
  </textarea>
  <div class="handle top left"></div>
  <div class="handle top center"></div>
  <div class="handle top right"></div>
  <div class="handle left center"></div>
  <div class="handle right center"></div>
  <div class="handle bottom left"></div>
  <div class="handle bottom center"></div>
  <div class="handle bottom right"></div>
</div>
<!--_html_template_end_-->`;
}
