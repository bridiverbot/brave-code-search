// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { processFile, SUPPORTED_FILE_TYPES } from './image_processor.js';
import { getCss } from './lens_form.css.js';
import { getHtml } from './lens_form.html.js';
/** Lens service endpoint for the Upload by File action. */
const SCOTTY_UPLOAD_FILE_ACTION = 'https://lens.google.com/upload';
const DIRECT_UPLOAD_FILE_ACTION = 'https://lens.google.com/v3/upload';
/** Entrypoint for the upload by file action. */
const UPLOAD_FILE_ENTRYPOINT = 'cntpubb';
/** Lens service endpoint for the Upload by URL action. */
const UPLOAD_BY_URL_ACTION = 'https://lens.google.com/uploadbyurl';
/** Entrypoint for the upload by url action. */
const UPLOAD_URL_ENTRYPOINT = 'cntpubu';
/** Rendering environment for the NTP searchbox entrypoint. */
const RENDERING_ENVIRONMENT = 'df';
/** The value of Surface.CHROMIUM expected by Lens Web. */
const CHROMIUM_SURFACE = '4';
/** Max length for encoded input URL. */
const MAX_URL_LENGTH = 2000;
/** Maximum file size support by Lens in bytes. */
const MAX_FILE_SIZE_BYTES = 20 * 1024 * 1024; // 20MB
export var LensErrorType;
(function (LensErrorType) {
    // The user attempted to upload multiple files at the same time.
    LensErrorType[LensErrorType["MULTIPLE_FILES"] = 0] = "MULTIPLE_FILES";
    // The user didn't provide a file.
    LensErrorType[LensErrorType["NO_FILE"] = 1] = "NO_FILE";
    // The user provided a file type that is not supported.
    LensErrorType[LensErrorType["FILE_TYPE"] = 2] = "FILE_TYPE";
    // The user provided a file that is too large.
    LensErrorType[LensErrorType["FILE_SIZE"] = 3] = "FILE_SIZE";
    // The user provided a url with an invalid or missing scheme.
    LensErrorType[LensErrorType["INVALID_SCHEME"] = 4] = "INVALID_SCHEME";
    // The user provided a string that does not parse to a valid url.
    LensErrorType[LensErrorType["INVALID_URL"] = 5] = "INVALID_URL";
    // The user provided a string that was too long.
    LensErrorType[LensErrorType["LENGTH_TOO_GREAT"] = 6] = "LENGTH_TOO_GREAT";
})(LensErrorType || (LensErrorType = {}));
export var LensSubmitType;
(function (LensSubmitType) {
    LensSubmitType[LensSubmitType["FILE"] = 0] = "FILE";
    LensSubmitType[LensSubmitType["URL"] = 1] = "URL";
})(LensSubmitType || (LensSubmitType = {}));
export class LensFormElement extends CrLitElement {
    static get is() {
        return 'ntp-lens-form';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            supportedFileTypes_: { type: String },
            renderingEnvironment_: { type: String },
            chromiumSurface_: { type: String },
            uploadFileAction_: { type: String },
            uploadUrlAction_: { type: String },
            uploadUrl_: { type: String },
            uploadUrlEntrypoint_: { type: String },
            language_: { type: String },
            clientData_: { type: String },
            startTime_: { type: String },
        };
    }
    #supportedFileTypes__accessor_storage = SUPPORTED_FILE_TYPES.join(',');
    get supportedFileTypes_() { return this.#supportedFileTypes__accessor_storage; }
    set supportedFileTypes_(value) { this.#supportedFileTypes__accessor_storage = value; }
    #renderingEnvironment__accessor_storage = RENDERING_ENVIRONMENT;
    get renderingEnvironment_() { return this.#renderingEnvironment__accessor_storage; }
    set renderingEnvironment_(value) { this.#renderingEnvironment__accessor_storage = value; }
    #chromiumSurface__accessor_storage = CHROMIUM_SURFACE;
    get chromiumSurface_() { return this.#chromiumSurface__accessor_storage; }
    set chromiumSurface_(value) { this.#chromiumSurface__accessor_storage = value; }
    #language__accessor_storage = window.navigator.language;
    get language_() { return this.#language__accessor_storage; }
    set language_(value) { this.#language__accessor_storage = value; }
    #uploadFileAction__accessor_storage = SCOTTY_UPLOAD_FILE_ACTION;
    get uploadFileAction_() { return this.#uploadFileAction__accessor_storage; }
    set uploadFileAction_(value) { this.#uploadFileAction__accessor_storage = value; }
    #uploadUrlAction__accessor_storage = UPLOAD_BY_URL_ACTION;
    get uploadUrlAction_() { return this.#uploadUrlAction__accessor_storage; }
    set uploadUrlAction_(value) { this.#uploadUrlAction__accessor_storage = value; }
    #uploadUrl__accessor_storage = '';
    get uploadUrl_() { return this.#uploadUrl__accessor_storage; }
    set uploadUrl_(value) { this.#uploadUrl__accessor_storage = value; }
    #uploadUrlEntrypoint__accessor_storage = UPLOAD_URL_ENTRYPOINT;
    get uploadUrlEntrypoint_() { return this.#uploadUrlEntrypoint__accessor_storage; }
    set uploadUrlEntrypoint_(value) { this.#uploadUrlEntrypoint__accessor_storage = value; }
    #startTime__accessor_storage = null;
    get startTime_() { return this.#startTime__accessor_storage; }
    set startTime_(value) { this.#startTime__accessor_storage = value; }
    #clientData__accessor_storage = loadTimeData.getString('searchboxLensVariations');
    get clientData_() { return this.#clientData__accessor_storage; }
    set clientData_(value) { this.#clientData__accessor_storage = value; }
    openSystemFilePicker() {
        this.$.fileInput.click();
    }
    onFileInputChange_() {
        const fileList = this.$.fileInput.files;
        if (fileList) {
            this.submitFileList(fileList);
        }
    }
    submitFileList(files) {
        if (files.length > 1) {
            this.dispatchError_(LensErrorType.MULTIPLE_FILES);
            return;
        }
        const file = files[0];
        if (!file) {
            this.dispatchError_(LensErrorType.NO_FILE);
            return;
        }
        return this.submitFile_(file);
    }
    async submitFile_(file) {
        if (!SUPPORTED_FILE_TYPES.includes(file.type)) {
            this.dispatchError_(LensErrorType.FILE_TYPE);
            return;
        }
        if (file.size > MAX_FILE_SIZE_BYTES) {
            this.dispatchError_(LensErrorType.FILE_SIZE);
            return;
        }
        this.uploadFileAction_ = DIRECT_UPLOAD_FILE_ACTION;
        this.startTime_ = Date.now().toString();
        let processedFile = { processedFile: file };
        processedFile = await processFile(file);
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(processedFile.processedFile);
        this.$.fileInput.files = dataTransfer.files;
        const action = new URL(this.uploadFileAction_);
        action.searchParams.set('ep', UPLOAD_FILE_ENTRYPOINT);
        action.searchParams.set('hl', this.language_);
        action.searchParams.set('st', this.startTime_);
        action.searchParams.set('cd', this.clientData_);
        action.searchParams.set('re', RENDERING_ENVIRONMENT);
        action.searchParams.set('s', CHROMIUM_SURFACE);
        action.searchParams.set('vph', processedFile.imageHeight ? processedFile.imageHeight.toString() : '');
        action.searchParams.set('vpw', processedFile.imageWidth ? processedFile.imageWidth.toString() : '');
        this.uploadFileAction_ = action.toString();
        await this.updateComplete;
        this.dispatchLoading_(LensSubmitType.FILE);
        this.$.fileForm.submit();
    }
    async submitUrl(urlString) {
        if (!urlString.startsWith('http://') && !urlString.startsWith('https://')) {
            this.dispatchError_(LensErrorType.INVALID_SCHEME);
            return;
        }
        let encodedUri;
        try {
            encodedUri = encodeURI(urlString);
            new URL(urlString); // Throws an error if fails to parse.
        }
        catch (e) {
            this.dispatchError_(LensErrorType.INVALID_URL);
            return;
        }
        if (encodedUri.length > MAX_URL_LENGTH) {
            this.dispatchError_(LensErrorType.LENGTH_TOO_GREAT);
            return;
        }
        this.uploadUrl_ = encodedUri;
        this.startTime_ = Date.now().toString();
        await this.updateComplete;
        this.dispatchLoading_(LensSubmitType.URL);
        this.$.urlForm.submit();
    }
    dispatchLoading_(submitType) {
        this.dispatchEvent(new CustomEvent('loading', {
            bubbles: false,
            composed: false,
            detail: submitType,
        }));
    }
    dispatchError_(errorType) {
        this.dispatchEvent(new CustomEvent('error', {
            bubbles: false,
            composed: false,
            detail: errorType,
        }));
    }
}
customElements.define(LensFormElement.is, LensFormElement);
