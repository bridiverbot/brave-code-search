// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import { html } from '//resources/lit/v3_0/lit.rollup.js';
export function getHtml() {
    return html `
<leo-button id="button" kind="outline" size="${this.size}">
  <slot slot="icon-before" name="prefix-icon"></slot>
  <slot></slot>
  <slot slot="icon-after" name="suffix-icon"></slot>
</leo-button>`;
}
