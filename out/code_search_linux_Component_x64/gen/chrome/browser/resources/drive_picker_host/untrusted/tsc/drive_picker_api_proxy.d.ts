import type { SanitizedDriveFile } from './sanitizer.js';
/**
 * Minimal interface for the Google API Loader.
 */
export interface Gapi {
    load(api: string, options: {
        callback: () => void;
        onerror?: () => void;
    }): void;
}
/**
 * Minimal interface for the Google Picker API.
 * See https://developers.google.com/picker/docs/reference
 *  TODO(crbug.com/510492475): Migrate to types from third_party/node
 * Remove these manually copied type definitions.
 */
export interface GooglePicker {
    DocsView: {
        new (viewId: string): GooglePickerView;
    };
    PickerBuilder: {
        new (): GooglePickerBuilder;
    };
    ViewId: {
        DOCS: string;
    };
    Feature: {
        MULTISELECT_ENABLED: string;
    };
    Action: {
        PICKED: string;
        CANCEL: string;
    };
    Response: {
        ACTION: string;
        DOCUMENTS: string;
    };
    Document: {
        ID: string;
        MIME_TYPE: string;
        NAME: string;
        TYPE: string;
        ICON_URL: string;
    };
    Type: {
        DOCUMENT: string;
        PHOTO: string;
        VIDEO: string;
    };
}
export interface GooglePickerView {
    setMimeTypes(mimeTypes: string): GooglePickerView;
}
export interface GooglePickerBuilder {
    addView(view: GooglePickerView): GooglePickerBuilder;
    setOAuthToken(token: string): GooglePickerBuilder;
    setDeveloperKey(key: string): GooglePickerBuilder;
    setAppId(appId: string): GooglePickerBuilder;
    setOrigin(origin: string): GooglePickerBuilder;
    setSize(width: number, height: number): GooglePickerBuilder;
    enableFeature(feature: string): GooglePickerBuilder;
    setCallback(callback: (data: GooglePickerResponse) => void): GooglePickerBuilder;
    build(): GooglePickerInstance;
}
export interface GooglePickerInstance {
    setVisible(visible: boolean): void;
}
export interface GooglePickerResponse {
    [key: string]: unknown;
}
export interface DrivePickerApiProxy {
    showPicker(oauthToken: string, apiKey: string, appId: string): Promise<SanitizedDriveFile[] | 'CANCEL'>;
}
export declare class DrivePickerApiProxyImpl implements DrivePickerApiProxy {
    private gapiLoadResolver_;
    private onError_;
    private loadPicker_;
    private pickerActive_;
    private ensureGapiLoaded_;
    showPicker(oauthToken: string, apiKey: string, appId: string): Promise<SanitizedDriveFile[] | 'CANCEL'>;
    private handleSelection_;
    private mapSanitizationError_;
    static getInstance(): DrivePickerApiProxy;
    static setInstance(obj: DrivePickerApiProxy): void;
}
declare global {
    namespace google {
        const picker: GooglePicker;
    }
    interface Window {
        gapi: Gapi;
    }
}
