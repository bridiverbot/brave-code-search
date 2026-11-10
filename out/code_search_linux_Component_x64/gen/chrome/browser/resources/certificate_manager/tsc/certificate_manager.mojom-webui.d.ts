import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
export declare const CertificateSourceSpec: {
    $: mojo.internal.MojomType;
};
export declare enum CertificateSource {
    MIN_VALUE = 1,
    MAX_VALUE = 12,
    kChromeRootStore = 1,
    kPlatformClientCert = 2,
    kEnterpriseTrustedCerts = 3,
    kEnterpriseIntermediateCerts = 4,
    kEnterpriseDistrustedCerts = 5,
    kPlatformUserTrustedCerts = 6,
    kPlatformUserIntermediateCerts = 7,
    kPlatformUserDistrustedCerts = 8,
    kProvisionedClientCert = 9,
    kUserTrustedCerts = 10,
    kUserIntermediateCerts = 11,
    kUserDistrustedCerts = 12
}
export declare const SuccessResultSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SuccessResult {
    MIN_VALUE = 0,
    MAX_VALUE = 0,
    kSuccess = 0
}
export type CertificateManagerPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CertificateManagerPageHandlerFactoryPendingReceiver>;
export declare class CertificateManagerPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<CertificateManagerPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<CertificateManagerPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | CertificateManagerPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CertificateManagerPageHandlerFactoryInterface {
    createCertificateManagerPageHandler(page: CertificateManagerPageRemote, handler: CertificateManagerPageHandlerPendingReceiver): void;
}
export declare class CertificateManagerPageHandlerFactoryRemote implements CertificateManagerPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<CertificateManagerPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CertificateManagerPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CertificateManagerPageHandlerFactoryPendingReceiverEndpoint);
    createCertificateManagerPageHandler(page: CertificateManagerPageRemote, handler: CertificateManagerPageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the CertificateManagerPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CertificateManagerPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CertificateManagerPageHandlerFactoryRemote, CertificateManagerPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CertificateManagerPageHandlerFactoryRemote, CertificateManagerPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CertificateManagerPageHandlerFactoryInterface);
}
export declare class CertificateManagerPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CertificateManagerPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the CertificateManagerPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CertificateManagerPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CertificateManagerPageHandlerFactoryRemote, CertificateManagerPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CertificateManagerPageHandlerFactoryRemote, CertificateManagerPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createCertificateManagerPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: CertificateManagerPageRemote, handler: CertificateManagerPageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type CertificateManagerPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CertificateManagerPageHandlerPendingReceiver>;
export declare class CertificateManagerPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<CertificateManagerPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<CertificateManagerPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | CertificateManagerPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CertificateManagerPageHandlerInterface {
    getCertificates(source: CertificateSource): Promise<{
        certs: SummaryCertInfo[];
    }>;
    getCertManagementMetadata(): Promise<{
        metadata: CertManagementMetadata;
    }>;
    viewCertificate(source: CertificateSource, sha256HashHex: string): void;
    exportCertificates(source: CertificateSource): void;
    importCertificate(source: CertificateSource): Promise<{
        result: (ActionResult | null);
    }>;
    importAndBindCertificate(source: CertificateSource): Promise<{
        result: (ActionResult | null);
    }>;
    deleteCertificate(source: CertificateSource, displayName: string, sha256HashHex: string): Promise<{
        result: (ActionResult | null);
    }>;
    setIncludeSystemTrustStore(include: boolean): void;
}
export declare class CertificateManagerPageHandlerRemote implements CertificateManagerPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<CertificateManagerPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CertificateManagerPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CertificateManagerPageHandlerPendingReceiverEndpoint);
    getCertificates(source: CertificateSource): Promise<{
        certs: SummaryCertInfo[];
    }>;
    getCertManagementMetadata(): Promise<{
        metadata: CertManagementMetadata;
    }>;
    viewCertificate(source: CertificateSource, sha256HashHex: string): void;
    exportCertificates(source: CertificateSource): void;
    importCertificate(source: CertificateSource): Promise<{
        result: (ActionResult | null);
    }>;
    importAndBindCertificate(source: CertificateSource): Promise<{
        result: (ActionResult | null);
    }>;
    deleteCertificate(source: CertificateSource, displayName: string, sha256HashHex: string): Promise<{
        result: (ActionResult | null);
    }>;
    setIncludeSystemTrustStore(include: boolean): void;
}
/**
 * An object which receives request messages for the CertificateManagerPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CertificateManagerPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CertificateManagerPageHandlerRemote, CertificateManagerPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CertificateManagerPageHandlerRemote, CertificateManagerPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CertificateManagerPageHandlerInterface);
}
export declare class CertificateManagerPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CertificateManagerPageHandlerRemote;
}
/**
 * An object which receives request messages for the CertificateManagerPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CertificateManagerPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CertificateManagerPageHandlerRemote, CertificateManagerPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CertificateManagerPageHandlerRemote, CertificateManagerPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getCertificates: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(source: CertificateSource) => any>;
    getCertManagementMetadata: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    viewCertificate: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(source: CertificateSource, sha256HashHex: string) => any>;
    exportCertificates: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(source: CertificateSource) => any>;
    importCertificate: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(source: CertificateSource) => any>;
    importAndBindCertificate: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(source: CertificateSource) => any>;
    deleteCertificate: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(source: CertificateSource, displayName: string, sha256HashHex: string) => any>;
    setIncludeSystemTrustStore: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(include: boolean) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type CertificateManagerPagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CertificateManagerPagePendingReceiver>;
export declare class CertificateManagerPagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<CertificateManagerPage> {
    handle: mojo.internal.interfaceSupport.Endpoint<CertificateManagerPagePendingReceiver>;
    constructor(handle: MojoHandle | CertificateManagerPagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CertificateManagerPageInterface {
    askForImportPassword(): Promise<{
        password: (string | null);
    }>;
    askForConfirmation(title: string, message: string): Promise<{
        confirmed: boolean;
    }>;
    triggerReload(sources: CertificateSource[]): void;
    triggerMetadataUpdate(): void;
}
export declare class CertificateManagerPageRemote implements CertificateManagerPageInterface, mojo.internal.interfaceSupport.InterfaceRemote<CertificateManagerPagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CertificateManagerPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CertificateManagerPagePendingReceiverEndpoint);
    askForImportPassword(): Promise<{
        password: (string | null);
    }>;
    askForConfirmation(title: string, message: string): Promise<{
        confirmed: boolean;
    }>;
    triggerReload(sources: CertificateSource[]): void;
    triggerMetadataUpdate(): void;
}
/**
 * An object which receives request messages for the CertificateManagerPage
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CertificateManagerPageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CertificateManagerPageRemote, CertificateManagerPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CertificateManagerPageRemote, CertificateManagerPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CertificateManagerPageInterface);
}
export declare class CertificateManagerPage {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CertificateManagerPageRemote;
}
/**
 * An object which receives request messages for the CertificateManagerPage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CertificateManagerPageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CertificateManagerPageRemote, CertificateManagerPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CertificateManagerPageRemote, CertificateManagerPagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    askForImportPassword: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    askForConfirmation: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(title: string, message: string) => any>;
    triggerReload: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(sources: CertificateSource[]) => any>;
    triggerMetadataUpdate: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const SummaryCertInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const CertManagementMetadataSpec: {
    $: mojo.internal.MojomType;
};
export declare const CertificateManagerPageHandlerFactory_CreateCertificateManagerPageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CertificateManagerPageHandler_GetCertificates_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CertificateManagerPageHandler_GetCertificates_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CertificateManagerPageHandler_GetCertManagementMetadata_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CertificateManagerPageHandler_GetCertManagementMetadata_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CertificateManagerPageHandler_ViewCertificate_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CertificateManagerPageHandler_ExportCertificates_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CertificateManagerPageHandler_ImportCertificate_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CertificateManagerPageHandler_ImportCertificate_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CertificateManagerPageHandler_ImportAndBindCertificate_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CertificateManagerPageHandler_ImportAndBindCertificate_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CertificateManagerPageHandler_DeleteCertificate_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CertificateManagerPageHandler_DeleteCertificate_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CertificateManagerPageHandler_SetIncludeSystemTrustStore_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CertificateManagerPage_AskForImportPassword_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CertificateManagerPage_AskForImportPassword_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CertificateManagerPage_AskForConfirmation_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CertificateManagerPage_AskForConfirmation_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CertificateManagerPage_TriggerReload_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CertificateManagerPage_TriggerMetadataUpdate_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActionResultSpec: {
    $: mojo.internal.MojomType;
};
export declare interface SummaryCertInfoMojoType {
    sha256hashHex: string;
    displayName: string;
    isDeletable: boolean;
}
export type SummaryCertInfo = SummaryCertInfoMojoType;
export declare interface CertManagementMetadataMojoType {
    includeSystemTrustStore: boolean;
    isIncludeSystemTrustStoreManaged: boolean;
    showUserCertsUi: boolean;
    numUserAddedSystemCerts: number;
    numPolicyCerts: number;
    numUserCerts: number;
}
export type CertManagementMetadata = CertManagementMetadataMojoType;
export declare interface CertificateManagerPageHandlerFactory_CreateCertificateManagerPageHandler_ParamsMojoType {
    page: CertificateManagerPageRemote;
    handler: CertificateManagerPageHandlerPendingReceiver;
}
export type CertificateManagerPageHandlerFactory_CreateCertificateManagerPageHandler_Params = CertificateManagerPageHandlerFactory_CreateCertificateManagerPageHandler_ParamsMojoType;
export declare interface CertificateManagerPageHandler_GetCertificates_ParamsMojoType {
    source: CertificateSource;
}
export type CertificateManagerPageHandler_GetCertificates_Params = CertificateManagerPageHandler_GetCertificates_ParamsMojoType;
export declare interface CertificateManagerPageHandler_GetCertificates_ResponseParamsMojoType {
    certs: SummaryCertInfo[];
}
export type CertificateManagerPageHandler_GetCertificates_ResponseParams = CertificateManagerPageHandler_GetCertificates_ResponseParamsMojoType;
export declare interface CertificateManagerPageHandler_GetCertManagementMetadata_ParamsMojoType {
}
export type CertificateManagerPageHandler_GetCertManagementMetadata_Params = CertificateManagerPageHandler_GetCertManagementMetadata_ParamsMojoType;
export declare interface CertificateManagerPageHandler_GetCertManagementMetadata_ResponseParamsMojoType {
    metadata: CertManagementMetadata;
}
export type CertificateManagerPageHandler_GetCertManagementMetadata_ResponseParams = CertificateManagerPageHandler_GetCertManagementMetadata_ResponseParamsMojoType;
export declare interface CertificateManagerPageHandler_ViewCertificate_ParamsMojoType {
    source: CertificateSource;
    sha256HashHex: string;
}
export type CertificateManagerPageHandler_ViewCertificate_Params = CertificateManagerPageHandler_ViewCertificate_ParamsMojoType;
export declare interface CertificateManagerPageHandler_ExportCertificates_ParamsMojoType {
    source: CertificateSource;
}
export type CertificateManagerPageHandler_ExportCertificates_Params = CertificateManagerPageHandler_ExportCertificates_ParamsMojoType;
export declare interface CertificateManagerPageHandler_ImportCertificate_ParamsMojoType {
    source: CertificateSource;
}
export type CertificateManagerPageHandler_ImportCertificate_Params = CertificateManagerPageHandler_ImportCertificate_ParamsMojoType;
export declare interface CertificateManagerPageHandler_ImportCertificate_ResponseParamsMojoType {
    result: (ActionResult | null);
}
export type CertificateManagerPageHandler_ImportCertificate_ResponseParams = CertificateManagerPageHandler_ImportCertificate_ResponseParamsMojoType;
export declare interface CertificateManagerPageHandler_ImportAndBindCertificate_ParamsMojoType {
    source: CertificateSource;
}
export type CertificateManagerPageHandler_ImportAndBindCertificate_Params = CertificateManagerPageHandler_ImportAndBindCertificate_ParamsMojoType;
export declare interface CertificateManagerPageHandler_ImportAndBindCertificate_ResponseParamsMojoType {
    result: (ActionResult | null);
}
export type CertificateManagerPageHandler_ImportAndBindCertificate_ResponseParams = CertificateManagerPageHandler_ImportAndBindCertificate_ResponseParamsMojoType;
export declare interface CertificateManagerPageHandler_DeleteCertificate_ParamsMojoType {
    source: CertificateSource;
    displayName: string;
    sha256HashHex: string;
}
export type CertificateManagerPageHandler_DeleteCertificate_Params = CertificateManagerPageHandler_DeleteCertificate_ParamsMojoType;
export declare interface CertificateManagerPageHandler_DeleteCertificate_ResponseParamsMojoType {
    result: (ActionResult | null);
}
export type CertificateManagerPageHandler_DeleteCertificate_ResponseParams = CertificateManagerPageHandler_DeleteCertificate_ResponseParamsMojoType;
export declare interface CertificateManagerPageHandler_SetIncludeSystemTrustStore_ParamsMojoType {
    include: boolean;
}
export type CertificateManagerPageHandler_SetIncludeSystemTrustStore_Params = CertificateManagerPageHandler_SetIncludeSystemTrustStore_ParamsMojoType;
export declare interface CertificateManagerPage_AskForImportPassword_ParamsMojoType {
}
export type CertificateManagerPage_AskForImportPassword_Params = CertificateManagerPage_AskForImportPassword_ParamsMojoType;
export declare interface CertificateManagerPage_AskForImportPassword_ResponseParamsMojoType {
    password: (string | null);
}
export type CertificateManagerPage_AskForImportPassword_ResponseParams = CertificateManagerPage_AskForImportPassword_ResponseParamsMojoType;
export declare interface CertificateManagerPage_AskForConfirmation_ParamsMojoType {
    title: string;
    message: string;
}
export type CertificateManagerPage_AskForConfirmation_Params = CertificateManagerPage_AskForConfirmation_ParamsMojoType;
export declare interface CertificateManagerPage_AskForConfirmation_ResponseParamsMojoType {
    confirmed: boolean;
}
export type CertificateManagerPage_AskForConfirmation_ResponseParams = CertificateManagerPage_AskForConfirmation_ResponseParamsMojoType;
export declare interface CertificateManagerPage_TriggerReload_ParamsMojoType {
    sources: CertificateSource[];
}
export type CertificateManagerPage_TriggerReload_Params = CertificateManagerPage_TriggerReload_ParamsMojoType;
export declare interface CertificateManagerPage_TriggerMetadataUpdate_ParamsMojoType {
}
export type CertificateManagerPage_TriggerMetadataUpdate_Params = CertificateManagerPage_TriggerMetadataUpdate_ParamsMojoType;
export declare interface ActionResult {
    error?: string;
    success?: SuccessResult;
}
export declare enum ActionResultFieldTags {
    ERROR = 0,
    SUCCESS = 1
}
export declare function whichActionResult(u: ActionResult): ActionResultFieldTags;
export type BrowserProxy = MojoBrowserProxy<CertificateManagerPageHandlerInterface, CertificateManagerPageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<CertificateManagerPageHandlerInterface, CertificateManagerPageRemote, CertificateManagerPageHandlerPendingReceiver, CertificateManagerPagePendingReceiver, CertificateManagerPageCallbackRouter, CertificateManagerPageHandlerRemote>;
