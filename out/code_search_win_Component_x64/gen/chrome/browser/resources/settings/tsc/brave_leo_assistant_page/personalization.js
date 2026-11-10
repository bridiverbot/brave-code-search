/* Copyright (c) 2025 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { assert } from 'chrome://resources/js/assert.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import '/shared/settings/md_select.css.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { PrefServiceObserverMixin } from '/shared/settings/prefs2/pref_service_observer_mixin.js';
import { BaseMixin } from '../base_mixin.js';
import { SettingsToggleButtonElement } from '../controls/settings_toggle_button.js';
import { Router } from '../router.js';
import { loadTimeData } from '../i18n_setup.js';
import { BraveLeoAssistantBrowserProxyImpl, PremiumStatus, } from './brave_leo_assistant_browser_proxy.js';
import './customization_subpage.js';
import './model_selector.js';
import { getTemplate } from './personalization.html.js';
import { SettingsViewMixin } from '../settings_page/settings_view_mixin.js';
const BraveLeoPersonalizationBase = PrefServiceObserverMixin(I18nMixin(BaseMixin(SettingsViewMixin(PolymerElement))));
class BraveLeoPersonalization extends BraveLeoPersonalizationBase {
    static get is() {
        return 'brave-leo-personalization';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            isPremiumUser_: {
                type: Boolean,
                value: false,
                computed: 'computeIsPremiumUser_(premiumStatus_)'
            },
            defaultModelKeyPrefValue_: String,
            tabOrganizationEnabledPref_: Object,
            tabOrganizationModelKeyPref_: Object,
            models_: {
                type: Array,
            },
            isHistoryFeatureEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('isLeoAssistantHistoryAllowed')
            },
            isTabOrganizationFeatureEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('isTabOrganizationFeatureEnabled')
            },
        };
    }
    premiumStatus_ = PremiumStatus.Unknown;
    browserProxy_ = BraveLeoAssistantBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPrefs({
            'brave.ai_chat.tab_organization_enabled': 'tabOrganizationEnabledPref_',
            'brave.ai_chat.tab_organization_model_key': 'tabOrganizationModelKeyPref_',
        });
    }
    ready() {
        super.ready();
        this.updateCurrentPremiumStatus();
        this.fetchModelsWithSubtitles_();
        this.browserProxy_.getSettingsHelper().getDefaultModelKey()
            .then((value) => {
            this.defaultModelKeyPrefValue_ = value.key;
        });
        this.browserProxy_
            .getCallbackRouter()
            .onDefaultModelChanged.addListener((newKey) => {
            this.defaultModelKeyPrefValue_ = newKey;
        });
        // To avoid having a seperate event for modelWithSubtitles changing,
        // we can listen to the modelListChanged event.
        this.browserProxy_
            .getCallbackRouter()
            .onModelListChanged.addListener(() => {
            this.fetchModelsWithSubtitles_();
        });
        // Since there is no server-side event for premium status changing,
        // we should check often. And since purchase or login is performed
        // in a separate WebContents, we can check when focus is returned
        // here.
        window.addEventListener('focus', () => {
            this.updateCurrentPremiumStatus();
        });
    }
    getAssociatedControlFor(childViewId) {
        switch (childViewId) {
            case 'customization':
                return this.shadowRoot.querySelector('#manageCustomization');
            default:
                throw new Error(`Unknown child view id: ${childViewId}`);
        }
    }
    fetchModelsWithSubtitles_() {
        this.browserProxy_.getSettingsHelper().getModelsWithSubtitles()
            .then((value) => {
            this.models_ = value.models;
        });
    }
    onModelSelectionChange_(e) {
        this.browserProxy_.getSettingsHelper().setDefaultModelKey(e.detail.value);
    }
    updateCurrentPremiumStatus() {
        this.browserProxy_.getSettingsHelper().getPremiumStatus()
            .then((value) => {
            this.premiumStatus_ = value.status;
        });
    }
    computeIsPremiumUser_() {
        if (this.premiumStatus_ === PremiumStatus.Active ||
            this.premiumStatus_ === PremiumStatus.ActiveDisconnected) {
            return true;
        }
        return false;
    }
    onStorageEnabledChange_(event) {
        const target = event.target;
        assert(target instanceof SettingsToggleButtonElement);
        // Confirm that the user knows conversation history will be permanently
        // deleted.
        if (!target?.checked) {
            if (!confirm(this.i18n('braveLeoAssistantHistoryPreferenceConfirm'))) {
                target.checked = !target.checked;
            }
        }
    }
    openCustomizationPage_() {
        const router = Router.getInstance();
        router.navigateTo(router.getRoutes().BRAVE_LEO_CUSTOMIZATION);
    }
    onTabOrganizationModelChange_(e) {
        PrefService.getInstance().setPrefValue('brave.ai_chat.tab_organization_model_key', e.detail.value);
    }
    isTabOrganizationDropdownVisible_(featureEnabled, prefEnabled) {
        return featureEnabled && prefEnabled;
    }
}
customElements.define(BraveLeoPersonalization.is, BraveLeoPersonalization);
