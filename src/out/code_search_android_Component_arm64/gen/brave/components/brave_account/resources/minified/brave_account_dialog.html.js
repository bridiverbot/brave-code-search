/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import{html,nothing}from"//resources/lit/v3_0/lit.rollup.js";export function getHtml(){return html`<!--_html_template_start_-->
    <div class="header">
      <div class="navigation-buttons">
        
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
        
          ${this.showBackButton?html`<leo-button
                kind="plain-faint"
                @click=${()=>this.fire("back-button-clicked")}
              >
                $i18n{BRAVE_ACCOUNT_BACK_BUTTON_LABEL}
              </leo-button>`:nothing}
        
      </div>
    </div>
    ${this.isFooterSlotted?html`<div class="divider"></div>`:nothing}
    <slot name="footer"></slot>
    <!--_html_template_end_-->`}