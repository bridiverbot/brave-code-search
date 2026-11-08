// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './category_setting_exceptions.js';
import './settings_category_default_radio_group.js';
import './site_settings_shared.css.js';
import '../controls/settings_toggle_button.js';
import '../settings_page/settings_subpage.js';
import '../settings_shared.css.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { WebUiListenerMixin } from '/shared/settings/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from '../i18n_setup.js';
import { SettingsViewMixin } from '../settings_page/settings_view_mixin.js';
import { ContentSettingsTypes } from './constants.js';
import { SiteSettingsBrowserProxyImpl } from './site_settings_browser_proxy.js';
import { getTemplate } from './sound_page.html.js';
const BLOCK_AUTOPLAY_PREF_KEY = 'synthetic.settings.site_settings.block_autoplay';
const SoundPageElementBase = SettingsViewMixin(WebUiListenerMixin(PolymerElement));
export class SoundPageElement extends SoundPageElementBase {
    static get is() {
        return 'settings-sound-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            searchTerm: String,
            // Expose ContentSettingsTypes enum to the HTML template.
            contentSettingsTypesEnum_: {
                type: Object,
                value: ContentSettingsTypes,
            },
            blockAutoplayEnabled_: {
                type: Boolean,
                value: false,
            },
            enableBlockAutoplayContentSetting_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableBlockAutoplayContentSetting');
                },
            },
        };
    }
    browserProxy_ = SiteSettingsBrowserProxyImpl.getInstance();
    ready() {
        super.ready();
        this.addWebUiListener('onBlockAutoplayStatusChanged', (status) => this.onBlockAutoplayStatusChanged_(status));
    }
    // Called when the block autoplay status changes.
    onBlockAutoplayStatusChanged_(autoplayStatus) {
        this.blockAutoplayEnabled_ = autoplayStatus.enabled;
        PrefService.getInstance().setSyntheticPref({
            ...autoplayStatus.pref,
            key: BLOCK_AUTOPLAY_PREF_KEY,
            type: chrome.settingsPrivate.PrefType.BOOLEAN,
        });
    }
    // Updates the block autoplay pref when the toggle is changed.
    onBlockAutoplayToggleChange_(event) {
        const target = event.target;
        this.browserProxy_.setBlockAutoplayEnabled(target.checked);
    }
    // SettingsViewMixin implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
}
customElements.define(SoundPageElement.is, SoundPageElement);
