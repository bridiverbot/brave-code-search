import type { ContentPosition } from './read_anything_types.js';
export interface SelectionEndpoint {
    nodeId?: number;
    offset: number;
}
export declare class SelectionController {
    private contentBrowserProxy_;
    private nodeStore_;
    private scrollingOnSelection_;
    private currentSelection_;
    private isSelectionFromMainPanel_;
    hasSelection(): boolean;
    getCurrentSelectionStart(): ContentPosition | null;
    onSelectionChange(selection: Selection | null, container?: Node): void;
    private getSelectionIds_;
    onScroll(): void;
    updateSelection(selectionToUpdate: Selection | null): void;
    private getNewSelection_;
    private isValidSelectionTarget_;
    static getInstance(): SelectionController;
    static setInstance(obj: SelectionController): void;
}
