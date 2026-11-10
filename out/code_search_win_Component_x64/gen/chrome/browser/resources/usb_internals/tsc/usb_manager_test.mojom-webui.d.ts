import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export type UsbDeviceManagerTestPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<UsbDeviceManagerTestPendingReceiver>;
export declare class UsbDeviceManagerTestPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<UsbDeviceManagerTest> {
    handle: mojo.internal.interfaceSupport.Endpoint<UsbDeviceManagerTestPendingReceiver>;
    constructor(handle: MojoHandle | UsbDeviceManagerTestPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface UsbDeviceManagerTestInterface {
    addDeviceForTesting(name: string, serialNumber: string, landingPage: string): Promise<{
        success: boolean;
        message: string;
    }>;
    removeDeviceForTesting(guid: string): Promise<void>;
    getTestDevices(): Promise<{
        devices: TestDeviceInfo[];
    }>;
}
export declare class UsbDeviceManagerTestRemote implements UsbDeviceManagerTestInterface, mojo.internal.interfaceSupport.InterfaceRemote<UsbDeviceManagerTestPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<UsbDeviceManagerTestPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | UsbDeviceManagerTestPendingReceiverEndpoint);
    addDeviceForTesting(name: string, serialNumber: string, landingPage: string): Promise<{
        success: boolean;
        message: string;
    }>;
    removeDeviceForTesting(guid: string): Promise<void>;
    getTestDevices(): Promise<{
        devices: TestDeviceInfo[];
    }>;
}
/**
 * An object which receives request messages for the UsbDeviceManagerTest
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class UsbDeviceManagerTestReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<UsbDeviceManagerTestRemote, UsbDeviceManagerTestPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UsbDeviceManagerTestRemote, UsbDeviceManagerTestPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: UsbDeviceManagerTestInterface);
}
export declare class UsbDeviceManagerTest {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): UsbDeviceManagerTestRemote;
}
/**
 * An object which receives request messages for the UsbDeviceManagerTest
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class UsbDeviceManagerTestCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<UsbDeviceManagerTestRemote, UsbDeviceManagerTestPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UsbDeviceManagerTestRemote, UsbDeviceManagerTestPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    addDeviceForTesting: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(name: string, serialNumber: string, landingPage: string) => any>;
    removeDeviceForTesting: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(guid: string) => any>;
    getTestDevices: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const TestDeviceInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDeviceManagerTest_AddDeviceForTesting_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDeviceManagerTest_AddDeviceForTesting_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDeviceManagerTest_RemoveDeviceForTesting_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDeviceManagerTest_GetTestDevices_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDeviceManagerTest_GetTestDevices_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface TestDeviceInfoMojoType {
    guid: string;
    name: string;
    serialNumber: string;
    landingPage: url_mojom_Url;
}
export type TestDeviceInfo = TestDeviceInfoMojoType;
export declare interface UsbDeviceManagerTest_AddDeviceForTesting_ParamsMojoType {
    name: string;
    serialNumber: string;
    landingPage: string;
}
export type UsbDeviceManagerTest_AddDeviceForTesting_Params = UsbDeviceManagerTest_AddDeviceForTesting_ParamsMojoType;
export declare interface UsbDeviceManagerTest_AddDeviceForTesting_ResponseParamsMojoType {
    success: boolean;
    message: string;
}
export type UsbDeviceManagerTest_AddDeviceForTesting_ResponseParams = UsbDeviceManagerTest_AddDeviceForTesting_ResponseParamsMojoType;
export declare interface UsbDeviceManagerTest_RemoveDeviceForTesting_ParamsMojoType {
    guid: string;
}
export type UsbDeviceManagerTest_RemoveDeviceForTesting_Params = UsbDeviceManagerTest_RemoveDeviceForTesting_ParamsMojoType;
export declare interface UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParamsMojoType {
}
export type UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParams = UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParamsMojoType;
export declare interface UsbDeviceManagerTest_GetTestDevices_ParamsMojoType {
}
export type UsbDeviceManagerTest_GetTestDevices_Params = UsbDeviceManagerTest_GetTestDevices_ParamsMojoType;
export declare interface UsbDeviceManagerTest_GetTestDevices_ResponseParamsMojoType {
    devices: TestDeviceInfo[];
}
export type UsbDeviceManagerTest_GetTestDevices_ResponseParams = UsbDeviceManagerTest_GetTestDevices_ResponseParamsMojoType;
