// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_toast/cr_toast.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
// 
import { getCss } from './language_toast.css.js';
import { getHtml } from './language_toast.html.js';
import { NotificationType } from './voice_language_conversions.js';
const toastDurationMs = 10000;
const LanguageToastElementBase = WebUiListenerMixinLit(I18nMixinLit(CrLitElement));
export class LanguageToastElement extends LanguageToastElementBase {
    static get is() {
        return 'language-toast';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            toastTitle_: { type: String },
            toastMessage_: { type: String },
            showErrors: { type: Boolean },
            numAvailableVoices: { type: Number },
            toastDuration_: { type: Number },
        };
    }
    notifications_ = new Map();
    #toastDuration__accessor_storage = toastDurationMs;
    get toastDuration_() { return this.#toastDuration__accessor_storage; }
    set toastDuration_(value) { this.#toastDuration__accessor_storage = value; }
    #toastTitle__accessor_storage = '';
    get toastTitle_() { return this.#toastTitle__accessor_storage; }
    set toastTitle_(value) { this.#toastTitle__accessor_storage = value; }
    #toastMessage__accessor_storage = '';
    get toastMessage_() { return this.#toastMessage__accessor_storage; }
    set toastMessage_(value) { this.#toastMessage__accessor_storage = value; }
    #showErrors_accessor_storage = false;
    // Some parent components don't want certain error notifications shown (e.g.
    // the language menu), so we let the parent control whether errors are shown
    // via data binding.
    get showErrors() { return this.#showErrors_accessor_storage; }
    set showErrors(value) { this.#showErrors_accessor_storage = value; }
    #numAvailableVoices_accessor_storage = 0;
    get numAvailableVoices() { return this.#numAvailableVoices_accessor_storage; }
    set numAvailableVoices(value) { this.#numAvailableVoices_accessor_storage = value; }
    notify(type, language) {
        // 
        if (language) {
            this.notifications_.set(language, type);
        }
        switch (type) {
            case NotificationType.GOOGLE_VOICES_UNAVAILABLE:
                this.setErrorTitle_('readingModeLanguageMenuVoicesUnavailable');
                break;
            case NotificationType.NO_INTERNET:
                // Only show a toast if there are no voices at all.
                if (!this.showErrors || this.numAvailableVoices > 0) {
                    return;
                }
                this.setErrorTitle_('cantUseReadAloud');
                break;
            case NotificationType.NO_SPACE:
                // Only show a toast if there are no voices at all.
                if (!this.showErrors || this.numAvailableVoices > 0) {
                    return;
                }
                this.setErrorTitle_('allocationErrorNoVoices');
                break;
            case NotificationType.NO_SPACE_HQ:
                if (!this.showErrors) {
                    return;
                }
                this.setErrorTitle_('allocationErrorHighQuality');
                break;
            case NotificationType.DOWNLOADED:
                // 
                return;
            default:
                return;
        }
        this.show_();
    }
    setErrorTitle_(message) {
        this.toastTitle_ = loadTimeData.getString(message);
        this.toastMessage_ = '';
    }
    show_() {
        const toast = this.$.toast;
        if (toast.open) {
            toast.hide();
        }
        toast.show();
    }
}
customElements.define(LanguageToastElement.is, LanguageToastElement);
