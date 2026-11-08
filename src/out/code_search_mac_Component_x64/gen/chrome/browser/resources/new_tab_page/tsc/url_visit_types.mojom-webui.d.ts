import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Time as mojoBase_mojom_Time, TimeDelta as mojoBase_mojom_TimeDelta } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const FormFactorSpec: {
    $: mojo.internal.MojomType;
};
export declare enum FormFactor {
    MIN_VALUE = 0,
    MAX_VALUE = 6,
    kUnknown = 0,
    kDesktop = 1,
    kPhone = 2,
    kTablet = 3,
    kAutomotive = 4,
    kWearable = 5,
    kTv = 6
}
export declare const DecorationTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum DecorationType {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kVisitedXAgo = 0,
    kMostRecent = 1,
    kFrequentlyVisited = 2,
    kFrequentlyVisitedAtTime = 3
}
export declare const VisitSourceSpec: {
    $: mojo.internal.MojomType;
};
export declare enum VisitSource {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kTab = 0,
    kHistory = 1
}
export declare const DecorationSpec: {
    $: mojo.internal.MojomType;
};
export declare const URLVisitSpec: {
    $: mojo.internal.MojomType;
};
export declare interface DecorationMojoType {
    type: DecorationType;
    displayString: string;
}
export type Decoration = DecorationMojoType;
export declare interface URLVisitMojoType {
    formFactor: FormFactor;
    isKnownToSync: boolean;
    source: VisitSource;
    sessionName: (string | null);
    url: url_mojom_Url;
    title: string;
    decoration: Decoration;
    relativeTime: mojoBase_mojom_TimeDelta;
    timestamp: (mojoBase_mojom_Time | null);
    urlKey: string;
    trainingRequestId: bigint;
}
export type URLVisit = URLVisitMojoType;
