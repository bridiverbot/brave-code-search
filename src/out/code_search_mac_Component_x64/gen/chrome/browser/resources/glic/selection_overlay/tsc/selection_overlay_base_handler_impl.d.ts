import type { GenericPendingAssociatedReceiver } from '//resources/mojo/mojo/public/mojom/base/generic_pending_associated_receiver.mojom-webui.js';
import type { UnguessableToken } from '//resources/mojo/mojo/public/mojom/base/unguessable_token.mojom-webui.js';
import type { BitmapMappedFromTrustedProcess } from '//resources/mojo/skia/public/mojom/bitmap.mojom-webui.js';
import type { PointF, RectF } from '//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js';
import type { SelectedRegion } from '/lens/selection_overlay_base_handler.js';
import { RegionSource, SelectionOverlayBaseHandler } from '/lens/selection_overlay_base_handler.js';
import type { //
InteractionOptions, //
SuggestedActionsListenerRemote } from './selection_overlay.mojom-webui.js';
export declare class SelectionOverlayBaseHandlerImpl extends SelectionOverlayBaseHandler {
    addNotifyOverlayClosingListener(_callback: () => void): number;
    closePreselectionBubble(): void;
    notifyOverlayInitialized(): void;
    addBackgroundBlur(): void;
    setLiveBlur(enabled: boolean): void;
    removeListener(id: number): boolean;
    addOnOverlayReshownListener(_callback: (screenshotData: BitmapMappedFromTrustedProcess) => void): number;
    addScreenshotDataReceivedListener(callback: (screenshotData: BitmapMappedFromTrustedProcess, isSidePanelOpen: boolean) => void): number;
    addSetInteractionOptionsListener(callback: (options: InteractionOptions) => void): number;
    addSetSidePanelOpenListener(callback: (open: boolean) => void): number;
    addClearRegionSelectionListener(callback: () => void): number;
    addClearAllSelectionsListener(callback: () => void): number;
    addNotifyResultsPanelOpenedListener(callback: () => void): number;
    addSetPostRegionSelectionListener(callback: (region: RectF) => void): number;
    addMultiRegionSelectionListener(callback: (regions: SelectedRegion[]) => void): number;
    adjustRegionSelected(rect: RectF, source: RegionSource, id?: string): void;
    adjustPolylineSelected(points: PointF[], source: RegionSource, id?: string): void;
    deleteRegion(id: string, source: RegionSource): void;
    submitPrompt(prompt: string): void;
    getSuggestedActions(listener: SuggestedActionsListenerRemote): void;
    executeSuggestedAction(actionId: UnguessableToken, channel: GenericPendingAssociatedReceiver | null): void;
    dismissOverlay(reason: number): void;
    openSettings(): void;
}
