import '/strings.m.js';
import type { BookmarksTreeNode } from './bookmarks.mojom-webui.js';
export declare const DROP_POSITION_ATTR = "drop-position";
export declare enum DropPosition {
    INTO = "into"
}
export interface PowerBookmarksDragDelegate extends HTMLElement {
    getBookmarkRowElement(id: string): HTMLElement | null;
    getFallbackBookmark(): BookmarksTreeNode;
    getFallbackDropTargetElement(): HTMLElement;
    onFinishDrop(dropTarget: BookmarksTreeNode): void;
    setHasActiveDrag(hasActiveDrag: boolean): void;
}
export declare class PowerBookmarksDragManager {
    private delegate_;
    private dragSession_;
    private eventTracker_;
    private lastPointerWasTouch_;
    constructor(delegate: PowerBookmarksDragDelegate);
    startObserving(): void;
    stopObserving(): void;
    hasActiveDrag(): boolean;
    private cancelDrag_;
    private onChromeDragEnter_;
    private onDragStart_;
    private onDragOver_;
    private onDragLeave_;
    private onDrop_;
}
