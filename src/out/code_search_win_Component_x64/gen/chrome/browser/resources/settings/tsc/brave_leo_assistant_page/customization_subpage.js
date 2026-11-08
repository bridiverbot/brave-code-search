/* Copyright (c) 2025 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PrefServiceObserverMixin } from '/shared/settings/prefs2/pref_service_observer_mixin.js';
import { RouteObserverMixin } from '../router.js';
import { SettingsViewMixin } from '../settings_page/settings_view_mixin.js';
import { CustomizationOperationError } from '../customization_settings.mojom-webui.js';
import { MAX_MEMORY_RECORD_LENGTH } from '../ai_chat.mojom-webui.js';
import { BraveLeoAssistantBrowserProxyImpl } from './brave_leo_assistant_browser_proxy.js';
import { getTemplate } from './customization_subpage.html.js';
import './memory_section.js';
const BraveLeoCustomizationSubpageBase = SettingsViewMixin(PrefServiceObserverMixin(I18nMixin(RouteObserverMixin(PolymerElement))));
class BraveLeoCustomizationSubpage extends BraveLeoCustomizationSubpageBase {
    static get is() {
        return 'leo-customization-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            // Local properties for user input
            nameInput_: {
                type: String,
                value: '',
            },
            jobInput_: {
                type: String,
                value: '',
            },
            toneInput_: {
                type: String,
                value: '',
            },
            otherInput_: {
                type: String,
                value: '',
            },
            changesSaved_: {
                type: Boolean,
                value: false,
            },
            isSaveDisabled_: {
                type: Boolean,
                value: true,
            },
            userCustomizationEnabledPref_: Object,
        };
    }
    browserProxy_ = BraveLeoAssistantBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPref('brave.ai_chat.user_customization_enabled', 'userCustomizationEnabledPref_');
    }
    ready() {
        super.ready();
        this.setupCallbacks_();
        this.loadCustomizations_();
    }
    currentRouteChanged() {
        this.changesSaved_ = false;
        this.setupCallbacks_();
        this.loadCustomizations_();
    }
    setupCallbacks_() {
        const callbackRouter = this.browserProxy_.getCustomizationSettingsCallbackRouter();
        callbackRouter.onCustomizationsChanged.addListener((customizations) => {
            this.updateInputValues_(customizations);
        });
    }
    loadCustomizations_() {
        const handler = this.browserProxy_.getCustomizationSettingsHandler();
        handler.getCustomizations().then((result) => {
            this.updateInputValues_(result.customizations);
        });
    }
    updateInputValues_(customizations) {
        this.nameInput_ = customizations.name;
        this.jobInput_ = customizations.job;
        this.toneInput_ = customizations.tone;
        this.otherInput_ = customizations.other;
    }
    onSave() {
        const handler = this.browserProxy_.getCustomizationSettingsHandler();
        // Reset the value to null if the input is empty string.
        const customizations = {
            name: this.nameInput_,
            job: this.jobInput_,
            tone: this.toneInput_,
            other: this.otherInput_,
        };
        handler.setCustomizations(customizations).then((result) => {
            if (result.error) {
                this.handleCustomizationError_(result.error);
            }
            else {
                this.changesSaved_ = true;
                this.isSaveDisabled_ = true;
            }
        });
    }
    handleCustomizationError_(error) {
        // Handle different error types
        switch (error) {
            // This is unlikely to happen since we have a length limit in frontend
            // for immediate feedback.
            case CustomizationOperationError.kInvalidLength:
                console.error('Customization input exceeds length limit');
                break;
            default:
                console.error('Unknown customization error:', error);
                break;
        }
    }
    isTooLong(text) {
        return text.trim().length > MAX_MEMORY_RECORD_LENGTH;
    }
    handleSaveButtonState_() {
        if (this.changesSaved_) {
            this.changesSaved_ = false;
        }
        this.isSaveDisabled_ = this.computeIsSaveDisabled_(this.nameInput_, this.jobInput_, this.toneInput_, this.otherInput_);
    }
    onNameInputChanged_(event) {
        this.nameInput_ = event.value;
        this.handleSaveButtonState_();
    }
    onJobInputChanged_(event) {
        this.jobInput_ = event.value;
        this.handleSaveButtonState_();
    }
    onToneInputChanged_(event) {
        this.toneInput_ = event.value;
        this.handleSaveButtonState_();
    }
    onOtherInputChanged_(event) {
        this.otherInput_ = event.value;
        this.handleSaveButtonState_();
    }
    computeIsSaveDisabled_(nameInput, jobInput, toneInput, otherInput) {
        return this.isTooLong(nameInput) ||
            this.isTooLong(jobInput) ||
            this.isTooLong(toneInput) ||
            this.isTooLong(otherInput);
    }
    getSaveButtonText_(changesSaved) {
        return changesSaved
            ? this.i18n('braveLeoAssistantCustomizationChangesSaved')
            : this.i18n('braveLeoAssistantCustomizationSaveButton');
    }
}
customElements.define(BraveLeoCustomizationSubpage.is, BraveLeoCustomizationSubpage);
