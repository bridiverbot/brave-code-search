import type { VisualBrowserProxy } from '../app/visual_browser_proxy.js';
import type { Segment } from '../read_aloud/read_aloud_types.js';
import { SpeechController } from '../read_aloud/speech_controller.js';
import type { MetricsBrowserProxy } from '../shared/metrics_browser_proxy.js';
import type { LineFocusModel } from './line_focus_model.js';
import type { LineFocusStyleMode } from './line_focus_style_mode.js';
import { LineFocusMovement, LineFocusNotificationType } from './read_anything_types.js';
export interface MoveModeDelegate {
    notifyMoveWithContentPositionChange(): void;
    notifyMoveWithVisualPositionChange(): void;
    notifyScroll(scrollDiff: number, instant?: boolean): void;
    notifyScrollToTop(): void;
    notifyScrollBuffer(needsBuffer: boolean): void;
}
export declare abstract class LineFocusMoveMode {
    protected model_: LineFocusModel;
    protected styleMode_: LineFocusStyleMode;
    protected delegate_: MoveModeDelegate;
    protected movementThreshold: number;
    protected lastFrameScrollTop_: number | null;
    protected textContentContainer_: HTMLElement | null;
    protected viewportHeight_: number;
    protected speechController_: SpeechController;
    protected metricsBrowserProxy_: MetricsBrowserProxy;
    protected visualBrowserProxy_: VisualBrowserProxy;
    constructor(model_: LineFocusModel, styleMode_: LineFocusStyleMode, delegate_: MoveModeDelegate);
    abstract getMovement(): LineFocusMovement;
    abstract onActivated(container: HTMLElement, height: number): void;
    abstract onMouseMove(y: number): void;
    abstract onMouseMoveInToolbar(y: number): void;
    abstract onTextLocationsChange(container: HTMLElement, height: number): void;
    abstract onScrollEnd(newScrollTop: number): void;
    snapToNextLine(isForward: boolean): boolean;
    onWordBoundary(segments: Segment[]): void;
    protected abstract needsScrollBuffer(): boolean;
    protected abstract moveToRect(rect: DOMRect): void;
    protected abstract getScrollDiffForRecentering(currentIndex: number): number;
    protected recenterCurrentTextLineIfNeeded(instant: boolean): boolean;
    protected setFocalPoint(focalPointY: number, notificationType: LineFocusNotificationType): void;
    protected getSafeIndex(isForward: boolean): number;
    protected scroll(scrollDiff: number, instant?: boolean): void;
    protected resetScrollState(newScrollTop: number): void;
    protected initializeSnapIndex(isForward: boolean): void;
    protected updatePositions(container: HTMLElement, height: number): void;
    protected setupEnabledMode(container: HTMLElement, height: number): void;
    protected updateScrollBuffer(): void;
    protected getCenterY(): number;
    protected notifyScrollToTop(): void;
    private updateSnapIndex_;
}
export declare class LineFocusStaticMoveMode extends LineFocusMoveMode {
    getMovement(): LineFocusMovement;
    onActivated(container: HTMLElement, height: number): void;
    onMouseMove(_y: number): void;
    onMouseMoveInToolbar(_y: number): void;
    onScrollEnd(newScrollTop: number): void;
    onTextLocationsChange(container: HTMLElement, height: number): void;
    protected moveToRect(rect: DOMRect): void;
    protected needsScrollBuffer(): boolean;
    protected getScrollDiffForRecentering(currentIndex: number): number;
}
export declare class LineFocusCursorMoveMode extends LineFocusMoveMode {
    getMovement(): LineFocusMovement;
    onActivated(container: HTMLElement, height: number): void;
    onMouseMove(y: number): void;
    onMouseMoveInToolbar(y: number): void;
    onScrollEnd(newScrollTop: number): void;
    onTextLocationsChange(container: HTMLElement, height: number): void;
    protected moveToRect(rect: DOMRect): void;
    private updatePositionsAndScrollTop_;
    protected needsScrollBuffer(): boolean;
    protected getScrollDiffForRecentering(currentIndex: number): number;
    private getFirstVisibleFocalPoint_;
    private updateScrollOffset_;
}
export declare class LineFocusNoneMoveMode extends LineFocusMoveMode {
    private movement_;
    constructor(model: LineFocusModel, styleMode: LineFocusStyleMode, delegate: MoveModeDelegate, movement_: LineFocusMovement);
    getMovement(): LineFocusMovement;
    onActivated(_container: HTMLElement, _height: number): void;
    onMouseMove(_y: number): void;
    onMouseMoveInToolbar(_y: number): void;
    onScrollEnd(_newScrollTop: number): void;
    onTextLocationsChange(_container: HTMLElement, _height: number): void;
    onWordBoundary(_segments: Segment[]): void;
    snapToNextLine(_isForward: boolean): boolean;
    protected moveToRect(_rect: DOMRect): void;
    protected needsScrollBuffer(): boolean;
    protected getScrollDiffForRecentering(_currentIndex: number): number;
}
