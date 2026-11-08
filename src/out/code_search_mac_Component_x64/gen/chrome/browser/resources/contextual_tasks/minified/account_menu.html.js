// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{html}from"//resources/lit/v3_0/lit.rollup.js";export function getHtml(){return html`<!--_html_template_start_-->
    <cr-action-menu id="menu">
      <div id="accountInfo">${this.getAccountLabel_()}</div>
      <button id="manageAccountButton" class="dropdown-item"
          @click="${this.onManageAccountClick_}">
        $i18n{accountMenuManageAccount}
      </button>
      <button id="signOutButton" class="dropdown-item"
          @click="${this.onSignOutClick_}">
        $i18n{accountMenuSignOut}
      </button>
    </cr-action-menu>
  <!--_html_template_end_-->`}