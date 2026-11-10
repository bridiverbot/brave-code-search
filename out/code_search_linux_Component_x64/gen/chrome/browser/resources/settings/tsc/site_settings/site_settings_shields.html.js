import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><!-- Copyright (c) 2025 The Brave Authors. All rights reserved.
     This Source Code Form is subject to the terms of the Mozilla Public
     License, v. 2.0. If a copy of the MPL was not distributed with this file,
     You can obtain one at https://mozilla.org/MPL/2.0/. -->

<settings-subpage page-title="$i18n{siteSettingsShieldsStatus}">
  <category-setting-exceptions id="shieldsExceptions" category="[[contentSettingsTypesEnum_.BRAVE_SHIELDS]]"
    block-header="$i18n{siteSettingsShieldsDown}" allow-header="$i18n{siteSettingsShieldsUp}">
  </category-setting-exceptions>
</settings-subpage>
<!--_html_template_end_-->`;
}
