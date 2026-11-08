export interface Application {
    name: string;
    icon?: string;
    permissions: string[];
}
export interface Extension {
    name: string;
    icon?: string;
    permissions: string[];
}
export declare enum ReportingType {
    SECURITY = "security",
    DEVICE = "device",
    USER = "user",
    USER_ACTIVITY = "user-activity",
    EXTENSIONS = "extensions",
    LEGACY_TECH = "legacy-tech",
    URL = "url"
}
export interface BrowserReportingResponse {
    messageId: string;
    reportingType: ReportingType;
}
interface ManagedDataResponse {
    applicationReportingSubtitle: string;
    browserManagementNotice: string;
    extensionReportingSubtitle: string;
    managedWebsitesSubtitle: string;
    pageSubtitle: string;
    managed: boolean;
    overview: string;
    customerLogo: string;
    threatProtectionDescription: string;
    showUpdateRequiredEol: boolean;
    eolMessage: string;
    eolAdminMessage: string;
    showMonitoredNetworkPrivacyDisclosure: boolean;
    showWindowsNoticeForDeskSync: boolean;
    showCookiesNoticeForDeskSync: boolean;
}
interface ThreatProtectionPermission {
    title: string;
    permission: string;
}
export interface ThreatProtectionInfo {
    info: ThreatProtectionPermission[];
    description: string;
    showSecureGatewayDisclosure?: boolean;
}
/** @interface */
export interface ManagementBrowserProxy {
    getExtensions(): Promise<Extension[]>;
    getManagedWebsites(): Promise<string[]>;
    getApplications(): Promise<Application[]>;
    getContextualManagedData(): Promise<ManagedDataResponse>;
    getThreatProtectionInfo(): Promise<ThreatProtectionInfo>;
    /**
     * @return The list of browser reporting info messages.
     */
    initBrowserReportingInfo(): Promise<BrowserReportingResponse[]>;
    /**
     * @return The list of profile reporting info messages.
     */
    initProfileReportingInfo(): Promise<BrowserReportingResponse[]>;
    /**
     * @return Whether the promotion banner should be shown.
     */
    shouldShowPromotion(): Promise<boolean>;
    setBannerDismissed(): Promise<void>;
    recordBannerRedirected(): Promise<void>;
}
export declare class ManagementBrowserProxyImpl implements ManagementBrowserProxy {
    getExtensions(): Promise<Extension[]>;
    getManagedWebsites(): Promise<string[]>;
    getApplications(): Promise<Application[]>;
    getContextualManagedData(): Promise<ManagedDataResponse>;
    getThreatProtectionInfo(): Promise<ThreatProtectionInfo>;
    initBrowserReportingInfo(): Promise<BrowserReportingResponse[]>;
    initProfileReportingInfo(): Promise<BrowserReportingResponse[]>;
    shouldShowPromotion(): Promise<boolean>;
    setBannerDismissed(): Promise<void>;
    recordBannerRedirected(): Promise<void>;
    static getInstance(): ManagementBrowserProxy;
}
declare global {
    interface Window {
        ManagementBrowserProxyImpl: typeof ManagementBrowserProxyImpl;
    }
}
export {};
