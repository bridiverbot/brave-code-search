import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Polygon as lens_mojom_Polygon } from './polygon.mojom-webui.js';
import { RectF as gfx_mojom_RectF } from '//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js';
export declare const CenterRotatedBoxSpec: {
    $: mojo.internal.MojomType;
};
export declare const GeometrySpec: {
    $: mojo.internal.MojomType;
};
export declare const CenterRotatedBox_CoordinateTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum CenterRotatedBox_CoordinateType {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kUnspecified = 0,
    kNormalized = 1,
    kImage = 2
}
export declare interface CenterRotatedBoxMojoType {
    box: gfx_mojom_RectF;
    rotation: number;
    coordinateType: CenterRotatedBox_CoordinateType;
}
export type CenterRotatedBox = CenterRotatedBoxMojoType;
export declare interface GeometryMojoType {
    boundingBox: CenterRotatedBox;
    segmentationPolygon: lens_mojom_Polygon[];
}
export type Geometry = GeometryMojoType;
