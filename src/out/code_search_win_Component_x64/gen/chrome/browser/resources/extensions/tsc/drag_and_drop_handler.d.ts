import type { DragWrapperDelegate } from 'chrome://resources/js/drag_wrapper.js';
declare global {
    interface HTMLElementEventMap {
        'drag-and-drop-load-error': CustomEvent<Error | chrome.developerPrivate.LoadError>;
    }
}
export declare class DragAndDropHandler implements DragWrapperDelegate {
    dragEnabled: boolean;
    private eventTarget_;
    constructor(dragEnabled: boolean, target: EventTarget);
    shouldAcceptDrag(e: DragEvent): boolean;
    doDragEnter(): void;
    doDragLeave(): void;
    doDragOver(e: DragEvent): void;
    doDrop(e: DragEvent): void;
    /**
     * Handles a dropped file.
     */
    private handleFileDrop_;
    /**
     * Handles a dropped directory.
     */
    private handleDirectoryDrop_;
    private fireDragEnded_;
}
