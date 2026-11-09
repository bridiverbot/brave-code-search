// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-anti-abuse-page' is the settings page containing anti-abuse
 * settings.
 */
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../controls/settings_toggle_button.js';
import '../settings_page/settings_subpage.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getSettingsColumnedSectionCss } from '../settings_columned_section_lit.css.js';
import { SettingsViewMixinLit } from '../settings_page/settings_view_mixin_lit.js';
import { getCss as getSettingsSharedCss } from '../settings_shared_lit.css.js';
import { ContentSetting, ContentSettingsTypes } from '../site_settings/constants.js';
import { DefaultSettingSource } from '../site_settings/site_settings_browser_proxy.js';
import { SiteSettingsMixinLit } from '../site_settings/site_settings_mixin_lit.js';
import { isSettingEnabled } from '../site_settings/site_settings_util.js';
import { getHtml } from './anti_abuse_page.html.js';
const ANTI_ABUSE_PREF_KEY = 'synthetic.settings.site_settings.anti_abuse';
const AntiAbuseElementBase = SettingsViewMixinLit(SiteSettingsMixinLit(WebUiListenerMixinLit(CrLitElement)));
export class SettingsAntiAbusePageElement extends AntiAbuseElementBase {
    static get is() {
        return 'settings-anti-abuse-page';
    }
    static get styles() {
        return [
            getSettingsSharedCss(),
            getSettingsColumnedSectionCss(),
        ];
    }
    render() {
        return getHtml.bind(this)();
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('contentSettingCategoryChanged', (category) => this.onCategoryChanged_(category));
        this.updateToggleValue_();
    }
    onCategoryChanged_(category) {
        if (category !== ContentSettingsTypes.ANTI_ABUSE) {
            return;
        }
        this.updateToggleValue_();
    }
    async updateToggleValue_() {
        const [defaultValue] = await Promise.all([
            this.browserProxy.getDefaultValueForContentType(ContentSettingsTypes.ANTI_ABUSE),
            PrefService.getInstance().whenInitialized(),
        ]);
        const pref = {
            key: ANTI_ABUSE_PREF_KEY,
            type: chrome.settingsPrivate.PrefType.BOOLEAN,
            value: isSettingEnabled(defaultValue.setting),
        };
        if (defaultValue.source !== undefined &&
            defaultValue.source !== DefaultSettingSource.PREFERENCE) {
            pref.enforcement = chrome.settingsPrivate.Enforcement.ENFORCED;
            let controlledBy = chrome.settingsPrivate.ControlledBy.USER_POLICY;
            switch (defaultValue.source) {
                case DefaultSettingSource.POLICY:
                    controlledBy = chrome.settingsPrivate.ControlledBy.DEVICE_POLICY;
                    break;
                case DefaultSettingSource.SUPERVISED_USER:
                    controlledBy = chrome.settingsPrivate.ControlledBy.PARENT;
                    break;
                case DefaultSettingSource.EXTENSION:
                    controlledBy = chrome.settingsPrivate.ControlledBy.EXTENSION;
                    break;
                default:
                    break;
            }
            pref.controlledBy = controlledBy;
        }
        PrefService.getInstance().setSyntheticPref(pref);
    }
    /**
     * A handler for changing the default permission value for the anti-abuse
     * content type.
     */
    onSettingsBooleanControlChange_() {
        this.browserProxy.setDefaultValueForContentType(ContentSettingsTypes.ANTI_ABUSE, this.$.toggleButton.checked ? ContentSetting.ALLOW :
            ContentSetting.BLOCK);
    }
    // SettingsViewMixinLit implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
}
customElements.define(SettingsAntiAbusePageElement.is, SettingsAntiAbusePageElement);
