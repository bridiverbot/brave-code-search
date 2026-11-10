// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { html } from '//resources/lit/v3_0/lit.rollup.js';
export function getHtml() {
    // clang-format off
    return html `<!--_html_template_start_-->
<div class="zero-state-text">
  <slot></slot>
</div>
<!--_html_template_end_-->`;
    // clang-format on
}
