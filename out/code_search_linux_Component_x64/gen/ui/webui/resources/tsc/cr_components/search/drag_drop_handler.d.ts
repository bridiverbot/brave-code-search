import type { DragAndDropHost } from './drag_drop_host.js';
export declare class DragAndDropHandler {
    private host_;
    private dragAndDropEnabled_;
    private enterCounter_;
    constructor(host: DragAndDropHost, dragAndDropEnabled: boolean);
    handleDragEnter(e: DragEvent): void;
    handleDragOver(e: DragEvent): void;
    handleDrop(e: DragEvent): void;
    handleDragLeave(e: DragEvent): void;
}
