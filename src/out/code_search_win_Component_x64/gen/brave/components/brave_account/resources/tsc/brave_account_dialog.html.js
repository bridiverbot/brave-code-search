/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import { html, nothing } from '//resources/lit/v3_0/lit.rollup.js';
export function getHtml() {
    return html `<!--_html_template_start_-->
    <div class="header">
      <div class="navigation-buttons">
        
          ${this.showBackButton
        ? html `<leo-button
                kind="plain-faint"
                size="tiny"
                @click=${() => this.fire('back-button-clicked')}
              >
                <leo-icon name="arrow-left"></leo-icon>
              </leo-button>`
        : nothing}
          <leo-button
            kind="plain-faint"
            size="tiny"
            @click=${() => this.fire('close-dialog')}
          >
            <leo-icon name="close"></leo-icon>
          </leo-button>
        
      </div>
      <div class="logo"></div>
    </div>
    <div class="body">
      <div class="title-and-description">
        <div class="title">${this.dialogTitle}</div>
        <div class="description">${this.dialogDescription}</div>
      </div>
      <slot name="inputs"></slot>
      <div class="action-buttons">
        <slot name="buttons"></slot>
        
      </div>
    </div>
    ${this.isFooterSlotted ? html `<div class="divider"></div>` : nothing}
    <slot name="footer"></slot>
    <!--_html_template_end_-->`;
}
