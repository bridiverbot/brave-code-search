// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './icons.html.js';
// 
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
// 
import 'chrome://resources/cr_elements/cr_progress/cr_progress.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/js/action_link.js';
import '/strings.m.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { getToastManager } from 'chrome://resources/cr_elements/cr_toast/cr_toast_manager.js';
import { FocusRowMixinLit } from 'chrome://resources/cr_elements/focus_row_mixin_lit.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { htmlEscape } from 'chrome://resources/js/util.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory } from './downloads.mojom-webui.js';
import { DangerType, SafeBrowsingState, State, TailoredWarningType } from './downloads.mojom-webui.js';
import { IconLoaderImpl } from './icon_loader.js';
import { getCss } from './item.css.js';
import { getHtml } from './item.html.js';
const DownloadsItemElementBase = I18nMixinLit(FocusRowMixinLit(CrLitElement));
/**
 * The UI pattern for displaying a download. Computed from DangerType and other
 * properties of the download and user's profile.
 */
var DisplayType;
(function (DisplayType) {
    DisplayType[DisplayType["NORMAL"] = 0] = "NORMAL";
    DisplayType[DisplayType["DANGEROUS"] = 1] = "DANGEROUS";
    DisplayType[DisplayType["SUSPICIOUS"] = 2] = "SUSPICIOUS";
    DisplayType[DisplayType["UNVERIFIED"] = 3] = "UNVERIFIED";
    DisplayType[DisplayType["INSECURE"] = 4] = "INSECURE";
    DisplayType[DisplayType["ERROR"] = 5] = "ERROR";
})(DisplayType || (DisplayType = {}));
export class DownloadsItemElement extends DownloadsItemElementBase {
    static get is() {
        return 'downloads-item';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            webuiRoundedIconsEnabled_: { type: Boolean },
            data: { type: Object },
            completelyOnDisk_: { type: Boolean },
            shouldLinkFilename_: { type: Boolean },
            isDangerous_: { type: Boolean },
            isReviewable_: { type: Boolean },
            pauseOrResumeText_: { type: String },
            showCancel_: { type: Boolean },
            showProgress_: { type: Boolean },
            showDeepScan_: { type: Boolean },
            showOpenAnyway_: { type: Boolean },
            displayType_: {
                type: Number,
                state: true,
            },
            // 
            useFileIcon_: { type: Boolean },
        };
    }
    #data_accessor_storage;
    get data() { return this.#data_accessor_storage; }
    set data(value) { this.#data_accessor_storage = value; }
    // 
    browserProxy_ = browserProxyFactory.getInstance();
    #isDangerous__accessor_storage = false;
    get isDangerous_() { return this.#isDangerous__accessor_storage; }
    set isDangerous_(value) { this.#isDangerous__accessor_storage = value; }
    #isReviewable__accessor_storage = false;
    get isReviewable_() { return this.#isReviewable__accessor_storage; }
    set isReviewable_(value) { this.#isReviewable__accessor_storage = value; }
    #pauseOrResumeText__accessor_storage = '';
    get pauseOrResumeText_() { return this.#pauseOrResumeText__accessor_storage; }
    set pauseOrResumeText_(value) { this.#pauseOrResumeText__accessor_storage = value; }
    #showCancel__accessor_storage = false;
    get showCancel_() { return this.#showCancel__accessor_storage; }
    set showCancel_(value) { this.#showCancel__accessor_storage = value; }
    #showProgress__accessor_storage = false;
    get showProgress_() { return this.#showProgress__accessor_storage; }
    set showProgress_(value) { this.#showProgress__accessor_storage = value; }
    #showDeepScan__accessor_storage = false;
    get showDeepScan_() { return this.#showDeepScan__accessor_storage; }
    set showDeepScan_(value) { this.#showDeepScan__accessor_storage = value; }
    #showOpenAnyway__accessor_storage = false;
    get showOpenAnyway_() { return this.#showOpenAnyway__accessor_storage; }
    set showOpenAnyway_(value) { this.#showOpenAnyway__accessor_storage = value; }
    #useFileIcon__accessor_storage = false;
    get useFileIcon_() { return this.#useFileIcon__accessor_storage; }
    set useFileIcon_(value) { this.#useFileIcon__accessor_storage = value; }
    restoreFocusAfterCancel_ = false;
    #displayType__accessor_storage = DisplayType.NORMAL;
    get displayType_() { return this.#displayType__accessor_storage; }
    set displayType_(value) { this.#displayType__accessor_storage = value; }
    #completelyOnDisk__accessor_storage = true;
    get completelyOnDisk_() { return this.#completelyOnDisk__accessor_storage; }
    set completelyOnDisk_(value) { this.#completelyOnDisk__accessor_storage = value; }
    #shouldLinkFilename__accessor_storage = true;
    get shouldLinkFilename_() { return this.#shouldLinkFilename__accessor_storage; }
    set shouldLinkFilename_(value) { this.#shouldLinkFilename__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    overrideCustomEquivalent = true;
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('data')) {
            this.completelyOnDisk_ = this.computeCompletelyOnDisk_();
            this.shouldLinkFilename_ = this.computeShouldLinkFilename_();
            this.isDangerous_ = this.computeIsDangerous_();
            this.isReviewable_ = this.computeIsReviewable_();
            this.pauseOrResumeText_ = this.computePauseOrResumeText_();
            this.showCancel_ = this.computeShowCancel_();
            // Compute showProgress_ after showCancel_ since it uses showCancel_.
            this.showProgress_ = this.computeShowProgress_();
            this.showDeepScan_ = this.computeShowDeepScan_();
            this.showOpenAnyway_ = this.computeShowOpenAnyway_();
            this.displayType_ = this.computeDisplayType_();
        }
    }
    firstUpdated() {
        this.setAttribute('role', 'row');
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('data')) {
            this.updateControlledBy_();
            this.updateUiForStateChange_();
            this.restoreFocusAfterCancelIfNeeded_();
            // Since this item's height may have changed due to the updated data,
            // we send an iron-resize event to iron-list to allow it to resize.
            this.fire('iron-resize');
        }
    }
    /** Overrides FocusRowMixin. */
    getCustomEquivalent(sampleElement) {
        if (sampleElement.getAttribute('focus-type') === 'cancel') {
            return this.shadowRoot.querySelector('[focus-type="retry"]');
        }
        if (sampleElement.getAttribute('focus-type') === 'retry') {
            return this.shadowRoot.querySelector('[focus-type="pauseOrResume"]');
        }
        return null;
    }
    getFileIcon() {
        return this.$.fileIcon;
    }
    getMoreActionsButton() {
        const button = this.shadowRoot.querySelector('#more-actions');
        return button || null;
    }
    getMoreActionsMenu() {
        const menu = this.shadowRoot.querySelector('#more-actions-menu');
        assert(!!menu);
        return menu;
    }
    computeClass_() {
        const classes = [];
        if (this.computeIsActive_()) {
            classes.push('is-active');
        }
        if (this.isDangerous_) {
            classes.push('dangerous');
        }
        if (this.showProgress_) {
            classes.push('show-progress');
        }
        return classes.join(' ');
    }
    computeCompletelyOnDisk_() {
        if (this.data === undefined) {
            return false;
        }
        if (this.data.fileExternallyRemoved) {
            return false;
        }
        switch (this.data.state) {
            case State.kComplete:
                return true;
            case State.kInProgress:
            case State.kCancelled:
            case State.kPaused:
            case State.kDangerous:
            case State.kInterrupted:
            case State.kInsecure:
            case State.kAsyncScanning:
            case State.kPromptForScanning:
            case State.kPromptForLocalPasswordScanning:
                return false;
            default:
                assertNotReached('Unhandled State encountered');
        }
    }
    computeShouldLinkFilename_() {
        if (this.data === undefined) {
            return false;
        }
        if (!this.completelyOnDisk_) {
            return false;
        }
        switch (this.data.dangerType) {
            case DangerType.kDeepScannedFailed:
                return false;
            case DangerType.kNoApplicableDangerType:
            case DangerType.kDangerousFile:
            case DangerType.kDangerousUrl:
            case DangerType.kDangerousContent:
            case DangerType.kCookieTheft:
            case DangerType.kUncommonContent:
            case DangerType.kDangerousHost:
            case DangerType.kPotentiallyUnwanted:
            case DangerType.kAsyncScanning:
            case DangerType.kAsyncLocalPasswordScanning:
            case DangerType.kBlockedPasswordProtected:
            case DangerType.kBlockedTooLarge:
            case DangerType.kSensitiveContentWarning:
            case DangerType.kSensitiveContentBlock:
            case DangerType.kDeepScannedSafe:
            case DangerType.kDeepScannedOpenedDangerous:
            case DangerType.kBlockedScanFailed:
            case DangerType.kForcedSaveToGdrive:
            case DangerType.kForcedSaveToOnedrive:
                return true;
            default:
                assertNotReached('Unhandled DangerType encountered');
        }
    }
    computeHasShowInFolderLink_() {
        if (this.data === undefined) {
            return false;
        }
        if (!this.computeCompletelyOnDisk_()) {
            return false;
        }
        switch (this.data.dangerType) {
            case DangerType.kDeepScannedFailed:
                return false;
            case DangerType.kNoApplicableDangerType:
            case DangerType.kDangerousFile:
            case DangerType.kDangerousUrl:
            case DangerType.kDangerousContent:
            case DangerType.kCookieTheft:
            case DangerType.kUncommonContent:
            case DangerType.kDangerousHost:
            case DangerType.kPotentiallyUnwanted:
            case DangerType.kAsyncScanning:
            case DangerType.kAsyncLocalPasswordScanning:
            case DangerType.kBlockedPasswordProtected:
            case DangerType.kBlockedTooLarge:
            case DangerType.kSensitiveContentWarning:
            case DangerType.kSensitiveContentBlock:
            case DangerType.kDeepScannedSafe:
            case DangerType.kDeepScannedOpenedDangerous:
            case DangerType.kBlockedScanFailed:
            case DangerType.kForcedSaveToGdrive:
            case DangerType.kForcedSaveToOnedrive:
                return true;
            default:
                assertNotReached('Unhandled DangerType encountered');
        }
    }
    computeControlledBy_() {
        if (!this.data || !this.data.byExtId || !this.data.byExtName) {
            return '';
        }
        const url = `chrome://extensions/?id=${this.data.byExtId}`;
        const name = this.data.byExtName;
        return loadTimeData.getStringF('controlledByUrl', url, htmlEscape(name));
    }
    computeDate_() {
        if (!this.data) {
            return '';
        }
        assert(typeof this.data.hideDate === 'boolean');
        if (this.data.hideDate) {
            return '';
        }
        return this.data.sinceString || this.data.dateString;
    }
    computeDescriptionVisible_() {
        return this.computeDescription_() !== '';
    }
    computeSecondLineVisible_() {
        if (!this.data) {
            return false;
        }
        switch (this.data.state) {
            case State.kAsyncScanning:
                return true;
            case State.kInProgress:
            case State.kCancelled:
            case State.kComplete:
            case State.kPaused:
            case State.kDangerous:
            case State.kInterrupted:
            case State.kInsecure:
            case State.kPromptForScanning:
            case State.kPromptForLocalPasswordScanning:
                return false;
            default:
                assertNotReached('Unhandled State encountered');
        }
    }
    isSuspiciousEnterpriseApVerdict_(requestsApVerdicts, dangerType) {
        switch (dangerType) {
            case DangerType.kUncommonContent:
                return requestsApVerdicts;
            case DangerType.kSensitiveContentWarning:
                return true;
            case DangerType.kNoApplicableDangerType:
            case DangerType.kDangerousFile:
            case DangerType.kDangerousUrl:
            case DangerType.kDangerousContent:
            case DangerType.kCookieTheft:
            case DangerType.kDangerousHost:
            case DangerType.kPotentiallyUnwanted:
            case DangerType.kAsyncScanning:
            case DangerType.kAsyncLocalPasswordScanning:
            case DangerType.kBlockedPasswordProtected:
            case DangerType.kBlockedTooLarge:
            case DangerType.kSensitiveContentBlock:
            case DangerType.kDeepScannedFailed:
            case DangerType.kDeepScannedSafe:
            case DangerType.kDeepScannedOpenedDangerous:
            case DangerType.kBlockedScanFailed:
            case DangerType.kForcedSaveToGdrive:
            case DangerType.kForcedSaveToOnedrive:
                return false;
            default:
                assertNotReached('Unhandled DangerType encountered');
        }
    }
    computeDisplayType_() {
        // Most downloads are normal. If we don't have data, don't assume danger.
        if (!this.data) {
            return DisplayType.NORMAL;
        }
        if (this.data.isInsecure) {
            return DisplayType.INSECURE;
        }
        switch (this.data.state) {
            case State.kAsyncScanning:
            case State.kPromptForScanning:
            case State.kPromptForLocalPasswordScanning:
                return DisplayType.SUSPICIOUS;
            case State.kInsecure:
                return DisplayType.INSECURE;
            case State.kInProgress:
            case State.kCancelled:
            case State.kComplete:
            case State.kPaused:
            case State.kDangerous:
            case State.kInterrupted:
                break;
            default:
                assertNotReached('Unhandled State encountered');
        }
        // Enterprise AP verdicts.
        if (this.isSuspiciousEnterpriseApVerdict_(loadTimeData.getBoolean('requestsApVerdicts'), this.data.dangerType)) {
            return DisplayType.SUSPICIOUS;
        }
        switch (this.data.dangerType) {
            // Mimics logic in download_ui_model.cc for downloads with danger_type
            // DOWNLOAD_DANGER_TYPE_DANGEROUS_FILE.
            case DangerType.kDangerousFile:
                return this.data.hasSafeBrowsingVerdict ? DisplayType.SUSPICIOUS :
                    DisplayType.UNVERIFIED;
            case DangerType.kDangerousUrl:
            case DangerType.kDangerousContent:
            case DangerType.kCookieTheft:
            case DangerType.kDangerousHost:
            case DangerType.kPotentiallyUnwanted:
            case DangerType.kDeepScannedOpenedDangerous:
                return DisplayType.DANGEROUS;
            case DangerType.kUncommonContent:
            case DangerType.kDeepScannedFailed:
                return DisplayType.SUSPICIOUS;
            case DangerType.kNoApplicableDangerType:
            case DangerType.kAsyncScanning:
            case DangerType.kAsyncLocalPasswordScanning:
            case DangerType.kSensitiveContentWarning:
            case DangerType.kDeepScannedSafe:
            case DangerType.kBlockedScanFailed:
                return DisplayType.NORMAL;
            case DangerType.kBlockedPasswordProtected:
            case DangerType.kBlockedTooLarge:
            case DangerType.kSensitiveContentBlock:
            case DangerType.kForcedSaveToGdrive:
            case DangerType.kForcedSaveToOnedrive:
                return DisplayType.ERROR;
            default:
                assertNotReached('Unhandled DangerType encountered');
        }
    }
    computeDeepScanControlText_() {
        if (!this.data) {
            return '';
        }
        switch (this.data.state) {
            case State.kPromptForScanning:
                return loadTimeData.getString('controlDeepScan');
            case State.kPromptForLocalPasswordScanning:
                return loadTimeData.getString('controlLocalPasswordScan');
            case State.kInProgress:
            case State.kCancelled:
            case State.kComplete:
            case State.kPaused:
            case State.kDangerous:
            case State.kInterrupted:
            case State.kInsecure:
            case State.kAsyncScanning:
                return '';
            default:
                assertNotReached('Unhandled State encountered');
        }
    }
    computeSaveDangerousLabel_() {
        switch (this.displayType_) {
            case DisplayType.DANGEROUS:
                return this.i18n('controlKeepDangerous');
            case DisplayType.SUSPICIOUS:
                return this.i18n('controlKeepSuspicious');
            case DisplayType.UNVERIFIED:
                return this.i18n('controlKeepUnverified');
            case DisplayType.INSECURE:
                return this.i18n('controlKeepInsecure');
            case DisplayType.NORMAL:
            case DisplayType.ERROR:
                return '';
            default:
                assertNotReached('Unhandled DisplayType encountered');
        }
    }
    computeDescription_() {
        if (!this.data) {
            return '';
        }
        const data = this.data;
        switch (data.state) {
            case State.kComplete:
                switch (data.dangerType) {
                    case DangerType.kDeepScannedOpenedDangerous:
                        return loadTimeData.getString('deepScannedOpenedDangerousDesc');
                    case DangerType.kDeepScannedFailed:
                        return loadTimeData.getString('deepScannedFailedDesc');
                    case DangerType.kNoApplicableDangerType:
                    case DangerType.kDangerousFile:
                    case DangerType.kDangerousUrl:
                    case DangerType.kDangerousContent:
                    case DangerType.kCookieTheft:
                    case DangerType.kUncommonContent:
                    case DangerType.kDangerousHost:
                    case DangerType.kPotentiallyUnwanted:
                    case DangerType.kAsyncScanning:
                    case DangerType.kAsyncLocalPasswordScanning:
                    case DangerType.kBlockedPasswordProtected:
                    case DangerType.kBlockedTooLarge:
                    case DangerType.kSensitiveContentWarning:
                    case DangerType.kSensitiveContentBlock:
                    case DangerType.kDeepScannedSafe:
                    case DangerType.kBlockedScanFailed:
                    case DangerType.kForcedSaveToGdrive:
                    case DangerType.kForcedSaveToOnedrive:
                        return '';
                    default:
                        assertNotReached('Unhandled DangerType encountered');
                }
            case State.kInsecure:
                return loadTimeData.getString('insecureDownloadDesc');
            case State.kDangerous:
                switch (data.dangerType) {
                    case DangerType.kNoApplicableDangerType:
                        return '';
                    case DangerType.kDangerousFile:
                        return data.safeBrowsingState ===
                            SafeBrowsingState.kNoSafeBrowsing ?
                            loadTimeData.getString('noSafeBrowsingDesc') :
                            loadTimeData.getString('dangerFileDesc');
                    case DangerType.kDangerousUrl:
                    case DangerType.kDangerousContent:
                    case DangerType.kDangerousHost:
                        return loadTimeData.getString('dangerDownloadDesc');
                    case DangerType.kCookieTheft:
                        switch (data.tailoredWarningType) {
                            case TailoredWarningType.kCookieTheft:
                                return loadTimeData.getString('dangerDownloadCookieTheft');
                            case TailoredWarningType.kSuspiciousArchive:
                            case TailoredWarningType.kNoApplicableTailoredWarningType:
                                return loadTimeData.getString('dangerDownloadDesc');
                            default:
                                assertNotReached('Unhandled TailoredWarningType encountered');
                        }
                    case DangerType.kUncommonContent:
                        switch (data.tailoredWarningType) {
                            case TailoredWarningType.kSuspiciousArchive:
                                return loadTimeData.getString('dangerUncommonSuspiciousArchiveDesc');
                            case TailoredWarningType.kCookieTheft:
                            case TailoredWarningType.kNoApplicableTailoredWarningType:
                                return loadTimeData.getString('dangerUncommonDesc');
                            default:
                                assertNotReached('Unhandled TailoredWarningType encountered');
                        }
                    case DangerType.kPotentiallyUnwanted:
                        return loadTimeData.getString('dangerSettingsDesc');
                    case DangerType.kAsyncScanning:
                    case DangerType.kAsyncLocalPasswordScanning:
                    case DangerType.kBlockedPasswordProtected:
                    case DangerType.kBlockedTooLarge:
                        return '';
                    case DangerType.kSensitiveContentWarning:
                        return loadTimeData.getString('sensitiveContentWarningDesc');
                    case DangerType.kSensitiveContentBlock:
                    case DangerType.kDeepScannedFailed:
                    case DangerType.kDeepScannedSafe:
                    case DangerType.kDeepScannedOpenedDangerous:
                    case DangerType.kBlockedScanFailed:
                    case DangerType.kForcedSaveToGdrive:
                    case DangerType.kForcedSaveToOnedrive:
                        return '';
                    default:
                        assertNotReached('Unhandled DangerType encountered');
                }
            case State.kAsyncScanning:
                return loadTimeData.getString('asyncScanningDownloadDesc');
            case State.kPromptForScanning:
                return loadTimeData.getString('promptForScanningDesc');
            case State.kPromptForLocalPasswordScanning:
                return loadTimeData.getString('promptForLocalPasswordScanningDesc');
            case State.kInProgress:
            case State.kPaused: // Fallthrough.
                return data.progressStatusText;
            case State.kInterrupted:
                switch (data.dangerType) {
                    case DangerType.kNoApplicableDangerType:
                    case DangerType.kDangerousFile:
                    case DangerType.kDangerousUrl:
                    case DangerType.kDangerousContent:
                    case DangerType.kDangerousHost:
                    case DangerType.kCookieTheft:
                    case DangerType.kUncommonContent:
                    case DangerType.kPotentiallyUnwanted:
                    case DangerType.kAsyncScanning:
                    case DangerType.kAsyncLocalPasswordScanning:
                        return '';
                    case DangerType.kBlockedPasswordProtected:
                        return loadTimeData.getString('blockedPasswordProtectedDesc');
                    case DangerType.kBlockedTooLarge:
                        return loadTimeData.getString('blockedTooLargeDesc');
                    case DangerType.kSensitiveContentWarning:
                        return '';
                    case DangerType.kSensitiveContentBlock:
                        return loadTimeData.getString('sensitiveContentBlockedDesc');
                    case DangerType.kForcedSaveToOnedrive:
                    case DangerType.kForcedSaveToGdrive:
                        return loadTimeData.getString('forcedSaveToCloudDesc');
                    case DangerType.kDeepScannedFailed:
                    case DangerType.kDeepScannedSafe:
                    case DangerType.kDeepScannedOpenedDangerous:
                    case DangerType.kBlockedScanFailed:
                        return '';
                    default:
                        assertNotReached('Unhandled DangerType encountered');
                }
            case State.kCancelled:
                return '';
            default:
                assertNotReached('Unhandled State encountered');
        }
    }
    computeIconAriaHidden_() {
        return (this.displayType_ === DisplayType.NORMAL ||
            this.displayType_ === DisplayType.ERROR) ?
            'true' :
            'false';
    }
    computeIconAriaLabel_() {
        switch (this.displayType_) {
            case DisplayType.DANGEROUS:
                return this.i18n('accessibleLabelDangerous');
            case DisplayType.INSECURE:
                return this.i18n('accessibleLabelInsecure');
            case DisplayType.UNVERIFIED:
                return this.i18n('accessibleLabelUnverified');
            case DisplayType.SUSPICIOUS:
                return this.i18n('accessibleLabelSuspicious');
            case DisplayType.NORMAL:
            case DisplayType.ERROR:
                return '';
            default:
                assertNotReached('Unhandled DisplayType encountered');
        }
    }
    iconAndDescriptionColor_() {
        switch (this.displayType_) {
            case DisplayType.DANGEROUS:
            case DisplayType.ERROR:
                return 'red';
            case DisplayType.INSECURE:
            case DisplayType.UNVERIFIED:
            case DisplayType.SUSPICIOUS:
                return 'grey';
            case DisplayType.NORMAL:
                return '';
            default:
                assertNotReached('Unhandled DisplayType encountered');
        }
    }
    computeIcon_() {
        if (this.data) {
            switch (this.displayType_) {
                case DisplayType.DANGEROUS:
                    return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                        'downloads:dangerous-filled' :
                        'downloads:dangerous-old';
                case DisplayType.INSECURE:
                case DisplayType.UNVERIFIED:
                case DisplayType.SUSPICIOUS:
                    return 'cr:warning-filled';
                case DisplayType.ERROR:
                    return 'cr:error-filled';
                case DisplayType.NORMAL:
                    break;
                default:
                    assertNotReached('Unhandled DisplayType encountered');
            }
            assert(this.displayType_ === DisplayType.NORMAL);
            const dangerType = this.data.dangerType;
            if (this.isSuspiciousEnterpriseApVerdict_(loadTimeData.getBoolean('requestsApVerdicts'), dangerType)) {
                return 'cr:warning-filled';
            }
            switch (dangerType) {
                case DangerType.kDeepScannedFailed:
                    return 'cr:info-filled';
                case DangerType.kSensitiveContentBlock:
                case DangerType.kBlockedTooLarge:
                case DangerType.kBlockedPasswordProtected:
                case DangerType.kForcedSaveToGdrive:
                case DangerType.kForcedSaveToOnedrive:
                    return 'cr:error-filled';
                case DangerType.kNoApplicableDangerType:
                case DangerType.kDangerousFile:
                case DangerType.kDangerousUrl:
                case DangerType.kDangerousContent:
                case DangerType.kCookieTheft:
                case DangerType.kUncommonContent:
                case DangerType.kDangerousHost:
                case DangerType.kPotentiallyUnwanted:
                case DangerType.kAsyncScanning:
                case DangerType.kAsyncLocalPasswordScanning:
                case DangerType.kSensitiveContentWarning:
                case DangerType.kDeepScannedSafe:
                case DangerType.kDeepScannedOpenedDangerous:
                case DangerType.kBlockedScanFailed:
                    break;
                default:
                    assertNotReached('Unhandled DangerType encountered');
            }
            switch (this.data.state) {
                case State.kAsyncScanning:
                case State.kPromptForScanning:
                case State.kPromptForLocalPasswordScanning:
                    return 'cr:warning-filled';
                case State.kInProgress:
                case State.kCancelled:
                case State.kComplete:
                case State.kPaused:
                case State.kDangerous:
                case State.kInterrupted:
                case State.kInsecure:
                    break;
                default:
                    assertNotReached('Unhandled State encountered');
            }
        }
        if (this.isDangerous_) {
            return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                'downloads:dangerous-filled' :
                'downloads:dangerous-old';
        }
        if (!this.useFileIcon_) {
            return 'cr:draft-filled';
        }
        return '';
    }
    computeIconColor_() {
        if (this.data) {
            return this.iconAndDescriptionColor_();
        }
        if (this.isDangerous_) {
            return 'red';
        }
        if (!this.useFileIcon_) {
            return 'light-grey';
        }
        return '';
    }
    computeIsActive_() {
        if (!this.data) {
            return true;
        }
        if (this.data.fileExternallyRemoved) {
            return false;
        }
        switch (this.data.state) {
            case State.kComplete:
            case State.kInProgress:
                return true;
            case State.kCancelled:
            case State.kInterrupted:
            case State.kPaused:
            case State.kDangerous:
            case State.kInsecure:
            case State.kAsyncScanning:
            case State.kPromptForScanning:
            case State.kPromptForLocalPasswordScanning:
                return false;
            default:
                assertNotReached('Unhandled State encountered');
        }
    }
    computeIsDangerous_() {
        if (!this.data) {
            return false;
        }
        switch (this.data.state) {
            case State.kDangerous:
            case State.kInsecure:
                return true;
            case State.kInProgress:
            case State.kCancelled:
            case State.kComplete:
            case State.kPaused:
            case State.kInterrupted:
            case State.kAsyncScanning:
            case State.kPromptForScanning:
            case State.kPromptForLocalPasswordScanning:
                return false;
            default:
                assertNotReached('Unhandled State encountered');
        }
    }
    computeIsReviewable_() {
        return !!this.data && this.data.isReviewable;
    }
    computePauseOrResumeText_() {
        if (this.data === undefined) {
            return '';
        }
        if (this.data.state === State.kInProgress) {
            return loadTimeData.getString('controlPause');
        }
        if (this.data.resume) {
            return loadTimeData.getString('controlResume');
        }
        return '';
    }
    computeShowRemove_() {
        const canDelete = loadTimeData.getBoolean('allowDeletingHistory');
        const hideRemove = this.isDangerous_ || this.showCancel_ || !canDelete;
        return !hideRemove;
    }
    computeRemoveStyle_() {
        return this.computeShowRemove_() ? '' : 'visibility: hidden';
    }
    computeShowControlsForDangerous_() {
        return !this.isReviewable_ && this.isDangerous_;
    }
    computeShowCancel_() {
        if (!this.data) {
            return false;
        }
        switch (this.data.state) {
            case State.kInProgress:
            case State.kPaused:
                return true;
            case State.kCancelled:
            case State.kComplete:
            case State.kDangerous:
            case State.kInterrupted:
            case State.kInsecure:
            case State.kAsyncScanning:
            case State.kPromptForScanning:
            case State.kPromptForLocalPasswordScanning:
                return false;
            default:
                assertNotReached('Unhandled State encountered');
        }
    }
    computeShowProgress_() {
        if (!this.data) {
            return false;
        }
        switch (this.data.state) {
            case State.kInProgress:
            case State.kCancelled:
            case State.kComplete:
            case State.kPaused:
            case State.kDangerous:
            case State.kInterrupted:
            case State.kInsecure:
                return this.showCancel_ && this.data.percent >= -1;
            case State.kAsyncScanning:
                return true;
            case State.kPromptForScanning:
            case State.kPromptForLocalPasswordScanning:
                return false;
            default:
                assertNotReached('Unhandled State encountered');
        }
    }
    computeShowDeepScan_() {
        if (!this.data) {
            return false;
        }
        switch (this.data.state) {
            case State.kPromptForScanning:
            case State.kPromptForLocalPasswordScanning:
                return true;
            case State.kInProgress:
            case State.kCancelled:
            case State.kComplete:
            case State.kPaused:
            case State.kDangerous:
            case State.kInterrupted:
            case State.kInsecure:
            case State.kAsyncScanning:
                return false;
            default:
                assertNotReached('Unhandled State encountered');
        }
    }
    computeShowOpenAnyway_() {
        if (!this.data) {
            return false;
        }
        switch (this.data.dangerType) {
            case DangerType.kDeepScannedFailed:
                return true;
            case DangerType.kNoApplicableDangerType:
            case DangerType.kDangerousFile:
            case DangerType.kDangerousUrl:
            case DangerType.kDangerousContent:
            case DangerType.kCookieTheft:
            case DangerType.kUncommonContent:
            case DangerType.kDangerousHost:
            case DangerType.kPotentiallyUnwanted:
            case DangerType.kAsyncScanning:
            case DangerType.kAsyncLocalPasswordScanning:
            case DangerType.kBlockedPasswordProtected:
            case DangerType.kBlockedTooLarge:
            case DangerType.kSensitiveContentWarning:
            case DangerType.kSensitiveContentBlock:
            case DangerType.kDeepScannedSafe:
            case DangerType.kDeepScannedOpenedDangerous:
            case DangerType.kBlockedScanFailed:
            case DangerType.kForcedSaveToGdrive:
            case DangerType.kForcedSaveToOnedrive:
                return false;
            default:
                assertNotReached('Unhandled DangerType encountered');
        }
    }
    computeShowActionMenu_() {
        if (!this.data) {
            return false;
        }
        // If any of these actions are available, the action menu must be shown
        // because they don't have corresponding "quick actions".
        return !!this.pauseOrResumeText_ || // pause-or-resume
            this.computeShowControlsForDangerous_() || // save-dangerous
            this.data.retry || // retry
            this.showDeepScan_ || // deep-scan and bypass-deep-scan
            this.showCancel_ || // cancel
            this.showOpenAnyway_ || // open-anyway
            this.isReviewable_; // review-dangerous
    }
    computeShowCopyDownloadLink_() {
        return !!(this.data && this.data.url);
    }
    computeShowQuickRemove_() {
        return this.isReviewable_ || this.computeShowRemove_() ||
            this.computeShowControlsForDangerous_();
    }
    computeShowQuickShow_() {
        // Only show the quick "show in folder" button if the full action menu
        // is hidden. If the action menu is shown, hide the quick "show in folder"
        // button to save space since this action will have an entry in the menu
        // anyway.
        return this.computeHasShowInFolderLink_() && !this.computeShowActionMenu_();
    }
    computeTag_() {
        if (!this.data) {
            return '';
        }
        switch (this.data.state) {
            case State.kCancelled:
                return loadTimeData.getString('statusCancelled');
            case State.kInterrupted:
                return this.data.lastReasonText;
            case State.kComplete:
                return this.data.fileExternallyRemoved ?
                    loadTimeData.getString('statusRemoved') :
                    '';
            case State.kInProgress:
            case State.kPaused:
            case State.kDangerous:
            case State.kInsecure:
            case State.kAsyncScanning:
            case State.kPromptForScanning:
            case State.kPromptForLocalPasswordScanning:
                return '';
            default:
                assertNotReached('Unhandled State encountered');
        }
    }
    isIndeterminate_() {
        if (!this.data || this.data.percent === -1) {
            return true;
        }
        switch (this.data.state) {
            case State.kAsyncScanning:
                return true;
            case State.kInProgress:
            case State.kCancelled:
            case State.kComplete:
            case State.kPaused:
            case State.kDangerous:
            case State.kInterrupted:
            case State.kInsecure:
            case State.kPromptForScanning:
            case State.kPromptForLocalPasswordScanning:
                return false;
            default:
                assertNotReached('Unhandled State encountered');
        }
    }
    updateControlledBy_() {
        const controlledBy = this.computeControlledBy_();
        this.$.controlledBy.innerHTML = sanitizeInnerHtml(controlledBy);
        if (controlledBy) {
            const link = this.shadowRoot.querySelector('#controlledBy a');
            link.setAttribute('focus-row-control', '');
            link.setAttribute('focus-type', 'controlledBy');
        }
    }
    computeInitiatorOriginText_() {
        if (!this.data || this.data.displayInitiatorOrigin.length === 0) {
            return '';
        }
        return loadTimeData.getStringF('initiatorLine', this.data.displayInitiatorOrigin);
    }
    updateUiForStateChange_() {
        const removeFileUrlLinks = () => {
            this.$.fileLink.removeAttribute('href');
        };
        if (!this.data) {
            return;
        }
        // Returns whether to use the file icon, and additionally clears file url
        // links if necessary.
        const mayUseFileIcon = () => {
            const use = this.displayType_ === DisplayType.NORMAL;
            if (!use) {
                removeFileUrlLinks();
            }
            return use;
        };
        this.useFileIcon_ = mayUseFileIcon();
        if (!this.useFileIcon_) {
            return;
        }
        // Remove file url links if a url was not supplied.
        if (!this.data.url) {
            removeFileUrlLinks();
        }
        const path = this.data.filePath;
        IconLoaderImpl.getInstance()
            .loadIcon(this.$.fileIcon, path)
            .then(success => {
            if (!!this.data && path === this.data.filePath &&
                this.data.state !== State.kAsyncScanning) {
                // Check again if we may use the file icon, to avoid a race between
                // loading the icon and determining the proper danger type.
                this.useFileIcon_ = mayUseFileIcon() && success;
            }
        });
    }
    // 
    onCopyDownloadLinkClick_(e) {
        if (!this.data || !this.data.url) {
            return;
        }
        let copied = true;
        navigator.clipboard.writeText(this.data.url)
            .catch(error => {
            console.error('Unable to copy to clipboard:', error);
            copied = false;
        })
            .finally(() => this.displayCopyToast_(e, copied));
    }
    onMoreActionsClick_() {
        const button = this.getMoreActionsButton();
        // The menu button is not always shown, but if this handler is invoked, then
        // it must be.
        assert(!!button);
        this.getMoreActionsMenu().showAt(button);
    }
    // Handles the "x" remove button which can be different actions depending on
    // the state of the download.
    onQuickRemoveClick_(e) {
        if (this.isReviewable_ || this.computeShowControlsForDangerous_()) {
            this.onDiscardDangerousClick_(e);
            return;
        }
        assert(this.computeShowRemove_());
        this.onRemoveClick_(e);
    }
    onCancelClick_() {
        this.restoreFocusAfterCancel_ = true;
        this.browserProxy_.handler.cancel(this.dataId_());
        getAnnouncerInstance().announce(loadTimeData.getString('screenreaderCanceled'));
        this.getMoreActionsMenu().close();
    }
    onDiscardDangerousClick_(e) {
        this.browserProxy_.handler.discardDangerous(this.dataId_());
        this.displayRemovedToast_(/*canUndo=*/ false, e);
        this.getMoreActionsMenu().close();
    }
    dataId_() {
        return this.data ? this.data.id : '';
    }
    onDeepScanClick_() {
        this.browserProxy_.handler.deepScan(this.dataId_());
        this.getMoreActionsMenu().close();
    }
    onBypassDeepScanClick_() {
        this.browserProxy_.handler.bypassDeepScanRequiringGesture(this.dataId_());
        this.getMoreActionsMenu().close();
    }
    onReviewDangerousClick_() {
        this.browserProxy_.handler.reviewDangerousRequiringGesture(this.dataId_());
        this.getMoreActionsMenu().close();
    }
    onOpenAnywayClick_() {
        this.browserProxy_.handler.openFileRequiringGesture(this.dataId_());
        this.getMoreActionsMenu().close();
    }
    onDragstart_(e) {
        e.preventDefault();
        this.browserProxy_.handler.drag(this.dataId_());
    }
    onFileLinkClick_(e) {
        e.preventDefault();
        this.browserProxy_.handler.openFileRequiringGesture(this.dataId_());
    }
    onUrlClick_() {
        if (!this.data || !this.data.url) {
            return;
        }
        chrome.send('metricsHandler:recordAction', ['Downloads_OpenUrlOfDownloadedItem']);
    }
    doPause_() {
        this.browserProxy_.handler.pause(this.dataId_());
        getAnnouncerInstance().announce(loadTimeData.getString('screenreaderPaused'));
    }
    doResume_() {
        this.browserProxy_.handler.resume(this.dataId_());
        getAnnouncerInstance().announce(loadTimeData.getString('screenreaderResumed'));
    }
    onPauseOrResumeClick_() {
        if (this.data && this.data.state === State.kInProgress) {
            this.doPause_();
        }
        else {
            this.doResume_();
        }
        this.getMoreActionsMenu().close();
    }
    displayCopyToast_(e, copied) {
        if (!this.data || !this.data.url) {
            return;
        }
        if (copied) {
            let pieces;
            if (this.data.url.startsWith('data:')) {
                pieces = [{
                        collapsible: false,
                        value: loadTimeData.getString('toastCopiedLink'),
                        arg: '',
                    }];
            }
            else {
                pieces = loadTimeData.getSubstitutedStringPieces(loadTimeData.getString('toastCopiedDownloadLink'), this.data.url);
            }
            pieces.forEach(p => {
                p.collapsible = !!p.arg;
            });
            getToastManager().showForStringPieces(pieces, /*hideSlotted=*/ true);
        }
        else {
            getToastManager().show(loadTimeData.getString('toastCopyDownloadLinkFailed'), 
            /*hideSlotted=*/ true);
        }
        e.stopPropagation();
        e.preventDefault();
    }
    displayRemovedToast_(canUndo, e) {
        const templateStringId = (this.displayType_ === DisplayType.NORMAL && this.completelyOnDisk_) ?
            'toastDeletedFromHistoryStillOnDevice' :
            'toastDeletedFromHistory';
        const filename = this.data ? this.data.fileName : '';
        const pieces = loadTimeData.getSubstitutedStringPieces(loadTimeData.getString(templateStringId), filename);
        pieces.forEach(p => {
            // Make the file name collapsible.
            p.collapsible = !!p.arg;
        });
        getToastManager().showForStringPieces(pieces, /*hideSlotted=*/ !canUndo);
        // Stop propagating a click to the document to remove toast.
        e.stopPropagation();
        e.preventDefault();
    }
    onRemoveClick_(e) {
        assert(this.data);
        this.browserProxy_.handler.remove(this.data.id);
        const canUndo = !this.data.isDangerous && !this.data.isInsecure;
        this.displayRemovedToast_(canUndo, e);
        this.getMoreActionsMenu().close();
    }
    onRetryClick_() {
        this.browserProxy_.handler.retryDownload(this.dataId_());
        this.getMoreActionsMenu().close();
    }
    notifySaveDangerousClick_() {
        this.fire('save-dangerous-click', { id: this.dataId_() });
    }
    onSaveDangerousClick_() {
        this.getMoreActionsMenu().close();
        if (this.displayType_ === DisplayType.DANGEROUS) {
            this.notifySaveDangerousClick_();
            return;
        }
        // "Suspicious" types which show up in grey can be validated directly.
        // This maps each such display type to its applicable screenreader
        // announcement string id.
        const SAVED_FROM_PAGE_TYPES_ANNOUNCEMENTS = new Map([
            [DisplayType.SUSPICIOUS, 'screenreaderSavedSuspicious'],
            [DisplayType.UNVERIFIED, 'screenreaderSavedUnverified'],
            [DisplayType.INSECURE, 'screenreaderSavedInsecure'],
        ]);
        assert(SAVED_FROM_PAGE_TYPES_ANNOUNCEMENTS.has(this.displayType_));
        assert(this.data);
        this.browserProxy_.handler.saveSuspiciousRequiringGesture(this.data.id);
        const announcement = loadTimeData.getString(SAVED_FROM_PAGE_TYPES_ANNOUNCEMENTS.get(this.displayType_));
        getAnnouncerInstance().announce(announcement);
    }
    onShowClick_() {
        assert(this.data);
        this.browserProxy_.handler.show(this.data.id);
        this.getMoreActionsMenu().close();
    }
    restoreFocusAfterCancelIfNeeded_() {
        if (!this.restoreFocusAfterCancel_) {
            return;
        }
        this.restoreFocusAfterCancel_ = false;
        setTimeout(() => {
            const element = this.getFocusRow().getFirstFocusable('retry');
            if (element) {
                element.focus();
            }
        });
    }
}
customElements.define(DownloadsItemElement.is, DownloadsItemElement);
