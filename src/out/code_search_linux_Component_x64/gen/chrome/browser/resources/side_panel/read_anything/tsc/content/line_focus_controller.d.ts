import type { Segment } from '../read_aloud/read_aloud_types.js';
import { LineFocusModel } from './line_focus_model.js';
import type { MoveModeDelegate } from './line_focus_move_mode.js';
import { LineFocusMovement, LineFocusStyle, LineFocusType } from './read_anything_types.js';
export interface LineFocusListener {
    onLineFocusContentPositionChange(newTop: number, newHeight: number, newFocalPoint: number): void;
    onLineFocusVisualPositionChange(newTop: number, newHeight: number): void;
    onNeedScrollForLineFocus(scrollDiff: number, instant?: boolean): void;
    onNeedScrollToTop(): void;
    onLineFocusModesChanged(): void;
    onScrollBufferForLineFocusChange(needsBuffer: boolean): void;
}
export declare class LineFocusController implements MoveModeDelegate {
    private model_;
    private readonly listeners_;
    private speechController_;
    private logger_;
    private visualBrowserProxy_;
    constructor(model_?: LineFocusModel);
    getCurrentLineFocusType(): LineFocusType;
    getCurrentLineFocusStyle(): LineFocusStyle;
    getCurrentLineFocusMovement(): LineFocusMovement;
    addListener(listener: LineFocusListener): void;
    isEnabled(): boolean;
    onKeyDown(e: KeyboardEvent, container: HTMLElement, height: number): boolean;
    onScrollEnd(newScrollTop: number): void;
    onMouseMove(y: number): void;
    onMouseMoveInToolbar(y: number): void;
    onAllMenusClose(): void;
    onWordBoundary(segments: Segment[]): void;
    onTextLocationsChange(container: HTMLElement, height: number): void;
    restoreFromPrefs(lastEnabledValue: number, isOn: boolean, container: HTMLElement, height: number): void;
    onStyleChange(style: LineFocusStyle, container: HTMLElement, height: number): void;
    onMovementChange(movement: LineFocusMovement, container: HTMLElement, height: number): void;
    private setStyleAndMovement_;
    private updateStrategies_;
    private propagateLineFocus_;
    private lineFocusToEnumValue_;
    toggle(isOn: boolean, container: HTMLElement, height: number): void;
    notifyMoveWithContentPositionChange(): void;
    notifyMoveWithVisualPositionChange(): void;
    notifyScroll(scrollDiff: number, instant?: boolean): void;
    notifyScrollToTop(): void;
    notifyScrollBuffer(needsBuffer: boolean): void;
    onSessionEnd(): void;
    static getInstance(): LineFocusController;
    static setInstance(obj: LineFocusController): void;
}
