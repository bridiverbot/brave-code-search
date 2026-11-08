import type { Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
/**
 * Supported file types from the Google Picker.
 */
export declare enum DriveFileType {
    DOCUMENT = "document",
    FILE = "file",
    PHOTO = "photo",
    VIDEO = "video"
}
/**
 * The base URL used for manually fetching thumbnails from Google Drive.
 */
export declare const DRIVE_THUMBNAIL_BASE_URL: string;
/**
 * The size parameter ('sz') specifies the requested thumbnail dimensions.
 * 'w320' requests a thumbnail with a width of 320 pixels.
 */
export declare const DRIVE_THUMBNAIL_SIZE_PARAM: string;
/**
 * The prefix for the ID parameter used to fetch a specific file's thumbnail.
 */
export declare const DRIVE_THUMBNAIL_ID_PARAM_PREFIX: string;
/**
 * Sanitized file metadata. Matches the DriveFile struct in Mojom.
 */
export interface SanitizedDriveFile {
    id: string;
    mimeType: string;
    name: string;
    type: string;
    sizeBytes: bigint;
    resourceKey: string | null;
    thumbnailUrl: Url | null;
    iconUrl: Url | null;
}
/**
 * Potential errors during sanitization. Matches DrivePickerError in Mojom.
 */
export declare enum SanitizationError {
    INVALID_FILE_ID = 0,
    INVALID_FILE_METADATA = 1,
    UNSUPPORTED_FILE_TYPE = 2,
    INVALID_FILE_SIZE = 3
}
/**
 * Logic for sanitizing 3P Google Picker responses.
 */
export declare class DrivePickerSanitizer {
    /**
     * Sanitizes a single document object from the picker response.
     * Returns the SanitizedDriveFile if valid, otherwise throws a
     * SanitizationError.
     */
    static sanitizeDocument(doc: Record<string, unknown>, pickerKeys: {
        ID: string;
        MIME_TYPE: string;
        NAME: string;
        TYPE: string;
        SIZE_BYTES: string;
        RESOURCE_KEY: string;
        ICON_URL: string;
    }, thumbnailUrl: string | null, allowedTypes: Set<string>): SanitizedDriveFile;
    /**
     * Validates that an ID or Resource Key contains only safe characters.
     */
    static isValidId(value: unknown): value is string;
    /**
     * Helper function to validate if a string is a properly formatted
     * UserContent thumbnail URL.
     */
    static isValidUserContentThumbnailUrl(url: string): boolean;
    /**
     * Helper function to validate if a string is a properly formatted
     * Drive thumbnail URL.
     */
    static isValidGoogleDriveThumbnailUrl(url: string): boolean;
    /**
     * Validates that a thumbnail URL points to a trusted Google domain.
     */
    static sanitizeThumbnailUrl(url: unknown): Url | null;
    /**
     * Validates that an icon URL points to a trusted Google domain.
     */
    static sanitizeIconUrl(url: unknown): Url | null;
}
