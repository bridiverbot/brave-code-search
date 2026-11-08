// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './custom_profile_image_row.css.js';
import { getHtml } from './custom_profile_image_row.html.js';
/** Shared custom-profile image control with a session-only local preview. */
export class BrCustomProfileImageRowElement extends CrLitElement {
    static get is() {
        return 'br-custom-profile-image-row';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            hideTitle: {
                type: Boolean,
                attribute: 'hide-title',
                reflect: true,
            },
            hasValidationError_: { type: Boolean, state: true },
            localPreviewUrl_: { type: String, state: true },
        };
    }
    #hideTitle_accessor_storage = false;
    get hideTitle() { return this.#hideTitle_accessor_storage; }
    set hideTitle(value) { this.#hideTitle_accessor_storage = value; }
    #hasValidationError__accessor_storage = false;
    get hasValidationError_() { return this.#hasValidationError__accessor_storage; }
    set hasValidationError_(value) { this.#hasValidationError__accessor_storage = value; }
    #localPreviewUrl__accessor_storage = '';
    get localPreviewUrl_() { return this.#localPreviewUrl__accessor_storage; }
    set localPreviewUrl_(value) { this.#localPreviewUrl__accessor_storage = value; }
    uploadAttemptId_ = 0;
    hasPreview_() {
        return this.localPreviewUrl_ !== '';
    }
    actionLabel_() {
        return loadTimeData.getString(this.hasPreview_()
            ? "CUSTOM_PROFILE_IMAGE_REPLACE_ACTION" /* S.CUSTOM_PROFILE_IMAGE_REPLACE_ACTION */ : "CUSTOM_PROFILE_IMAGE_UPLOAD_ACTION" /* S.CUSTOM_PROFILE_IMAGE_UPLOAD_ACTION */);
    }
    actionTooltip_() {
        return loadTimeData.getString(this.hasPreview_()
            ? "CUSTOM_PROFILE_IMAGE_REPLACE_TOOLTIP" /* S.CUSTOM_PROFILE_IMAGE_REPLACE_TOOLTIP */ : "CUSTOM_PROFILE_IMAGE_UPLOAD_TOOLTIP" /* S.CUSTOM_PROFILE_IMAGE_UPLOAD_TOOLTIP */);
    }
    disconnectedCallback() {
        this.clearLocalPreview_();
        super.disconnectedCallback();
    }
    onUploadClick_() {
        this.$.fileInput.click();
    }
    onRemoveClick_() {
        this.clearLocalPreview_();
    }
    onFileChange_(event) {
        const input = event.target;
        const file = input.files?.[0];
        input.value = '';
        if (file) {
            void this.replaceLocalPreview_(file);
        }
    }
    clearLocalPreview_() {
        ++this.uploadAttemptId_;
        this.hasValidationError_ = false;
        this.revokeLocalPreviewUrl_();
    }
    async replaceLocalPreview_(file) {
        const uploadAttemptId = ++this.uploadAttemptId_;
        if (!file.type.toLowerCase().startsWith('image/')) {
            this.showValidationError_(uploadAttemptId);
            return;
        }
        const previewUrl = URL.createObjectURL(file);
        const image = new Image();
        image.src = previewUrl;
        try {
            await image.decode();
        }
        catch {
            URL.revokeObjectURL(previewUrl);
            this.showValidationError_(uploadAttemptId);
            return;
        }
        if (!this.isConnected || uploadAttemptId !== this.uploadAttemptId_) {
            URL.revokeObjectURL(previewUrl);
            return;
        }
        this.revokeLocalPreviewUrl_();
        this.localPreviewUrl_ = previewUrl;
        this.hasValidationError_ = false;
    }
    showValidationError_(uploadAttemptId) {
        if (!this.isConnected || uploadAttemptId !== this.uploadAttemptId_) {
            return;
        }
        this.hasValidationError_ = true;
    }
    revokeLocalPreviewUrl_() {
        if (!this.localPreviewUrl_) {
            return;
        }
        URL.revokeObjectURL(this.localPreviewUrl_);
        this.localPreviewUrl_ = '';
    }
}
customElements.define(BrCustomProfileImageRowElement.is, BrCustomProfileImageRowElement);
