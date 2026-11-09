// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { html } from '//resources/lit/v3_0/lit.rollup.js';
export function getHtml() {
    return html `
<cr-icon-button id="button" class="iph-visual-target"
    iron-icon="webui-toolbar:battery_saver_refresh_custom"
    aria-label="${this.getLabel_()}" aria-haspopup="dialog"
    title="${this.getTooltip_()}" @click="${this.onClick_}">
</cr-icon-button>`;
}
