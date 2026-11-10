import type { BitmapMappedFromTrustedProcess } from '//resources/mojo/skia/public/mojom/bitmap.mojom-webui.js';
import type { PointF, RectF } from '//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js';
export declare enum RegionSource {
    CLICK = 0,
    SELECTION = 1,
    KEYBOARD = 2,
    SELECTION_CHANGE = 3
}
export interface SelectedRegion {
    id: string;
    region: RectF;
    polyline?: PointF[] | null;
}
export declare abstract class SelectionOverlayBaseHandler {
    private static instance;
    activeRegionId: string;
    static getInstance(): SelectionOverlayBaseHandler;
    static setInstance(obj: SelectionOverlayBaseHandler): void;
    abstract addMultiRegionSelectionListener(callback: (regions: SelectedRegion[]) => void): number;
    abstract removeListener(id: number): boolean;
    abstract addBackgroundBlur(): void;
    abstract addOnOverlayReshownListener(callback: (screenshotData: BitmapMappedFromTrustedProcess) => void): number;
    abstract addNotifyOverlayClosingListener(callback: () => void): number;
    abstract addScreenshotDataReceivedListener(callback: (screenshotData: BitmapMappedFromTrustedProcess, isSidePanelOpen: boolean) => void): number;
    abstract addClearRegionSelectionListener(callback: () => void): number;
    abstract addClearAllSelectionsListener(callback: () => void): number;
    abstract addNotifyResultsPanelOpenedListener(callback: () => void): number;
    abstract addSetPostRegionSelectionListener(callback: (region: RectF) => void): number;
    abstract adjustRegionSelected(rect: RectF, source: RegionSource, id?: string): void;
    abstract adjustPolylineSelected(points: PointF[], source: RegionSource, id?: string): void;
    abstract deleteRegion(id: string, source: RegionSource): void;
    abstract closePreselectionBubble(): void;
    abstract notifyOverlayInitialized(): void;
    abstract setLiveBlur(enabled: boolean): void;
}
