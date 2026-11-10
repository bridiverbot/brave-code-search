import type { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ProfileState } from './manage_profiles_browser_proxy.js';
export interface DraggableTileListInterface {
    getDraggableTile(index: number): HTMLElement;
    getDraggableTileIndex(tile: HTMLElement): number;
    onDragEnd(initialIndex: number, finalIndex: number): void;
}
export declare class DragDropReorderTileListDelegate {
    private element;
    private tileList_;
    private tileListInterface_;
    private transitionDuration_;
    private isDragEnabled_;
    private isDragging_;
    private draggingTile_;
    private dragStartIndex_;
    private dropTargetIndex_;
    private eventTracker_;
    constructor(element: CrLitElement, tileList: ProfileState[], tileListInterface: DraggableTileListInterface, transitionDuration?: number);
    clearListeners(): void;
    toggleDrag(toggle: boolean): void;
    private initializeListeners_;
    private onDragStart_;
    private onDragEnter_;
    private onDragOver_;
    private onDragEnd_;
    private shiftTile_;
    private resetShiftedTiles_;
    private resetShiftedTile_;
    private applyChanges_;
    private computeNewTargetIndex_;
    private markDraggingTile_;
    private resetDraggingTile_;
    private resetAllTilesWithoutTransition_;
    private setAllTilesTransitions_;
    private getDraggableTile_;
    private getDraggableTileIndex_;
}
