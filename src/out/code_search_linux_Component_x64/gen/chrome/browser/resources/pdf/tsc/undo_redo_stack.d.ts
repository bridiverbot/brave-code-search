import type { TextAnnotation } from './constants.js';
export interface TextUndoRedoState {
    type: 'text';
    before: TextAnnotation | null;
    after: TextAnnotation | null;
}
export type UndoRedoState = {
    type: 'ink';
} | TextUndoRedoState;
export interface UndoRedoStateChangedDetail {
    canUndo: boolean;
    canRedo: boolean;
    hasUnsavedEdits: boolean;
}
export declare class UndoRedoStack {
    private stack_;
    private pointer_;
    private savedPointer_;
    private savingPointer_;
    private eventTarget_;
    constructor(eventTarget: EventTarget);
    private dispatchStateChanged_;
    push(state: UndoRedoState): void;
    undo(): UndoRedoState | null;
    redo(): UndoRedoState | null;
    canUndo(): boolean;
    canRedo(): boolean;
    initiateSave(): void;
    setSaved(): void;
    cancelSave(): void;
    isDirty(): boolean;
    resetForTesting(): void;
}
