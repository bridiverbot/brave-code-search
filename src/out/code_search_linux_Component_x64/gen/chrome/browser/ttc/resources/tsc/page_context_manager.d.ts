import type { PageContentNode, WebMcpToolDefinition } from './ai_overlay_dialog.mojom-webui.js';
/**
 * Object used to track the current page's context.
 */
export interface PageContext {
    /**
     * Page URL, always available and cannot change within a given PageContext.
     */
    readonly url: string;
    /**
     * Page title as seen in the tab title. Can be null as the page is loading
     * until the title is parsed.
     */
    title: string | null;
    /**
     * Structured document tree of the current page content from Mojo IPC.
     * Can be null when loading a new page until content becomes available.
     */
    content: PageContentNode | null;
    /**
     * WebMCP script tools registered on the current page's document model
     * context.
     */
    webmcpTools?: WebMcpToolDefinition[];
    /**
     * Tracks whether the PageContext has ever been contentful.
     */
    hasHadContent: boolean;
}
export declare enum PageContextChangeType {
    UPDATE_CURRENT = "update_current",
    NEW_PAGE = "new_page"
}
export interface PageContextChangeEvent {
    type: PageContextChangeType;
    newContext: PageContext;
    oldContext: PageContext | null;
}
export type PageContextListener = (event: PageContextChangeEvent) => void;
/**
 * PageContextManager maintains state about the current page context as
 * provided by the browser.
 */
export declare class PageContextManager {
    /**
     * Context for the current page. The object is replaced with a new one
     * whenever the current page is navigated to a new document. Content updates
     * to the current document are done in-place.
     */
    private context;
    private listeners;
    constructor();
    get pageContext(): PageContext | null;
    registerListener(listener: PageContextListener): void;
    updateCurrentPageContext(title: string, rootNode?: PageContentNode | string | null, webmcpTools?: WebMcpToolDefinition[]): void;
    createNewPageContext(url: string, title: string | null, content?: PageContentNode | string | null, webmcpTools?: WebMcpToolDefinition[]): void;
}
