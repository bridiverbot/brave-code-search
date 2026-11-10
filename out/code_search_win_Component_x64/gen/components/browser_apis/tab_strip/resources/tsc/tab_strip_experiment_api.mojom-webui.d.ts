import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Container as tabsApi_mojom_Container } from './tab_strip_api_data_model.mojom-webui.js';
import { NodeId as tabsApi_mojom_NodeId } from './tab_strip_api_types.mojom-webui.js';
import { Empty as mojoBase_mojom_Empty } from '//resources/mojo/mojo/public/mojom/base/empty.mojom-webui.js';
import { Error as mojoBase_mojom_Error } from '//resources/mojo/mojo/public/mojom/base/error.mojom-webui.js';
export type TabStripExperimentServicePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<TabStripExperimentServicePendingReceiver>;
export declare class TabStripExperimentServicePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<TabStripExperimentService> {
    handle: mojo.internal.interfaceSupport.Endpoint<TabStripExperimentServicePendingReceiver>;
    constructor(handle: MojoHandle | TabStripExperimentServicePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface TabStripExperimentServiceInterface {
    replaceTabInSplit(tabToReplace: tabsApi_mojom_NodeId, tabToInsert: tabsApi_mojom_NodeId): Promise<mojoBase_mojom_Empty>;
    getAllTabsForProfile(): Promise<{
        [key: string]: tabsApi_mojom_Container;
    }>;
}
export declare class TabStripExperimentServiceRemote implements TabStripExperimentServiceInterface, mojo.internal.interfaceSupport.InterfaceRemote<TabStripExperimentServicePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<TabStripExperimentServicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | TabStripExperimentServicePendingReceiverEndpoint);
    replaceTabInSplit(tabToReplace: tabsApi_mojom_NodeId, tabToInsert: tabsApi_mojom_NodeId): Promise<mojoBase_mojom_Empty>;
    getAllTabsForProfile(): Promise<{
        [key: string]: tabsApi_mojom_Container;
    }>;
}
/**
 * An object which receives request messages for the TabStripExperimentService
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class TabStripExperimentServiceReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<TabStripExperimentServiceRemote, TabStripExperimentServicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TabStripExperimentServiceRemote, TabStripExperimentServicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: TabStripExperimentServiceInterface);
}
export declare class TabStripExperimentService {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): TabStripExperimentServiceRemote;
}
/**
 * An object which receives request messages for the TabStripExperimentService
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class TabStripExperimentServiceCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<TabStripExperimentServiceRemote, TabStripExperimentServicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TabStripExperimentServiceRemote, TabStripExperimentServicePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    replaceTabInSplit: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabToReplace: tabsApi_mojom_NodeId, tabToInsert: tabsApi_mojom_NodeId) => any>;
    getAllTabsForProfile: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const TabStripExperimentService_ReplaceTabInSplit_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripExperimentService_ReplaceTabInSplit_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripExperimentService_GetAllTabsForProfile_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripExperimentService_GetAllTabsForProfile_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripExperimentService_ReplaceTabInSplit_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripExperimentService_GetAllTabsForProfile_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare interface TabStripExperimentService_ReplaceTabInSplit_ParamsMojoType {
    tabToReplace: tabsApi_mojom_NodeId;
    tabToInsert: tabsApi_mojom_NodeId;
}
export type TabStripExperimentService_ReplaceTabInSplit_Params = TabStripExperimentService_ReplaceTabInSplit_ParamsMojoType;
export declare interface TabStripExperimentService_ReplaceTabInSplit_ResponseParamsMojoType {
    result: TabStripExperimentService_ReplaceTabInSplit_ResponseParam_Result;
}
export type TabStripExperimentService_ReplaceTabInSplit_ResponseParams = TabStripExperimentService_ReplaceTabInSplit_ResponseParamsMojoType;
export declare interface TabStripExperimentService_GetAllTabsForProfile_ParamsMojoType {
}
export type TabStripExperimentService_GetAllTabsForProfile_Params = TabStripExperimentService_GetAllTabsForProfile_ParamsMojoType;
export declare interface TabStripExperimentService_GetAllTabsForProfile_ResponseParamsMojoType {
    result: TabStripExperimentService_GetAllTabsForProfile_ResponseParam_Result;
}
export type TabStripExperimentService_GetAllTabsForProfile_ResponseParams = TabStripExperimentService_GetAllTabsForProfile_ResponseParamsMojoType;
export declare interface TabStripExperimentService_ReplaceTabInSplit_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum TabStripExperimentService_ReplaceTabInSplit_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichTabStripExperimentService_ReplaceTabInSplit_ResponseParam_Result(u: TabStripExperimentService_ReplaceTabInSplit_ResponseParam_Result): TabStripExperimentService_ReplaceTabInSplit_ResponseParam_ResultFieldTags;
export declare interface TabStripExperimentService_GetAllTabsForProfile_ResponseParam_Result {
    success?: {
        [key: string]: tabsApi_mojom_Container;
    };
    failure?: mojoBase_mojom_Error;
}
export declare enum TabStripExperimentService_GetAllTabsForProfile_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichTabStripExperimentService_GetAllTabsForProfile_ResponseParam_Result(u: TabStripExperimentService_GetAllTabsForProfile_ResponseParam_Result): TabStripExperimentService_GetAllTabsForProfile_ResponseParam_ResultFieldTags;
