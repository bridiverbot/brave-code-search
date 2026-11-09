import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Time as mojoBase_mojom_Time } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
export declare const BAD_LATITUDE_LONGITUDE: number;
export declare const BAD_ALTITUDE: number;
export declare const BAD_ACCURACY: number;
export declare const BAD_HEADING: number;
export declare const BAD_SPEED: number;
export declare const GEO_PERMISSION_DENIED_ERROR_MESSAGE: string;
export declare const GEO_POSITION_UNAVAILABLE_ERROR_MESSAGE: string;
export declare const GeopositionErrorCodeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum GeopositionErrorCode {
    MIN_VALUE = 1,
    MAX_VALUE = 3,
    kPermissionDenied = 1,
    kPositionUnavailable = 2,
    kWifiDisabled = 3
}
export declare const GeopositionSpec: {
    $: mojo.internal.MojomType;
};
export declare const GeopositionErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare const GeopositionResultSpec: {
    $: mojo.internal.MojomType;
};
export declare interface GeopositionMojoType {
    latitude: number;
    longitude: number;
    altitude: number;
    accuracy: number;
    altitudeAccuracy: number;
    heading: number;
    speed: number;
    timestamp: mojoBase_mojom_Time;
    isPrecise: boolean;
}
export type Geoposition = GeopositionMojoType;
export declare interface GeopositionErrorMojoType {
    errorCode: GeopositionErrorCode;
    errorMessage: string;
    errorTechnical: string;
}
export type GeopositionError = GeopositionErrorMojoType;
export declare interface GeopositionResult {
    position?: Geoposition;
    error?: GeopositionError;
}
export declare enum GeopositionResultFieldTags {
    POSITION = 0,
    ERROR = 1
}
export declare function whichGeopositionResult(u: GeopositionResult): GeopositionResultFieldTags;
