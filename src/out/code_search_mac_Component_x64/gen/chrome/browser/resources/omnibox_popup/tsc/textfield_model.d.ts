export interface SelectionRange {
    start: number;
    end: number;
}
export declare enum MergeType {
    DO_NOT_MERGE = 0,
    MERGEABLE = 1,
    FORCE_MERGE = 2
}
export type EditType = 'insert' | 'delete' | 'replace';
export interface Edit {
    readonly type: EditType;
    mergeType: MergeType;
    commit(): void;
    canMerge(other: Edit): boolean;
    merge(other: Edit): boolean;
    mergeReplace?(other: Edit): void;
    undo(currentText: string): {
        text: string;
        selection: SelectionRange;
    };
    redo(currentText: string): {
        text: string;
        selection: SelectionRange;
    };
}
export declare class InsertEdit implements Edit {
    readonly type: EditType;
    mergeType: MergeType;
    newText: string;
    newTextStart: number;
    newCursorPos: number;
    constructor(mergeable: boolean, newText: string, at: number);
    commit(): void;
    canMerge(other: Edit): boolean;
    mergeReplace(edit: Edit): void;
    merge(other: Edit): boolean;
    undo(currentText: string): {
        text: string;
        selection: SelectionRange;
    };
    redo(currentText: string): {
        text: string;
        selection: SelectionRange;
    };
}
export declare class ReplaceEdit implements Edit {
    readonly type: EditType;
    mergeType: MergeType;
    oldTexts: string[];
    oldTextStarts: number[];
    oldPrimarySelection: SelectionRange;
    deleteBackward: boolean;
    newCursorPos: number;
    newText: string;
    newTextStart: number;
    constructor(mergeType: MergeType, oldTexts: string[], oldTextStarts: number[], oldPrimarySelection: SelectionRange, deleteBackward: boolean, newCursorPos: number, newText: string, newTextStart: number);
    commit(): void;
    canMerge(other: Edit): boolean;
    mergeReplace(edit: Edit): void;
    merge(other: Edit): boolean;
    undo(currentText: string): {
        text: string;
        selection: SelectionRange;
    };
    redo(currentText: string): {
        text: string;
        selection: SelectionRange;
    };
}
export declare class DeleteEdit implements Edit {
    readonly type: EditType;
    mergeType: MergeType;
    oldTexts: string[];
    oldTextStarts: number[];
    oldPrimarySelection: SelectionRange;
    deleteBackward: boolean;
    newCursorPos: number;
    constructor(mergeable: boolean, oldTexts: string[], oldTextStarts: number[], oldPrimarySelection: SelectionRange, deleteBackward: boolean, newCursorPos: number);
    commit(): void;
    canMerge(other: Edit): boolean;
    merge(other: Edit): boolean;
    undo(currentText: string): {
        text: string;
        selection: SelectionRange;
    };
    redo(currentText: string): {
        text: string;
        selection: SelectionRange;
    };
}
export declare class TextfieldModel {
    private history_;
    private currentEditIndex_;
    private text_;
    private selection_;
    get text(): string;
    getCursorPosition(): number;
    get selection(): SelectionRange;
    setText(text: string, cursorPosition?: number): void;
    replaceAllText(text: string, cursorPosition?: number): void;
    selectRange(range: SelectionRange): void;
    clearEditHistory(): void;
    setInitialText(text: string, selection?: SelectionRange): void;
    insertText(insertedText: string, mergeable?: boolean): void;
    insertChar(c: string): void;
    delete(): boolean;
    backspace(): boolean;
    private deleteInternal_;
    cut(): boolean;
    paste(pastedText: string): boolean;
    addOrMergeEdit(edit: Edit): void;
    commitCurrentEdit(): void;
    canUndo(): boolean;
    canRedo(): boolean;
    undo(): {
        text: string;
        selection: SelectionRange;
    } | null;
    redo(): {
        text: string;
        selection: SelectionRange;
    } | null;
    clear(): void;
    get length(): number;
    get currentEditIndex(): number;
}
