import { UserAction } from './lens.mojom-webui.js';
import type { SemanticEvent } from './lens.mojom-webui.js';
export declare enum ContextMenuOption {
    COPY_TEXT = 0,
    TRANSLATE_TEXT = 1,
    SELECT_TEXT_IN_REGION = 2,
    TRANSLATE_TEXT_IN_REGION = 3,
    COPY_AS_IMAGE = 4,
    SAVE_AS_IMAGE = 5,
    COPY_TEXT_IN_REGION = 6,
    COUNT = 7
}
export declare enum LensOverlaySelectionCloseButtonEvent {
    SHOWN = 0,
    USED = 1,
    COUNT = 2
}
export declare function recordContextMenuOptionShown(invocationSource: string, contextMenuOption: ContextMenuOption): void;
export declare function recordLensOverlayInteraction(invocationSource: string, interaction: UserAction): void;
export declare function recordLensOverlaySemanticEvent(semanticEvent: SemanticEvent): void;
/** Records |durationMs| in the |metricName| histogram. */
export declare function recordTimeToWebUIReady(durationMs: number): void;
/**
 * Records |averageFps| in the Lens.Overlay.Performance.AverageFPS histogram.
 */
export declare function recordAverageFps(averageFps: number): void;
export declare function recordLensOverlaySelectionCloseButtonShown(invocationSource: string): void;
export declare function recordLensOverlaySelectionCloseButtonUsed(invocationSource: string): void;
