// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { html } from '//resources/lit/v3_0/lit.rollup.js';
export function getHtml() {
    return html `
<div class="placeholder-message">
  Click "Install" below to select a signed web bundle (.swbn)
  <br>
  via the OS file picker.
</div>`;
}
