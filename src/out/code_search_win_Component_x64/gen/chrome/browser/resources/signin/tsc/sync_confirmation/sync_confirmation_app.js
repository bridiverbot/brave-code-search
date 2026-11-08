/* Copyright 2017 The Chromium Authors
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_components/localized_link/localized_link.js';
import '/icons.html.js';
import '/strings.m.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './sync_confirmation_app.css.js';
import { getHtml } from './sync_confirmation_app.html.js';
import { ScreenMode } from './sync_confirmation_browser_proxy.js';
import { SyncConfirmationBrowserProxyImpl } from './sync_confirmation_browser_proxy.js';
const SyncConfirmationAppElementBase = WebUiListenerMixinLit(I18nMixinLit(CrLitElement));
export class SyncConfirmationAppElement extends SyncConfirmationAppElementBase {
    static get is() {
        return 'sync-confirmation-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            accountImageSrc_: { type: String },
            anyButtonClicked_: { type: Boolean },
            isModalDialog_: { type: Boolean },
            showEnterpriseBadge_: { type: Boolean },
            syncBenefitsList_: { type: Array },
            /**
             * Whether to show the new UI for Browser Sync Settings and which include
             * sublabel and Apps toggle shared between Ash and Lacros.
             */
            useClickableSyncInfoDesc_: { type: Boolean },
            /** Determines the screen mode. */
            screenMode_: { type: Number },
        };
    }
    #accountImageSrc__accessor_storage = loadTimeData.getString('accountPictureUrl');
    get accountImageSrc_() { return this.#accountImageSrc__accessor_storage; }
    set accountImageSrc_(value) { this.#accountImageSrc__accessor_storage = value; }
    #anyButtonClicked__accessor_storage = false;
    get anyButtonClicked_() { return this.#anyButtonClicked__accessor_storage; }
    set anyButtonClicked_(value) { this.#anyButtonClicked__accessor_storage = value; }
    #isModalDialog__accessor_storage = loadTimeData.getBoolean('isModalDialog');
    get isModalDialog_() { return this.#isModalDialog__accessor_storage; }
    set isModalDialog_(value) { this.#isModalDialog__accessor_storage = value; }
    #showEnterpriseBadge__accessor_storage = false;
    get showEnterpriseBadge_() { return this.#showEnterpriseBadge__accessor_storage; }
    set showEnterpriseBadge_(value) { this.#showEnterpriseBadge__accessor_storage = value; }
    #syncBenefitsList__accessor_storage = JSON.parse(loadTimeData.getString('syncBenefitsList'));
    get syncBenefitsList_() { return this.#syncBenefitsList__accessor_storage; }
    set syncBenefitsList_(value) { this.#syncBenefitsList__accessor_storage = value; }
    syncConfirmationBrowserProxy_ = SyncConfirmationBrowserProxyImpl.getInstance();
    #useClickableSyncInfoDesc__accessor_storage = loadTimeData.getBoolean('useClickableSyncInfoDesc');
    get useClickableSyncInfoDesc_() { return this.#useClickableSyncInfoDesc__accessor_storage; }
    set useClickableSyncInfoDesc_(value) { this.#useClickableSyncInfoDesc__accessor_storage = value; }
    #screenMode__accessor_storage = ScreenMode.PENDING;
    get screenMode_() { return this.#screenMode__accessor_storage; }
    set screenMode_(value) { this.#screenMode__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('account-info-changed', this.handleAccountInfoChanged_.bind(this));
        this.addWebUiListener('screen-mode-changed', this.handleScreenModeChanged_.bind(this));
        this.syncConfirmationBrowserProxy_.requestAccountInfo();
    }
    onConfirmClick_(e) {
        this.anyButtonClicked_ = true;
        this.syncConfirmationBrowserProxy_.confirm(this.getConsentDescription_(), this.getConsentConfirmation_(e.composedPath()), this.screenMode_);
    }
    onUndoClick_() {
        this.anyButtonClicked_ = true;
        this.syncConfirmationBrowserProxy_.undo(this.screenMode_);
    }
    onGoToSettingsClick_(e) {
        this.anyButtonClicked_ = true;
        this.syncConfirmationBrowserProxy_.goToSettings(this.getConsentDescription_(), this.getConsentConfirmation_(e.composedPath()), this.screenMode_);
    }
    /**
     * @param path Path of the click event. Must contain a consent confirmation
     *     element.
     * @return The text of the consent confirmation element.
     */
    getConsentConfirmation_(path) {
        for (const element of path) {
            if (element.nodeType !== Node.DOCUMENT_FRAGMENT_NODE &&
                element.hasAttribute('consent-confirmation')) {
                return element.textContent.trim();
            }
        }
        assertNotReached('No consent confirmation element found.');
    }
    /** @return Text of the consent description elements. */
    getConsentDescription_() {
        const consentDescription = Array.from(this.shadowRoot.querySelectorAll('[consent-description]'))
            .filter(element => element.getBoundingClientRect().width *
            element.getBoundingClientRect().height >
            0)
            .map(element => element.hasAttribute('localized-string') ?
            element.getAttribute('localized-string') :
            element.textContent.trim());
        assert(consentDescription.length);
        return consentDescription;
    }
    // Called when the account information changes: it might be either the image
    // or determined mode of screen restriction (derived from the
    // canShowHistorySyncOptInsWithoutMinorModeRestriction capability).
    handleAccountInfoChanged_(accountInfo) {
        this.accountImageSrc_ = accountInfo.src;
        this.showEnterpriseBadge_ = accountInfo.showEnterpriseBadge;
    }
    handleScreenModeChanged_(screenMode) {
        this.screenMode_ = screenMode;
    }
    getConfirmButtonClass_() {
        // TODO(b/326912202): Replace with observer pattern on screenMode_.
        switch (this.screenMode_) {
            case ScreenMode.UNRESTRICTED:
                return 'action-button';
            case ScreenMode.PENDING:
                return 'visibility-hidden';
            default:
                // All other cases have no special appearance.
                return '';
        }
    }
    getNotNowButtonClass_() {
        return this.screenMode_ === ScreenMode.PENDING ? 'visibility-hidden' : '';
    }
    isPending_() {
        return this.screenMode_ === ScreenMode.PENDING;
    }
    shouldHideEnterpriseBadge_() {
        return !this.showEnterpriseBadge_ ||
            this.screenMode_ === ScreenMode.PENDING;
    }
    /**
     * Called when the link to the device's sync settings is clicked.
     */
    onDisclaimerLinkClicked_(event) {
        // Prevent the default link click behavior.
        event.detail.event.preventDefault();
        // Programmatically open device's sync settings.
        this.syncConfirmationBrowserProxy_.openDeviceSyncSettings();
    }
    /**
     * Returns the name of class to apply on some tags to enable animations.
     * May be empty if no animations should be added.
     */
    getAnimationClass_() {
        return !this.isModalDialog_ ? 'fade-in' : '';
    }
    /**
     * Returns either "dialog" or an empty string.
     *
     * The returned value is intended to be added as a class on the root tags of
     * the element. Some styles from `tangible_sync_style_shared.css` rely on the
     * presence of this "dialog" class.
     */
    getMaybeDialogClass_() {
        return this.isModalDialog_ ? 'dialog' : '';
    }
}
customElements.define(SyncConfirmationAppElement.is, SyncConfirmationAppElement);
