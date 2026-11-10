import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { SkColor as skia_mojom_SkColor } from '//resources/mojo/skia/public/mojom/skcolor.mojom-webui.js';
export declare const IconTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum IconType {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kIconSet = 0,
    kMaskUrl = 1,
    kFullColorUrl = 2
}
export declare const IconHandleSpec: {
    $: mojo.internal.MojomType;
};
export declare const IconUpdateSpec: {
    $: mojo.internal.MojomType;
};
export declare interface IconHandleMojoType {
    handleId: bigint;
}
export type IconHandle = IconHandleMojoType;
export declare interface IconUpdateMojoType {
    handleId: bigint;
    iconUrlOrName: (string | null);
    iconType: IconType;
    color: (skia_mojom_SkColor | null);
}
export type IconUpdate = IconUpdateMojoType;
