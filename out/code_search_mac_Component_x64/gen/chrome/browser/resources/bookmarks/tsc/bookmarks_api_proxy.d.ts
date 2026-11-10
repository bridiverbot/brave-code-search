import type { ChromeEvent } from '/tools/typescript/definitions/chrome_event.js';
import type { BookmarksEvent } from './bookmarks_api.mojom-webui.js';
import type { BookmarkNode, NodeMap } from './types.js';
export type Query = string | {
    query?: string;
    url?: string;
    title?: string;
};
declare class BookmarkEventForwarder<T extends Function> implements ChromeEvent<T> {
    private listeners_;
    addListener(listener: T): void;
    removeListener(listener: T): void;
    forward(...args: any[]): void;
}
export interface BookmarksApiProxy {
    getTree(): Promise<NodeMap>;
    update(id: string, changes: {
        title?: string;
        url?: string;
    }): Promise<BookmarkNode>;
    create(parentId: string, index: number | null, title: string, url?: string): Promise<BookmarkNode>;
    delete(idList: string[]): Promise<void>;
    onCreated: ChromeEvent<(parentId: string, index: number, node: BookmarkNode) => void>;
    onRemoved: ChromeEvent<(id: string, parentId: string, index: number) => void>;
    onChanged: ChromeEvent<(id: string, node: BookmarkNode) => void>;
    onMoved: ChromeEvent<(id: string, oldParentId: string, oldIndex: number, newParentId: string, newIndex: number) => void>;
    onChildrenReordered: ChromeEvent<(id: string, reorderInfo: {
        childIds: string[];
    }) => void>;
}
export declare class BookmarksApiProxyImpl implements BookmarksApiProxy {
    private receiver_;
    private rootNodeResolver_;
    onCreated: BookmarkEventForwarder<(parentId: string, index: number, node: BookmarkNode) => void>;
    onRemoved: BookmarkEventForwarder<(id: string, parentId: string, index: number) => void>;
    onChanged: BookmarkEventForwarder<(id: string, node: BookmarkNode) => void>;
    onMoved: BookmarkEventForwarder<(id: string, oldParentId: string, oldIndex: number, newParentId: string, newIndex: number) => void>;
    onChildrenReordered: BookmarkEventForwarder<(id: string, reorderInfo: {
        childIds: string[];
    }) => void>;
    constructor();
    getTree(): Promise<NodeMap>;
    update(id: string, changes: {
        title?: string;
        url?: string;
    }): Promise<BookmarkNode>;
    create(parentId: string, index: number | null, title: string, url?: string): Promise<BookmarkNode>;
    delete(idList: string[]): Promise<void>;
    handleMojoEvents(events: BookmarksEvent[]): void;
    private handleMojoAdded_;
    private handleMojoRemoved_;
    private handleMojoMoved_;
    private handleMojoChanged_;
    static getInstance(): BookmarksApiProxy;
    static setInstance(obj: BookmarksApiProxy): void;
}
export {};
