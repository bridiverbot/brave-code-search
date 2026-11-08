// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './icons.html.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_progress/cr_progress.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { isRTL } from 'chrome://resources/js/util.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { SaveToDriveBubbleRequestType, SaveToDriveState } from '../constants.js';
import { getCss } from './viewer_save_to_drive_bubble.css.js';
import { getHtml } from './viewer_save_to_drive_bubble.html.js';
const DISMISS_TIMEOUT_MS = 5000;
const ViewerSaveToDriveBubbleElementBase = I18nMixinLit(CrLitElement);
export class ViewerSaveToDriveBubbleElement extends ViewerSaveToDriveBubbleElementBase {
    static get is() {
        return 'viewer-save-to-drive-bubble';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            docTitle: { type: String },
            progress: { type: Object },
            state: { type: String },
            description_: {
                type: String,
                state: true,
            },
            dialogTitle_: {
                type: String,
                state: true,
            },
        };
    }
    #docTitle_accessor_storage = '';
    get docTitle() { return this.#docTitle_accessor_storage; }
    set docTitle(value) { this.#docTitle_accessor_storage = value; }
    #progress_accessor_storage = {
        status: chrome.pdfViewerPrivate.SaveToDriveStatus.NOT_STARTED,
        errorType: chrome.pdfViewerPrivate.SaveToDriveErrorType.NO_ERROR,
    };
    get progress() { return this.#progress_accessor_storage; }
    set progress(value) { this.#progress_accessor_storage = value; }
    #state_accessor_storage = SaveToDriveState.UNINITIALIZED;
    get state() { return this.#state_accessor_storage; }
    set state(value) { this.#state_accessor_storage = value; }
    #description__accessor_storage = sanitizeInnerHtml('');
    get description_() { return this.#description__accessor_storage; }
    set description_(value) { this.#description__accessor_storage = value; }
    #dialogTitle__accessor_storage = '';
    get dialogTitle_() { return this.#dialogTitle__accessor_storage; }
    set dialogTitle_(value) { this.#dialogTitle__accessor_storage = value; }
    anchor_ = null;
    eventTracker_ = new EventTracker();
    dismissTimeoutId_ = null;
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('state')) {
            this.onStateChanged_();
        }
    }
    // If `autoDismiss` is true, the bubble will be automatically dismissed after
    // 5 seconds. However, if the bubble is already open manually, the timeout
    // will be ignored.
    showAt(anchor, autoDismiss = false) {
        if (this.$.dialog.open && autoDismiss && !this.dismissTimeoutId_) {
            return;
        }
        this.$.dialog.show();
        this.anchor_ = anchor;
        this.positionDialog_();
        this.$.dialog.focus();
        this.eventTracker_.remove(window, 'resize');
        this.eventTracker_.add(window, 'resize', this.positionDialog_.bind(this));
        if (autoDismiss) {
            this.setDismissTimeout_();
        }
    }
    getFileName_() {
        return this.progress.fileName ?? this.docTitle;
    }
    getFileSizeBytes_() {
        return this.progress.fileSizeBytes ?? 0;
    }
    getMetadata_() {
        return this.progress.fileMetadata ?? '';
    }
    getUploadedBytes_() {
        return this.progress.uploadedBytes ?? 0;
    }
    isSaveToDriveState_(state) {
        return this.state === state;
    }
    onRequestButtonClick_() {
        let requestType;
        switch (this.state) {
            case SaveToDriveState.UPLOADING:
                requestType = SaveToDriveBubbleRequestType.CANCEL_UPLOAD;
                break;
            case SaveToDriveState.STORAGE_FULL_ERROR:
                requestType = SaveToDriveBubbleRequestType.MANAGE_STORAGE;
                break;
            case SaveToDriveState.SUCCESS:
                requestType = SaveToDriveBubbleRequestType.OPEN_IN_DRIVE;
                break;
            case SaveToDriveState.CONNECTION_ERROR:
            case SaveToDriveState.SESSION_TIMEOUT_ERROR:
                requestType = SaveToDriveBubbleRequestType.RETRY;
                break;
            default:
                assertNotReached(`Invalid bubble action: ${this.state}`);
        }
        this.fire('save-to-drive-bubble-action', requestType);
        this.$.dialog.close();
    }
    onCloseClick_() {
        this.fire('save-to-drive-bubble-action', SaveToDriveBubbleRequestType.DIALOG_CLOSED);
        this.$.dialog.close();
    }
    onDialogClose_() {
        this.eventTracker_.removeAll();
        if (this.dismissTimeoutId_) {
            clearTimeout(this.dismissTimeoutId_);
            this.dismissTimeoutId_ = null;
        }
    }
    onFocusout_(e) {
        if (this.$.dialog.contains(e.relatedTarget) ||
            e.composedPath()[0] !== this.$.dialog) {
            return;
        }
        this.$.dialog.close();
    }
    onStateChanged_() {
        this.updateDescription_();
        this.updateDialogTitle_();
    }
    positionDialog_() {
        if (!this.anchor_ || !this.$.dialog.open) {
            return;
        }
        const anchorBoundingClientRect = this.anchor_.getBoundingClientRect();
        if (isRTL()) {
            this.$.dialog.style.right = `${window.innerWidth - anchorBoundingClientRect.left -
                this.$.dialog.offsetWidth}px`;
        }
        else {
            this.$.dialog.style.left = `${this.anchor_.offsetLeft + this.anchor_.offsetWidth -
                this.$.dialog.offsetWidth}px`;
        }
        // By default, align the dialog below the anchor. If the window is too
        // small, show it above the anchor.
        if (anchorBoundingClientRect.bottom + this.$.dialog.offsetHeight >=
            window.innerHeight) {
            this.$.dialog.style.top =
                `${this.anchor_.offsetTop - this.$.dialog.offsetHeight}px`;
        }
        else {
            this.$.dialog.style.top =
                `${this.anchor_.offsetTop + this.anchor_.offsetHeight}px`;
        }
    }
    setDismissTimeout_() {
        this.dismissTimeoutId_ = setTimeout(() => {
            this.dismissTimeoutId_ = null;
            this.$.dialog.close();
        }, DISMISS_TIMEOUT_MS);
    }
    updateDescription_() {
        switch (this.state) {
            case SaveToDriveState.UNINITIALIZED:
            case SaveToDriveState.UPLOADING:
                this.description_ = window.trustedTypes.emptyHTML;
                break;
            case SaveToDriveState.SUCCESS:
                this.description_ =
                    this.i18nAdvanced('saveToDriveDialogSuccessMessage', {
                        tags: ['b'],
                        substitutions: [
                            this.progress.parentFolderName ?? '',
                        ],
                    });
                break;
            case SaveToDriveState.CONNECTION_ERROR:
                this.description_ =
                    this.i18nAdvanced('saveToDriveDialogConnectionErrorMessage');
                break;
            case SaveToDriveState.STORAGE_FULL_ERROR:
                this.description_ =
                    this.i18nAdvanced('saveToDriveDialogStorageFullErrorMessage');
                break;
            case SaveToDriveState.SESSION_TIMEOUT_ERROR:
                this.description_ =
                    this.i18nAdvanced('saveToDriveDialogSessionTimeoutErrorMessage');
                break;
            case SaveToDriveState.UNKNOWN_ERROR:
                this.description_ =
                    this.i18nAdvanced('saveToDriveDialogUnknownErrorMessage', {
                        tags: ['a'],
                        substitutions: [
                            this.i18n('pdfSaveToDriveHelpCenterURL'),
                        ],
                    });
                break;
            default:
                assertNotReached(`Invalid state for description: ${this.state}`);
        }
    }
    updateDialogTitle_() {
        switch (this.state) {
            case SaveToDriveState.UNINITIALIZED:
                this.dialogTitle_ = this.state;
                break;
            case SaveToDriveState.UPLOADING:
                this.dialogTitle_ = this.i18n('saveToDriveDialogUploadingTitle');
                break;
            case SaveToDriveState.SUCCESS:
                this.dialogTitle_ = this.i18n('saveToDriveDialogSuccessTitle');
                break;
            case SaveToDriveState.CONNECTION_ERROR:
            case SaveToDriveState.STORAGE_FULL_ERROR:
            case SaveToDriveState.SESSION_TIMEOUT_ERROR:
            case SaveToDriveState.UNKNOWN_ERROR:
                this.dialogTitle_ = this.i18n('saveToDriveDialogErrorTitle');
                break;
            default:
                assertNotReached(`Invalid state for dialog title: ${this.state}`);
        }
    }
}
customElements.define(ViewerSaveToDriveBubbleElement.is, ViewerSaveToDriveBubbleElement);
