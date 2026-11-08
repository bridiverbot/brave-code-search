// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import '/icons.html.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import './managed_user_profile_notice_disclosure.js';
import './managed_user_profile_notice_value_prop.js';
import './managed_user_profile_notice_state.js';
import './managed_user_profile_notice_data_handling.js';
import './signals_disclaimer.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assertNotReachedCase } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './managed_user_profile_notice_app.css.js';
import { getHtml } from './managed_user_profile_notice_app.html.js';
import { BrowsingDataHandling, ManagedUserProfileNoticeBrowserProxyImpl, State } from './managed_user_profile_notice_browser_proxy.js';
document.addEventListener('DOMContentLoaded', () => {
    const managedUserProfileNoticeBrowserProxyImpl = ManagedUserProfileNoticeBrowserProxyImpl.getInstance();
    // Prefer using |document.body.offsetHeight| instead of
    // |document.body.scrollHeight| as it returns the correct height of the
    // page even when the page zoom in Chrome is different than 100%.
    managedUserProfileNoticeBrowserProxyImpl.initializedWithSize(document.body.offsetHeight);
    // The web dialog size has been initialized, so reset the body width to
    // auto. This makes sure that the body only takes up the viewable width,
    // e.g. when there is a scrollbar.
    document.body.style.width = 'auto';
});
const ManagedUserProfileNoticeAppElementBase = WebUiListenerMixinLit(I18nMixinLit(CrLitElement));
export class ManagedUserProfileNoticeAppElement extends ManagedUserProfileNoticeAppElementBase {
    static get is() {
        return 'managed-user-profile-notice-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            showEnterpriseBadge_: {
                type: Boolean,
            },
            /** URL for the profile picture */
            pictureUrl_: { type: String },
            /** The title and subtitle of the screen */
            title_: { type: String },
            subtitle_: { type: String },
            /**
             * Whether this page is being shown as a dialog.
             *
             * Reflected as an attribute to allow configuring variables and styles at
             * the element host level.
             */
            isModalDialog_: {
                type: Boolean,
                reflect: true,
            },
            /** The label for the button to proceed with the flow */
            continueAs_: { type: String },
            proceedLabel_: { type: String },
            cancelLabel_: { type: String },
            errorTitle_: { type: String },
            errorSubtitle_: { type: String },
            disableProceedButton_: { type: Boolean },
            currentState_: { type: Number },
            showValueProposition_: { type: Boolean },
            showDisclosure_: { type: Boolean },
            showProcessing_: { type: Boolean },
            showSuccess_: { type: Boolean },
            showTimeout_: { type: Boolean },
            showError_: { type: Boolean },
            processingSubtitle_: { type: String },
            showUserDataHandling_: { type: Boolean },
            selectedDataHandling_: { type: String },
            showSignalsDisclaimer_: { type: Boolean },
            valuePropTitle_: { type: String },
            valuePropSubtitle_: { type: String },
            disclosureTitle_: { type: String },
            disclosureSubtitle_: { type: String },
            separateDataTitle_: { type: String },
            separateDataChoiceTitle_: { type: String },
            separateDataChoiceDetails_: { type: String },
            mergeDataChoiceTitle_: { type: String },
            mergeDataChoiceDetails_: { type: String },
            email_: { type: String },
            accountName_: { type: String },
        };
    }
    #email__accessor_storage = '';
    get email_() { return this.#email__accessor_storage; }
    set email_(value) { this.#email__accessor_storage = value; }
    #accountName__accessor_storage = '';
    get accountName_() { return this.#accountName__accessor_storage; }
    set accountName_(value) { this.#accountName__accessor_storage = value; }
    #continueAs__accessor_storage = '';
    get continueAs_() { return this.#continueAs__accessor_storage; }
    set continueAs_(value) { this.#continueAs__accessor_storage = value; }
    #showEnterpriseBadge__accessor_storage = false;
    get showEnterpriseBadge_() { return this.#showEnterpriseBadge__accessor_storage; }
    set showEnterpriseBadge_(value) { this.#showEnterpriseBadge__accessor_storage = value; }
    #pictureUrl__accessor_storage = '';
    get pictureUrl_() { return this.#pictureUrl__accessor_storage; }
    set pictureUrl_(value) { this.#pictureUrl__accessor_storage = value; }
    #title__accessor_storage = '';
    get title_() { return this.#title__accessor_storage; }
    set title_(value) { this.#title__accessor_storage = value; }
    #subtitle__accessor_storage = '';
    get subtitle_() { return this.#subtitle__accessor_storage; }
    set subtitle_(value) { this.#subtitle__accessor_storage = value; }
    #isModalDialog__accessor_storage = loadTimeData.getBoolean('isModalDialog');
    get isModalDialog_() { return this.#isModalDialog__accessor_storage; }
    set isModalDialog_(value) { this.#isModalDialog__accessor_storage = value; }
    #proceedLabel__accessor_storage = '';
    get proceedLabel_() { return this.#proceedLabel__accessor_storage; }
    set proceedLabel_(value) { this.#proceedLabel__accessor_storage = value; }
    #cancelLabel__accessor_storage = '';
    get cancelLabel_() { return this.#cancelLabel__accessor_storage; }
    set cancelLabel_(value) { this.#cancelLabel__accessor_storage = value; }
    #errorTitle__accessor_storage = '';
    get errorTitle_() { return this.#errorTitle__accessor_storage; }
    set errorTitle_(value) { this.#errorTitle__accessor_storage = value; }
    #errorSubtitle__accessor_storage = '';
    get errorSubtitle_() { return this.#errorSubtitle__accessor_storage; }
    set errorSubtitle_(value) { this.#errorSubtitle__accessor_storage = value; }
    #disableProceedButton__accessor_storage = false;
    get disableProceedButton_() { return this.#disableProceedButton__accessor_storage; }
    set disableProceedButton_(value) { this.#disableProceedButton__accessor_storage = value; }
    #currentState__accessor_storage = State.DISCLOSURE;
    get currentState_() { return this.#currentState__accessor_storage; }
    set currentState_(value) { this.#currentState__accessor_storage = value; }
    #showValueProposition__accessor_storage = false;
    get showValueProposition_() { return this.#showValueProposition__accessor_storage; }
    set showValueProposition_(value) { this.#showValueProposition__accessor_storage = value; }
    #showDisclosure__accessor_storage = false;
    get showDisclosure_() { return this.#showDisclosure__accessor_storage; }
    set showDisclosure_(value) { this.#showDisclosure__accessor_storage = value; }
    #showProcessing__accessor_storage = false;
    get showProcessing_() { return this.#showProcessing__accessor_storage; }
    set showProcessing_(value) { this.#showProcessing__accessor_storage = value; }
    #showSuccess__accessor_storage = false;
    get showSuccess_() { return this.#showSuccess__accessor_storage; }
    set showSuccess_(value) { this.#showSuccess__accessor_storage = value; }
    #showTimeout__accessor_storage = false;
    get showTimeout_() { return this.#showTimeout__accessor_storage; }
    set showTimeout_(value) { this.#showTimeout__accessor_storage = value; }
    #showError__accessor_storage = false;
    get showError_() { return this.#showError__accessor_storage; }
    set showError_(value) { this.#showError__accessor_storage = value; }
    #showSignalsDisclaimer__accessor_storage = false;
    get showSignalsDisclaimer_() { return this.#showSignalsDisclaimer__accessor_storage; }
    set showSignalsDisclaimer_(value) { this.#showSignalsDisclaimer__accessor_storage = value; }
    #processingSubtitle__accessor_storage = loadTimeData.getString('processingSubtitle');
    get processingSubtitle_() { return this.#processingSubtitle__accessor_storage; }
    set processingSubtitle_(value) { this.#processingSubtitle__accessor_storage = value; }
    #showUserDataHandling__accessor_storage = false;
    get showUserDataHandling_() { return this.#showUserDataHandling__accessor_storage; }
    set showUserDataHandling_(value) { this.#showUserDataHandling__accessor_storage = value; }
    #selectedDataHandling__accessor_storage;
    get selectedDataHandling_() { return this.#selectedDataHandling__accessor_storage; }
    set selectedDataHandling_(value) { this.#selectedDataHandling__accessor_storage = value; }
    #valuePropTitle__accessor_storage = '';
    get valuePropTitle_() { return this.#valuePropTitle__accessor_storage; }
    set valuePropTitle_(value) { this.#valuePropTitle__accessor_storage = value; }
    #valuePropSubtitle__accessor_storage = '';
    get valuePropSubtitle_() { return this.#valuePropSubtitle__accessor_storage; }
    set valuePropSubtitle_(value) { this.#valuePropSubtitle__accessor_storage = value; }
    #disclosureTitle__accessor_storage = '';
    get disclosureTitle_() { return this.#disclosureTitle__accessor_storage; }
    set disclosureTitle_(value) { this.#disclosureTitle__accessor_storage = value; }
    #disclosureSubtitle__accessor_storage = '';
    get disclosureSubtitle_() { return this.#disclosureSubtitle__accessor_storage; }
    set disclosureSubtitle_(value) { this.#disclosureSubtitle__accessor_storage = value; }
    #separateDataTitle__accessor_storage = '';
    get separateDataTitle_() { return this.#separateDataTitle__accessor_storage; }
    set separateDataTitle_(value) { this.#separateDataTitle__accessor_storage = value; }
    #separateDataChoiceTitle__accessor_storage = '';
    get separateDataChoiceTitle_() { return this.#separateDataChoiceTitle__accessor_storage; }
    set separateDataChoiceTitle_(value) { this.#separateDataChoiceTitle__accessor_storage = value; }
    #separateDataChoiceDetails__accessor_storage = '';
    get separateDataChoiceDetails_() { return this.#separateDataChoiceDetails__accessor_storage; }
    set separateDataChoiceDetails_(value) { this.#separateDataChoiceDetails__accessor_storage = value; }
    #mergeDataChoiceTitle__accessor_storage = '';
    get mergeDataChoiceTitle_() { return this.#mergeDataChoiceTitle__accessor_storage; }
    set mergeDataChoiceTitle_(value) { this.#mergeDataChoiceTitle__accessor_storage = value; }
    #mergeDataChoiceDetails__accessor_storage = '';
    get mergeDataChoiceDetails_() { return this.#mergeDataChoiceDetails__accessor_storage; }
    set mergeDataChoiceDetails_(value) { this.#mergeDataChoiceDetails__accessor_storage = value; }
    managedUserProfileNoticeBrowserProxy_ = ManagedUserProfileNoticeBrowserProxyImpl.getInstance();
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('currentState_')) {
            this.cancelLabel_ = this.computeCancelLabel_();
        }
        if (changedPrivateProperties.has('currentState_') ||
            changedPrivateProperties.has('continueAs_')) {
            this.proceedLabel_ = this.computeProceedLabel_();
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.addWebUiListener('on-state-changed', (state) => this.updateCurrentState_(state));
        this.addWebUiListener('on-state-changed-to-error', (errorTitle, errorSubTitle) => {
            this.updateErrorStrings_(errorTitle, errorSubTitle);
            this.updateCurrentState_(State.ERROR);
        });
        this.addWebUiListener('on-profile-info-changed', (info) => this.setProfileInfo_(info));
        this.addWebUiListener('on-long-processing', () => this.updateProcessingText_());
        this.managedUserProfileNoticeBrowserProxy_.initialized().then(info => {
            this.setProfileInfo_(info);
            this.updateCurrentState_(loadTimeData.getInteger('initialState'));
        });
    }
    /** Called when the proceed button is clicked. */
    onProceedClick_() {
        this.disableProceedButton_ = true;
        const linkData = this.selectedDataHandling_ === BrowsingDataHandling.MERGE;
        this.managedUserProfileNoticeBrowserProxy_.proceed(
        /*currentState=*/ this.currentState_, linkData);
    }
    /** Called when the cancel button is clicked. */
    onCancelClick_() {
        if (this.allowValuePropStateBackFromDisclosure_()) {
            this.updateCurrentState_(State.VALUE_PROPOSITION);
            return;
        }
        this.managedUserProfileNoticeBrowserProxy_.cancel();
    }
    allowValuePropStateBackFromDisclosure_() {
        return this.currentState_ === State.DISCLOSURE &&
            loadTimeData.getInteger('initialState') !== State.DISCLOSURE;
    }
    setProfileInfo_(info) {
        this.pictureUrl_ = info.pictureUrl;
        this.email_ = info.email;
        this.accountName_ = info.accountName;
        this.continueAs_ = info.continueAs;
        this.showEnterpriseBadge_ = info.showEnterpriseBadge;
        this.title_ = info.title;
        this.subtitle_ = info.subtitle;
        this.selectedDataHandling_ = info.checkLinkDataCheckboxByDefault ?
            BrowsingDataHandling.MERGE :
            BrowsingDataHandling.SEPARATE;
        // Update the string that may have changed with the new profile info.
        // This is done here because the strings are not constants and may change,
        // the selector $18n{key} does not work with dynamic strings when we are in
        // a dialog. This is a workaround to update the strings after the profile
        // info is set.
        this.valuePropTitle_ = this.i18n('valuePropTitle');
        this.valuePropSubtitle_ = this.i18n('valuePropSubtitle');
        this.disclosureTitle_ = this.i18n('profileDisclosureTitle');
        this.disclosureSubtitle_ = this.i18n('profileDisclosureSubtitle');
        this.separateDataTitle_ = this.i18n('separateBrowsingDataTitle');
        this.separateDataChoiceTitle_ =
            this.i18n('separateBrowsingDataChoiceTitle');
        this.separateDataChoiceDetails_ =
            this.i18n('separateBrowsingDataChoiceDetails');
        this.mergeDataChoiceTitle_ = this.i18n('mergeBrowsingDataChoiceTitle');
        this.mergeDataChoiceDetails_ = this.i18n('mergeBrowsingDataChoiceDetails');
    }
    updateCurrentState_(state) {
        this.currentState_ = state;
        this.showValueProposition_ = state === State.VALUE_PROPOSITION;
        this.showDisclosure_ = state === State.DISCLOSURE;
        this.showProcessing_ = state === State.PROCESSING;
        this.showSuccess_ = state === State.SUCCESS;
        this.showTimeout_ = state === State.TIMEOUT;
        this.showError_ = state === State.ERROR;
        this.showUserDataHandling_ = state === State.USER_DATA_HANDLING;
        this.showSignalsDisclaimer_ = state === State.SIGNALS_DISCLAIMER;
        this.disableProceedButton_ = false;
    }
    updateErrorStrings_(errorTitle, errorSubTitle) {
        this.errorTitle_ = errorTitle;
        this.errorSubtitle_ = errorSubTitle;
    }
    allowCancel_() {
        return this.showDisclosure_ || this.showValueProposition_ ||
            this.showUserDataHandling_ || this.showTimeout_ ||
            this.showProcessing_ || this.showSignalsDisclaimer_;
    }
    computeCancelLabel_() {
        if (this.currentState_ === State.SIGNALS_DISCLAIMER) {
            return this.i18n('signalsDisclaimerCancelLabel');
        }
        if (this.currentState_ === State.VALUE_PROPOSITION &&
            !loadTimeData.getBoolean('enforcedByPolicy')) {
            return this.i18n('cancelValueProp');
        }
        if (this.allowValuePropStateBackFromDisclosure_()) {
            return this.i18n('backLabel');
        }
        return this.i18n('cancelLabel');
    }
    allowProceedButton_() {
        return !this.disableProceedButton_ &&
            (!this.showUserDataHandling_ || !!this.selectedDataHandling_);
    }
    computeProceedLabel_() {
        switch (this.currentState_) {
            case State.SIGNALS_DISCLAIMER:
                return this.i18n('signalsDisclaimerContinueLabel');
            case State.VALUE_PROPOSITION:
                return this.continueAs_;
            case State.DISCLOSURE:
            case State.PROCESSING:
            case State.SUCCESS:
                return this.i18n('continueLabel');
            case State.USER_DATA_HANDLING:
                return this.i18n('confirmLabel');
            case State.ERROR:
                return this.i18n('closeLabel');
            case State.TIMEOUT:
                return this.i18n('retryLabel');
            default:
                assertNotReachedCase(this.currentState_);
        }
    }
    updateProcessingText_() {
        this.processingSubtitle_ = this.i18n('longProcessingSubtitle');
    }
    onSelectedDataHandlingChanged_(e) {
        this.selectedDataHandling_ = e.detail.value;
    }
    getActionContainerId_() {
        if (this.showTimeout_) {
            return 'timeout-action-container';
        }
        else if (this.showSignalsDisclaimer_) {
            return 'signals-disclaimer-action-container';
        }
        else {
            return '';
        }
    }
}
customElements.define(ManagedUserProfileNoticeAppElement.is, ManagedUserProfileNoticeAppElement);
