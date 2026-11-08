/* Copyright (c) 2026 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import{html}from"//resources/lit/v3_0/lit.rollup.js";export function getHtml(){return html`<!--_html_template_start_-->
    <div class="label">$i18n{BRAVE_ACCOUNT_OTP_INPUT_LABEL}</div>
    <div
      class="otp-inputs"
      @paste=${this.onPaste}
    >
      ${this.indices.map((index=>html`
          <leo-input

            type="text"
            @beforeinput=${e=>this.onBeforeInput(e,index)}
            @focus=${this.onFocus}
            @input=${detail=>this.onInput(detail,index)}
            @keydown=${detail=>this.onKeyDown(detail,index)}
          >
          </leo-input>
        `))}
    </div>
    <!--_html_template_end_-->`}