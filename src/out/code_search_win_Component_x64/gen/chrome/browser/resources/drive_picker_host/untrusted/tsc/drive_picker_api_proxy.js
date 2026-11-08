// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome-untrusted://resources/js/assert.js';
import { PromiseResolver } from 'chrome-untrusted://resources/js/promise_resolver.js';
import { getTrustedScriptURL } from 'chrome-untrusted://resources/js/static_types.js';
import { DrivePickerError } from './drive_picker_result_handler.mojom-webui.js';
import { DRIVE_THUMBNAIL_BASE_URL, DRIVE_THUMBNAIL_ID_PARAM_PREFIX, DRIVE_THUMBNAIL_SIZE_PARAM, DrivePickerSanitizer, SanitizationError } from './sanitizer.js';
export class DrivePickerApiProxyImpl {
    gapiLoadResolver_ = null;
    onError_() {
        if (this.gapiLoadResolver_) {
            this.gapiLoadResolver_.reject();
            this.gapiLoadResolver_ = null;
        }
    }
    loadPicker_() {
        window.gapi.load('picker', {
            callback: () => {
                assert(this.gapiLoadResolver_);
                this.gapiLoadResolver_.resolve();
            },
            onerror: () => {
                this.onError_();
            },
        });
    }
    pickerActive_ = false;
    ensureGapiLoaded_() {
        if (this.gapiLoadResolver_) {
            return this.gapiLoadResolver_.promise;
        }
        this.gapiLoadResolver_ = new PromiseResolver();
        if (window.gapi) {
            this.gapiLoadResolver_.resolve();
            return this.gapiLoadResolver_.promise;
        }
        if (!window.gapi) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = getTrustedScriptURL `https://apis.google.com/js/api.js`;
            script.onerror = () => {
                this.onError_();
            };
            script.onload = () => {
                this.loadPicker_();
            };
            document.head.appendChild(script);
        }
        else {
            this.loadPicker_();
        }
        return this.gapiLoadResolver_.promise;
    }
    async showPicker(oauthToken, apiKey, appId) {
        if (this.pickerActive_) {
            throw DrivePickerError.kAlreadyActive;
        }
        try {
            await this.ensureGapiLoaded_();
        }
        catch (e) {
            throw DrivePickerError.kApiLoadFailure;
        }
        return new Promise((resolve, reject) => {
            this.pickerActive_ = true;
            const view = new google.picker.DocsView(google.picker.ViewId.DOCS);
            const picker = new google.picker.PickerBuilder()
                .addView(view)
                .setOAuthToken(oauthToken)
                .setDeveloperKey(apiKey)
                .setAppId(appId)
                // The origin is set to chrome://drive-picker-host to
                // match the trusted host's origin. This is required for
                // Drive Picker to appear since untrusted content is
                // blocked by Chrome.
                .setOrigin('chrome://drive-picker-host')
                .setSize(window.innerWidth, window.innerHeight)
                .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
                .setCallback((data) => {
                const action = data[google.picker.Response.ACTION];
                if (action === google.picker.Action.CANCEL) {
                    this.pickerActive_ = false;
                    resolve('CANCEL');
                    return;
                }
                if (action === google.picker.Action.PICKED) {
                    this.pickerActive_ = false;
                    try {
                        resolve(this.handleSelection_(data));
                    }
                    catch (e) {
                        reject(e);
                    }
                }
            })
                .build();
            picker.setVisible(true);
        });
    }
    handleSelection_(data) {
        const documents = data[google.picker.Response.DOCUMENTS];
        if (!Array.isArray(documents)) {
            throw DrivePickerError.kInvalidResponse;
        }
        const sanitizedFiles = [];
        const pickerKeys = {
            ID: google.picker.Document.ID,
            MIME_TYPE: google.picker.Document.MIME_TYPE,
            NAME: google.picker.Document.NAME,
            TYPE: google.picker.Document.TYPE,
            SIZE_BYTES: 'sizeBytes',
            RESOURCE_KEY: 'resourceKey',
            ICON_URL: google.picker.Document.ICON_URL,
        };
        // Note: 'file' is used as a string literal instead of
        // google.picker.Type.FILE, because FILE is not defined on
        // the google.picker.Type JS API object.
        const allowedTypes = new Set([
            google.picker.Type.DOCUMENT,
            'file',
            google.picker.Type.PHOTO,
            google.picker.Type.VIDEO,
        ]);
        for (const doc of documents) {
            try {
                const docObj = doc;
                const id = docObj['id'];
                const type = docObj['type'];
                // The `thumbnailUrl` field is not returned for photos or videos that
                // are owned in the user's Google Drive. Therefore, we need to create
                // our own `thumbnailUrl` by constructing it from the file ID.
                const thumbnailUrl = (type === 'photo' || type === 'video') ?
                    `${DRIVE_THUMBNAIL_BASE_URL}?${DRIVE_THUMBNAIL_SIZE_PARAM}${DRIVE_THUMBNAIL_ID_PARAM_PREFIX}${id}` :
                    null;
                const sanitized = DrivePickerSanitizer.sanitizeDocument(docObj, pickerKeys, thumbnailUrl, allowedTypes);
                sanitizedFiles.push(sanitized);
            }
            catch (e) {
                if (e instanceof Error) {
                    const errorCode = Number(e.message);
                    throw this.mapSanitizationError_(errorCode);
                }
                else {
                    throw DrivePickerError.kInvalidResponse;
                }
            }
        }
        return sanitizedFiles;
    }
    mapSanitizationError_(error) {
        switch (error) {
            case SanitizationError.INVALID_FILE_ID:
                return DrivePickerError.kInvalidFileId;
            case SanitizationError.INVALID_FILE_METADATA:
                return DrivePickerError.kInvalidFileMetadata;
            case SanitizationError.UNSUPPORTED_FILE_TYPE:
                return DrivePickerError.kUnsupportedFileType;
            case SanitizationError.INVALID_FILE_SIZE:
                return DrivePickerError.kInvalidFileSize;
            default:
                return DrivePickerError.kInvalidResponse;
        }
    }
    static getInstance() {
        return instance || (instance = new DrivePickerApiProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
