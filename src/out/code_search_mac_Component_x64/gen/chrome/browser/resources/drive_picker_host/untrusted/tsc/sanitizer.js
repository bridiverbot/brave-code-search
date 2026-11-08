// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Supported file types from the Google Picker.
 */
export var DriveFileType;
(function (DriveFileType) {
    DriveFileType["DOCUMENT"] = "document";
    DriveFileType["FILE"] = "file";
    DriveFileType["PHOTO"] = "photo";
    DriveFileType["VIDEO"] = "video";
})(DriveFileType || (DriveFileType = {}));
/**
 * The base URL used for manually fetching thumbnails from Google Drive.
 */
export const DRIVE_THUMBNAIL_BASE_URL = 'https://drive.google.com/thumbnail';
/**
 * The size parameter ('sz') specifies the requested thumbnail dimensions.
 * 'w320' requests a thumbnail with a width of 320 pixels.
 */
export const DRIVE_THUMBNAIL_SIZE_PARAM = 'sz=w320';
/**
 * The prefix for the ID parameter used to fetch a specific file's thumbnail.
 */
export const DRIVE_THUMBNAIL_ID_PARAM_PREFIX = '&id=';
/**
 * Potential errors during sanitization. Matches DrivePickerError in Mojom.
 */
export var SanitizationError;
(function (SanitizationError) {
    SanitizationError[SanitizationError["INVALID_FILE_ID"] = 0] = "INVALID_FILE_ID";
    SanitizationError[SanitizationError["INVALID_FILE_METADATA"] = 1] = "INVALID_FILE_METADATA";
    SanitizationError[SanitizationError["UNSUPPORTED_FILE_TYPE"] = 2] = "UNSUPPORTED_FILE_TYPE";
    SanitizationError[SanitizationError["INVALID_FILE_SIZE"] = 3] = "INVALID_FILE_SIZE";
})(SanitizationError || (SanitizationError = {}));
/**
 * Logic for sanitizing 3P Google Picker responses.
 */
export class DrivePickerSanitizer {
    /**
     * Sanitizes a single document object from the picker response.
     * Returns the SanitizedDriveFile if valid, otherwise throws a
     * SanitizationError.
     */
    static sanitizeDocument(doc, pickerKeys, thumbnailUrl, allowedTypes) {
        const id = doc[pickerKeys.ID];
        const mimeType = doc[pickerKeys.MIME_TYPE];
        const name = doc[pickerKeys.NAME];
        const type = doc[pickerKeys.TYPE];
        const sizeBytes = doc[pickerKeys.SIZE_BYTES];
        const resourceKey = doc[pickerKeys.RESOURCE_KEY];
        const iconUrl = doc[pickerKeys.ICON_URL];
        if (!this.isValidId(id)) {
            throw new Error(String(SanitizationError.INVALID_FILE_ID));
        }
        if (typeof mimeType !== 'string' || typeof name !== 'string') {
            throw new Error(String(SanitizationError.INVALID_FILE_METADATA));
        }
        if (typeof type !== 'string' || !allowedTypes.has(type)) {
            throw new Error(String(SanitizationError.UNSUPPORTED_FILE_TYPE));
        }
        if ((typeof sizeBytes !== 'number' && typeof sizeBytes !== 'string') ||
            Number(sizeBytes) < 0) {
            throw new Error(String(SanitizationError.INVALID_FILE_SIZE));
        }
        let sizeBytesBigInt;
        try {
            sizeBytesBigInt = BigInt(sizeBytes);
        }
        catch (e) {
            throw new Error(String(SanitizationError.INVALID_FILE_SIZE));
        }
        return {
            id,
            mimeType: mimeType,
            name,
            type,
            sizeBytes: sizeBytesBigInt,
            resourceKey: this.isValidId(resourceKey) ? resourceKey : null,
            thumbnailUrl: (type === DriveFileType.PHOTO || type === DriveFileType.VIDEO) ?
                this.sanitizeThumbnailUrl(thumbnailUrl) :
                null,
            iconUrl: this.sanitizeIconUrl(iconUrl),
        };
    }
    /**
     * Validates that an ID or Resource Key contains only safe characters.
     */
    static isValidId(value) {
        const idRegex = /^[a-zA-Z0-9\-_]+$/;
        return typeof value === 'string' && idRegex.test(value);
    }
    /**
     * Helper function to validate if a string is a properly formatted
     * UserContent thumbnail URL.
     */
    static isValidUserContentThumbnailUrl(url) {
        // Matches
        // https://lh[3-6].googleusercontent.com/(drive-storage|rd-d|d)/[safe_chars]
        const lhRegex = /^https:\/\/lh[3-6]\.googleusercontent\.com\/(drive-storage|rd-d|d)\/[a-zA-Z0-9\-_=]+$/;
        return lhRegex.test(url);
    }
    /**
     * Helper function to validate if a string is a properly formatted
     * Drive thumbnail URL.
     */
    static isValidGoogleDriveThumbnailUrl(url) {
        const expectedPrefix = `${DRIVE_THUMBNAIL_BASE_URL}?${DRIVE_THUMBNAIL_SIZE_PARAM}${DRIVE_THUMBNAIL_ID_PARAM_PREFIX}`;
        if (!url.startsWith(expectedPrefix)) {
            return false;
        }
        const id = url.substring(expectedPrefix.length);
        return this.isValidId(id);
    }
    /**
     * Validates that a thumbnail URL points to a trusted Google domain.
     */
    static sanitizeThumbnailUrl(url) {
        if (typeof url !== 'string') {
            return null;
        }
        if (this.isValidUserContentThumbnailUrl(url)) {
            return url;
        }
        if (this.isValidGoogleDriveThumbnailUrl(url)) {
            return url;
        }
        return null;
    }
    /**
     * Validates that an icon URL points to a trusted Google domain.
     */
    static sanitizeIconUrl(url) {
        if (typeof url !== 'string') {
            return null;
        }
        // Matches:
        // https://lh[3-6].googleusercontent.com/[size]/hype/[safe_chars]
        // https://drive-thirdparty.googleusercontent.com/[size]/type/[safe_chars]
        const urlRegex = /^https:\/\/(lh[3-6]\.googleusercontent\.com|drive-thirdparty\.googleusercontent\.com)\/[0-9]+\/(hype|type)\/[a-zA-Z0-9\-_/.:+=]+$/;
        return urlRegex.test(url) ? url : null;
    }
}
