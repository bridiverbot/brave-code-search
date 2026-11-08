import type { ChromeEvent } from '/tools/typescript/definitions/chrome_event.js';
export interface OpenInNewTabParams {
    active?: boolean;
    split?: boolean;
}
export interface BookmarkManagerApiProxy {
    onDragEnter: ChromeEvent<(p1: chrome.bookmarkManagerPrivate.DragData) => void>;
    drop(parentId: string, index?: number): Promise<void>;
    startDrag(idList: string[], dragNodeIndex: number, isFromTouch: boolean, x: number, y: number): void;
    removeTrees(idList: string[]): Promise<void>;
    canPaste(parentId: string): Promise<boolean>;
    isActiveTabInSplit(): Promise<boolean>;
    openInNewWindow(idList: string[], incognito: boolean): void;
    openInNewTab(id: string, params?: OpenInNewTabParams): void;
    openInNewTabGroup(idList: string[]): void;
    cut(idList: string[]): Promise<void>;
    paste(parentId: string, selectedIdList?: string[]): Promise<void>;
    copy(idList: string[]): Promise<void>;
}
export declare class BookmarkManagerApiProxyImpl implements BookmarkManagerApiProxy {
    onDragEnter: ChromeEvent<(p1: chrome.bookmarkManagerPrivate.DragData) => void>;
    drop(parentId: string, index?: number): Promise<void>;
    startDrag(idList: string[], dragNodeIndex: number, isFromTouch: boolean, x: number, y: number): void;
    removeTrees(idList: string[]): Promise<void>;
    canPaste(parentId: string): Promise<boolean>;
    isActiveTabInSplit(): Promise<boolean>;
    openInNewWindow(idList: string[], incognito: boolean): void;
    openInNewTab(id: string, params: OpenInNewTabParams): void;
    openInNewTabGroup(idList: string[]): void;
    cut(idList: string[]): Promise<void>;
    paste(parentId: string, selectedIdList?: string[]): Promise<void>;
    copy(idList: string[]): Promise<void>;
    static getInstance(): BookmarkManagerApiProxy;
    static setInstance(obj: BookmarkManagerApiProxy): void;
}
