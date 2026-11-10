// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar.js';
import 'chrome://resources/cr_elements/policy/cr_tooltip_icon.js';
import './pack_dialog.js';
import { getToastManager } from 'chrome://resources/cr_elements/cr_toast/cr_toast_manager.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { listenOnce } from 'chrome://resources/js/util.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { TOAST_DURATION_MS } from './item_util.js';
import { getCss } from './toolbar.css.js';
import { getHtml } from './toolbar.html.js';
class DummyToolbarDelegate {
    setProfileInDevMode(_inDevMode) { }
    loadUnpacked() {
        return Promise.resolve(true);
    }
    updateAllExtensions(_extensions) {
        return Promise.resolve();
    }
}
const ExtensionsToolbarElementBase = I18nMixinLit(CrLitElement);
export class ExtensionsToolbarElement extends ExtensionsToolbarElementBase {
    static get is() {
        return 'extensions-toolbar';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            extensions: { type: Array },
            delegate: { type: Object },
            inDevMode: {
                type: Boolean,
                reflect: true,
            },
            devModeControlledByPolicy: { type: Boolean },
            isChildAccount: { type: Boolean },
            narrow: {
                type: Boolean,
                notify: true,
            },
            canLoadUnpacked: { type: Boolean },
            expanded_: { type: Boolean },
            showPackDialog_: { type: Boolean },
            /**
             * Prevents initiating update while update is in progress.
             */
            isUpdating_: { type: Boolean },
        };
    }
    #extensions_accessor_storage = [];
    get extensions() { return this.#extensions_accessor_storage; }
    set extensions(value) { this.#extensions_accessor_storage = value; }
    #delegate_accessor_storage = new DummyToolbarDelegate();
    get delegate() { return this.#delegate_accessor_storage; }
    set delegate(value) { this.#delegate_accessor_storage = value; }
    #inDevMode_accessor_storage = false;
    get inDevMode() { return this.#inDevMode_accessor_storage; }
    set inDevMode(value) { this.#inDevMode_accessor_storage = value; }
    #devModeControlledByPolicy_accessor_storage = false;
    get devModeControlledByPolicy() { return this.#devModeControlledByPolicy_accessor_storage; }
    set devModeControlledByPolicy(value) { this.#devModeControlledByPolicy_accessor_storage = value; }
    #isChildAccount_accessor_storage = false;
    get isChildAccount() { return this.#isChildAccount_accessor_storage; }
    set isChildAccount(value) { this.#isChildAccount_accessor_storage = value; }
    #narrow_accessor_storage = false;
    get narrow() { return this.#narrow_accessor_storage; }
    set narrow(value) { this.#narrow_accessor_storage = value; }
    #canLoadUnpacked_accessor_storage;
    get canLoadUnpacked() { return this.#canLoadUnpacked_accessor_storage; }
    set canLoadUnpacked(value) { this.#canLoadUnpacked_accessor_storage = value; }
    #expanded__accessor_storage = false;
    get expanded_() { return this.#expanded__accessor_storage; }
    set expanded_(value) { this.#expanded__accessor_storage = value; }
    #showPackDialog__accessor_storage = false;
    get showPackDialog_() { return this.#showPackDialog__accessor_storage; }
    set showPackDialog_(value) { this.#showPackDialog__accessor_storage = value; }
    #isUpdating__accessor_storage = false;
    get isUpdating_() { return this.#isUpdating__accessor_storage; }
    set isUpdating_(value) { this.#isUpdating__accessor_storage = value; }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.setAttribute('role', 'banner');
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('inDevMode')) {
            const previous = changedProperties.get('inDevMode');
            this.onInDevModeChanged_(this.inDevMode, previous);
        }
    }
    focusSearchInput() {
        this.$.toolbar.getSearchField().showAndFocus();
    }
    isSearchFocused() {
        return this.$.toolbar.getSearchField().isSearchFocused();
    }
    shouldDisableDevMode_() {
        return this.devModeControlledByPolicy || this.isChildAccount;
    }
    getTooltipText_() {
        return this.i18n(this.isChildAccount ? 'controlledSettingChildRestriction' :
            'controlledSettingPolicy');
    }
    getIcon_() {
        return this.isChildAccount ? 'cr20:family-link' : 'cr20:domain';
    }
    onDevModeToggleChange_(e) {
        this.delegate.setProfileInDevMode(e.detail);
        chrome.metricsPrivate.recordUserAction('Options_ToggleDeveloperMode_' + (e.detail ? 'Enabled' : 'Disabled'));
    }
    onInDevModeChanged_(_current, previous) {
        const drawer = this.$.devDrawer;
        if (this.inDevMode) {
            if (drawer.hidden) {
                drawer.hidden = false;
                // Requesting the offsetTop will cause a reflow (to account for
                // hidden).
                drawer.offsetTop;
            }
        }
        else {
            if (previous === undefined) {
                drawer.hidden = true;
                return;
            }
            listenOnce(drawer, 'transitionend', () => {
                if (!this.inDevMode) {
                    drawer.hidden = true;
                }
            });
        }
        this.expanded_ = !this.expanded_;
    }
    onLoadUnpackedClick_() {
        this.delegate.loadUnpacked()
            .then((success) => {
            if (success) {
                const toastManager = getToastManager();
                toastManager.duration = TOAST_DURATION_MS;
                toastManager.show(this.i18n('toolbarLoadUnpackedDone'));
            }
        })
            .catch(loadError => {
            this.fire('load-error', loadError);
        });
        chrome.metricsPrivate.recordUserAction('Options_LoadUnpackedExtension');
    }
    onPackClick_() {
        chrome.metricsPrivate.recordUserAction('Options_PackExtension');
        this.showPackDialog_ = true;
    }
    onPackDialogClose_() {
        this.showPackDialog_ = false;
        this.$.packExtensions.focus();
    }
    onUpdateNowClick_() {
        // If already updating, do not initiate another update.
        if (this.isUpdating_) {
            return;
        }
        this.isUpdating_ = true;
        const toastManager = getToastManager();
        // Keep the toast open indefinitely.
        toastManager.duration = 0;
        toastManager.show(this.i18n('toolbarUpdatingToast'));
        this.delegate.updateAllExtensions(this.extensions)
            .then(() => {
            toastManager.hide();
            toastManager.duration = TOAST_DURATION_MS;
            toastManager.show(this.i18n('toolbarUpdateDone'));
            this.isUpdating_ = false;
        }, loadError => {
            this.fire('load-error', loadError);
            toastManager.hide();
            this.isUpdating_ = false;
        });
    }
    onNarrowChanged_(e) {
        this.narrow = e.detail.value;
    }
    canLoadUnpacked_() {
        return this.canLoadUnpacked === undefined || this.canLoadUnpacked;
    }
}
customElements.define(ExtensionsToolbarElement.is, ExtensionsToolbarElement);
