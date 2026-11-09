import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { NodeId as tabsApi_mojom_NodeId } from './tab_strip_api_types.mojom-webui.js';
import { Empty as mojoBase_mojom_Empty } from '//resources/mojo/mojo/public/mojom/base/empty.mojom-webui.js';
import { Error as mojoBase_mojom_Error } from '//resources/mojo/mojo/public/mojom/base/error.mojom-webui.js';
import { Point as gfx_mojom_Point } from '//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js';
export type TabStripUIControllerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<TabStripUIControllerPendingReceiver>;
export declare class TabStripUIControllerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<TabStripUIController> {
    handle: mojo.internal.interfaceSupport.Endpoint<TabStripUIControllerPendingReceiver>;
    constructor(handle: MojoHandle | TabStripUIControllerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface TabStripUIControllerInterface {
    showTabContextMenu(id: tabsApi_mojom_NodeId, location: gfx_mojom_Point): Promise<mojoBase_mojom_Empty>;
}
export declare class TabStripUIControllerRemote implements TabStripUIControllerInterface, mojo.internal.interfaceSupport.InterfaceRemote<TabStripUIControllerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<TabStripUIControllerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | TabStripUIControllerPendingReceiverEndpoint);
    showTabContextMenu(id: tabsApi_mojom_NodeId, location: gfx_mojom_Point): Promise<mojoBase_mojom_Empty>;
}
/**
 * An object which receives request messages for the TabStripUIController
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class TabStripUIControllerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<TabStripUIControllerRemote, TabStripUIControllerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TabStripUIControllerRemote, TabStripUIControllerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: TabStripUIControllerInterface);
}
export declare class TabStripUIController {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): TabStripUIControllerRemote;
}
/**
 * An object which receives request messages for the TabStripUIController
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class TabStripUIControllerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<TabStripUIControllerRemote, TabStripUIControllerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TabStripUIControllerRemote, TabStripUIControllerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    showTabContextMenu: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: tabsApi_mojom_NodeId, location: gfx_mojom_Point) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const TabStripUIController_ShowTabContextMenu_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripUIController_ShowTabContextMenu_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripUIController_ShowTabContextMenu_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare interface TabStripUIController_ShowTabContextMenu_ParamsMojoType {
    id: tabsApi_mojom_NodeId;
    location: gfx_mojom_Point;
}
export type TabStripUIController_ShowTabContextMenu_Params = TabStripUIController_ShowTabContextMenu_ParamsMojoType;
export declare interface TabStripUIController_ShowTabContextMenu_ResponseParamsMojoType {
    result: TabStripUIController_ShowTabContextMenu_ResponseParam_Result;
}
export type TabStripUIController_ShowTabContextMenu_ResponseParams = TabStripUIController_ShowTabContextMenu_ResponseParamsMojoType;
export declare interface TabStripUIController_ShowTabContextMenu_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum TabStripUIController_ShowTabContextMenu_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichTabStripUIController_ShowTabContextMenu_ResponseParam_Result(u: TabStripUIController_ShowTabContextMenu_ResponseParam_Result): TabStripUIController_ShowTabContextMenu_ResponseParam_ResultFieldTags;
