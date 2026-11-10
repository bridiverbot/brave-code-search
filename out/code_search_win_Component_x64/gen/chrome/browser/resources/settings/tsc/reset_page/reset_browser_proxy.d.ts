export interface ResetBrowserProxy {
    /**
     * @param sendSettings Whether the user gave consent to upload broken settings
     *     to Google for analysis.
     * @param requestOrigin The origin of the reset request.
     * @return A promise firing once resetting has completed.
     */
    performResetProfileSettings(sendSettings: boolean, requestOrigin: string): Promise<void>;
    /**
     * A method to be called when the reset profile dialog is hidden.
     */
    onHideResetProfileDialog(): void;
    /**
     * A method to be called when the reset profile banner is hidden.
     */
    onHideResetProfileBanner(): void;
    /**
     * A method to be called when the reset profile dialog is shown.
     */
    onShowResetProfileDialog(): void;
    /**
     * Shows the settings that are about to be reset and which will be reported
     * to Google for analysis, in a new tab.
     */
    showReportedSettings(): void;
    /**
     * Retrieves the triggered reset tool name.
     * @return A promise firing with the tool name, once it has been retrieved.
     */
    getTriggeredResetToolName(): Promise<string>;
    /**
     * @return A method that retrieves the list of tampered prefs.
     */
    getTamperedPreferencePaths(): Promise<string[]>;
}
export declare class ResetBrowserProxyImpl implements ResetBrowserProxy {
    performResetProfileSettings(sendSettings: boolean, requestOrigin: string): Promise<void>;
    onHideResetProfileDialog(): void;
    onHideResetProfileBanner(): void;
    onShowResetProfileDialog(): void;
    showReportedSettings(): void;
    getTriggeredResetToolName(): Promise<string>;
    getTamperedPreferencePaths(): Promise<string[]>;
    static getInstance(): ResetBrowserProxy;
    static setInstance(obj: ResetBrowserProxy): void;
}
