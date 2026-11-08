import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><!-- Copyright (c) 2023 The Brave Authors. All rights reserved.
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this file,
You can obtain one at https://mozilla.org/MPL/2.0/. -->

<style include="cr-shared-style settings-shared md-select"></style>

<settings-section
  id="playlist"
  page-title="$i18n{playlist}">

  <settings-toggle-button
    class="cr-row first"
    pref-key="brave.playlist.enabled"
    label="$i18n{bravePlaylistEnablePlaylistLabel}"
    hidden="[[isPlaylistManaged_(playlistEnabledPref_)]]">
  </settings-toggle-button>
  <template
    is="dom-if"
    if="[[playlistEnabledPref_.value]]">
    <settings-toggle-button
      class="cr-row"
      pref-key="brave.playlist.cache"
      label="$i18n{bravePlaylistCacheByDefaultLabel}"
      sub-label="$i18n{bravePlaylistCacheByDefaultSubLabel}">
    </settings-toggle-button>
  </template> <!-- playlist.enabled.value -->

</settings-section>
<!--_html_template_end_-->`;
}
