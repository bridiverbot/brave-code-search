// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{html}from"//resources/lit/v3_0/lit.rollup.js";export function getHtml(){return html`
<!--_html_template_start_-->
<dialog id="dialog" @close="${this.onClose}" @cancel="${this.onCancel}"
    @pointerdown="${this.onPointerdown}">
  <slot></slot>
</dialog>
<!--_html_template_end_-->`}