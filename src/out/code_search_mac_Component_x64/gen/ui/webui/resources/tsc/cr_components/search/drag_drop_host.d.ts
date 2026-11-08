export interface DragAndDropHost {
    isDraggingFile: boolean;
    animationState: string;
    getDropTarget(): {
        addDroppedFiles(files: FileList): void;
    };
}
