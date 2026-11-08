/**
 * Numerical values should not be changed because they must stay in sync with
 * screen_ai::ScreenAIInstallState::State defined in screen_ai_install_state.h.
 */
export declare enum ScreenAiInstallStatus {
    NOT_DOWNLOADED = 0,
    DOWNLOADING = 1,
    DOWNLOAD_FAILED = 2,
    DOWNLOADED = 3
}
export interface AxAnnotationsBrowserProxy {
    /**
     * Requests the install state of ScreenAI.
     */
    getScreenAiInstallState(): Promise<ScreenAiInstallStatus>;
}
export declare class AxAnnotationsBrowserProxyImpl implements AxAnnotationsBrowserProxy {
    static getInstance(): AxAnnotationsBrowserProxy;
    static setInstanceForTesting(obj: AxAnnotationsBrowserProxy): void;
    getScreenAiInstallState(): Promise<ScreenAiInstallStatus>;
}
