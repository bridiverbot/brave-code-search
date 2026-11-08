/**
 * @fileoverview A helper object used from the "About" section to interact with
 * the browser.
 */
/**
 * Enumeration of all possible update statuses. The string literals must match
 * the ones defined at |AboutHandler::UpdateStatusToString|.
 * @enum {string}
 */
export declare enum UpdateStatus {
    CHECKING = "checking",
    UPDATING = "updating",
    NEARLY_UPDATED = "nearly_updated",
    UPDATED = "updated",
    FAILED = "failed",
    FAILED_HTTP = "failed_http",
    FAILED_DOWNLOAD = "failed_download",
    DISABLED = "disabled",
    DISABLED_BY_ADMIN = "disabled_by_admin",
    NEED_PERMISSION_TO_UPDATE = "need_permission_to_update"
}
export interface UpdateStatusChangedEvent {
    status: UpdateStatus;
    progress?: number;
    message?: string;
    connectionTypes?: string;
    version?: string;
    size?: string;
}
export interface AboutPageBrowserProxy {
    /**
     * Indicates to the browser that the page is ready.
     */
    pageReady(): void;
    /**
     * Request update status from the browser. It results in one or more
     * 'update-status-changed' WebUI events.
     */
    refreshUpdateStatus(): void;
    /** Opens the help page. */
    openHelpPage(): void;
}
export declare class AboutPageBrowserProxyImpl implements AboutPageBrowserProxy {
    pageReady(): void;
    refreshUpdateStatus(): void;
    openHelpPage(): void;
    static getInstance(): AboutPageBrowserProxy;
    static setInstance(obj: AboutPageBrowserProxy): void;
}
