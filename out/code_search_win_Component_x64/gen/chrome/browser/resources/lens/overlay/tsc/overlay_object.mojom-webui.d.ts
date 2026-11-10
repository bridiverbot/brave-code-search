import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Geometry as lens_mojom_Geometry } from './geometry.mojom-webui.js';
export declare const OverlayObjectSpec: {
    $: mojo.internal.MojomType;
};
export declare interface OverlayObjectMojoType {
    id: string;
    geometry: lens_mojom_Geometry;
}
export type OverlayObject = OverlayObjectMojoType;
