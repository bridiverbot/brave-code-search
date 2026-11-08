import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export type BookmarksPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<BookmarksPageHandlerPendingReceiver>;
export declare class BookmarksPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<BookmarksPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<BookmarksPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | BookmarksPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface BookmarksPageHandlerInterface {
    getBookmarks(): Promise<{
        bookmarks: Bookmark[];
    }>;
}
export declare class BookmarksPageHandlerRemote implements BookmarksPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<BookmarksPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<BookmarksPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | BookmarksPageHandlerPendingReceiverEndpoint);
    getBookmarks(): Promise<{
        bookmarks: Bookmark[];
    }>;
}
/**
 * An object which receives request messages for the BookmarksPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class BookmarksPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<BookmarksPageHandlerRemote, BookmarksPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BookmarksPageHandlerRemote, BookmarksPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: BookmarksPageHandlerInterface);
}
export declare class BookmarksPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): BookmarksPageHandlerRemote;
}
/**
 * An object which receives request messages for the BookmarksPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class BookmarksPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<BookmarksPageHandlerRemote, BookmarksPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BookmarksPageHandlerRemote, BookmarksPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getBookmarks: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const BookmarkSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_GetBookmarks_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_GetBookmarks_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface BookmarkMojoType {
    id: bigint;
    title: string;
    url: url_mojom_Url;
}
export type Bookmark = BookmarkMojoType;
export declare interface BookmarksPageHandler_GetBookmarks_ParamsMojoType {
}
export type BookmarksPageHandler_GetBookmarks_Params = BookmarksPageHandler_GetBookmarks_ParamsMojoType;
export declare interface BookmarksPageHandler_GetBookmarks_ResponseParamsMojoType {
    bookmarks: Bookmark[];
}
export type BookmarksPageHandler_GetBookmarks_ResponseParams = BookmarksPageHandler_GetBookmarks_ResponseParamsMojoType;
