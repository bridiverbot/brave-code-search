// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { html } from '//resources/lit/v3_0/lit.rollup.js';
export function getHtml() {
    return html `<!--_html_template_start_-->
<cr-icon-button id="button" class="iph-visual-target"
    iron-icon="webui-toolbar:speed" @click="${this.onClick_}"
    @pointerdown="${this.highlightTracker.onPointerdown}"
    title="${this.getTooltip_()}" aria-label="${this.getLabel_()}"
    suppress-rtl-flip>
</cr-icon-button>
<!--_html_template_end_-->`;
}
