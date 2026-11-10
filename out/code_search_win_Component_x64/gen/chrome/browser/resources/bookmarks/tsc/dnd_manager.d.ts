import './folder_node.js';
import './item.js';
import type { DragData, NodeMap, TimerProxy } from './types.js';
interface DragNode {
    id: string;
    parentId?: string;
    url?: string;
}
interface NormalizedDragData {
    elements: DragNode[];
    sameProfile: boolean;
}
/**
 * Contains and provides utility methods for drag data sent by the
 * bookmarkManagerPrivate API.
 */
export declare class DragInfo {
    dragData: NormalizedDragData | null;
    setNativeDragData(newDragData: DragData): void;
    clearDragData(): void;
    isDragValid(): boolean;
    isSameProfile(): boolean;
    isDraggingFolders(): boolean;
    isDraggingBookmark(bookmarkId: string): boolean;
    isDraggingChildBookmark(folderId: string): boolean;
    isDraggingFolderToDescendant(itemId: string, nodes: NodeMap): boolean;
}
export declare function overrideFolderOpenerTimeoutDelay(ms: number): void;
/**
 * Manages drag and drop events for the bookmarks-app.
 */
export declare class DndManager {
    private dragInfo_;
    private dropDestination_;
    private dropIndicator_;
    private eventTracker_;
    private autoExpander_;
    private timerProxy_;
    private lastPointerWasTouch_;
    private dragStarted_;
    constructor();
    init(): void;
    destroy(): void;
    private onDragStart_;
    private onDragLeave_;
    private onDrop_;
    private onDragEnter_;
    private onDragOver_;
    private onMouseDown_;
    private onTouchStart_;
    private handleChromeDragEnter_;
    private clearDragData_;
    private calculateDropInfo_;
    /**
     * Calculates which items should be dragged based on the initial drag item
     * and the current selection. Dragged items will end up selected.
     */
    private calculateDragData_;
    /**
     * This function determines where the drop will occur.
     */
    private calculateDropDestination_;
    /**
     * Determines the valid drop positions for the given target element.
     */
    private calculateValidDropPositions_;
    private calculateDropAboveBelow_;
    /**
     * Determine whether we can drop the dragged items on the drop target.
     */
    private canDropOn_;
    private shouldHighlight_;
    setTimerProxyForTesting(timerProxy: TimerProxy): void;
    getDragInfoForTesting(): DragInfo | null;
}
export {};
