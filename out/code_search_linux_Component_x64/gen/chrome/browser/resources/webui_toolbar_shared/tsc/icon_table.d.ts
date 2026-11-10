import type { SkColor } from '//resources/mojo/skia/public/mojom/skcolor.mojom-webui.js';
import { IconType } from './icon_handle.mojom-webui.js';
import type { IconHandle, IconUpdate } from './icon_handle.mojom-webui.js';
export interface IconInfo {
    urlOrName: string;
    type: IconType;
    color: SkColor | null;
}
export declare class IconTable {
    private static instance_?;
    static getInstance(): IconTable;
    private icons_;
    private fallbackIcon_;
    constructor();
    applyUpdates(updates: IconUpdate[]): void;
    reset(): void;
    getIconMaskUrl(handle: IconHandle): string | undefined;
    getIconColor(handle: IconHandle): string | undefined;
    getIconName(handle: IconHandle): string | undefined;
    getIconInfo(handle: IconHandle): IconInfo;
}
