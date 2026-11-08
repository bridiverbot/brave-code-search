import type { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
type ReceiverHelper<Remote, PendingReceiver> = mojo.internal.interfaceSupport.InterfaceReceiverHelper<Remote, PendingReceiver>;
type RemoteBaseWrapper<Receiver> = mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<Receiver>;
/**
 * Generic container holding a WebUI page handler and callback router.
 */
export interface MojoBrowserProxy<HandlerInterface, CallbackRouter> {
    handler: HandlerInterface;
    callbackRouter: CallbackRouter;
}
/**
 * Generic container holding only a WebUI page handler (for pages without a
 * callback router).
 */
export interface MojoHandlerProxy<HandlerInterface> {
    handler: HandlerInterface;
}
/**
 * Reusable factory that encapsulates singleton management, production Mojo pipe
 * binding, and test mock creation for WebUI browser proxies with precise Mojo
 * pipe types.
 */
export declare class MojoBrowserProxyFactory<HandlerInterface, Remote, Receiver, PendingReceiver, CallbackRouter extends {
    $: ReceiverHelper<Remote, PendingReceiver>;
}, HandlerRemote extends HandlerInterface & {
    $: RemoteBaseWrapper<Receiver>;
}> {
    private handlerRemoteCtor_;
    private callbackRouterCtor_;
    private bindFn_;
    private instance_;
    /**
     * @param handlerRemoteCtor Constructor for the production Mojo remote (e.g.,
     *     PageHandlerRemote).
     * @param callbackRouterCtor Constructor for the Mojo callback router (e.g.,
     *     PageCallbackRouter).
     * @param bindFn Callback invoked in production to bind the pipes via the
     *     factory.
     */
    constructor(handlerRemoteCtor_: new () => HandlerRemote, callbackRouterCtor_: new () => CallbackRouter, bindFn_: (remote: Remote, receiver: Receiver) => void);
    /**
     * Retrieves or creates the production singleton instance.
     */
    getInstance(): MojoBrowserProxy<HandlerInterface, CallbackRouter>;
    /**
     * Sets the singleton instance directly (used during test setup).
     */
    setInstance(proxy: MojoBrowserProxy<HandlerInterface, CallbackRouter>): void;
    /**
     * Creates a test proxy instance wrapped with a mock handler and a real
     * callback router.
     */
    createForTest(handler: HandlerInterface): {
        instance: MojoBrowserProxy<HandlerInterface, CallbackRouter>;
        remote: Remote;
    };
}
/**
 * Reusable factory that encapsulates singleton management, production Mojo pipe
 * binding, and test mock creation for WebUI browser proxies without callback
 * routers.
 */
export declare class MojoHandlerProxyFactory<HandlerInterface, Receiver, HandlerRemote extends HandlerInterface & {
    $: RemoteBaseWrapper<Receiver>;
}> {
    private handlerRemoteCtor_;
    private bindFn_;
    private instance_;
    /**
     * @param handlerRemoteCtor Constructor for the production Mojo remote (e.g.,
     *     PageHandlerRemote).
     * @param bindFn Callback invoked in production to bind the pipes via the
     *     factory.
     */
    constructor(handlerRemoteCtor_: new () => HandlerRemote, bindFn_: (receiver: Receiver) => void);
    /**
     * Retrieves or creates the production singleton instance.
     */
    getInstance(): MojoHandlerProxy<HandlerInterface>;
    /**
     * Sets the singleton instance directly (used during test setup).
     */
    setInstance(proxy: MojoHandlerProxy<HandlerInterface>): void;
}
export {};
