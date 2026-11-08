import '/strings.m.js';
import { CustomElement } from 'chrome-untrusted://resources/js/custom_element.js';
import type { Logger, LoggingEvent, TranslationMap } from './data_sharing_sdk_types.js';
/** */
export declare function createTranslationMap(): TranslationMap;
export declare class DataSharingApp extends CustomElement implements Logger {
    private initialized_;
    private dataSharingSdk_;
    private browserProxy_;
    private translationMap_;
    private abandonJoin_;
    private successfullyJoined_;
    private tabGroupId_;
    private convertedToSharedTabGroup;
    static get is(): string;
    static get template(): string | TrustedHTML;
    constructor();
    connectedCallback(): void;
    onEvent(event: LoggingEvent): void;
    setSuccessfullyJoinedForTesting(): void;
    private getProgressType;
    private getDataSharingIntentType;
    private processUrl;
    static setUrlForTesting(url: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'data-sharing-app': DataSharingApp;
    }
}
