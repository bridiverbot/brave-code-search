import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Time as mojoBase_mojom_Time } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const AnnotationSpec: {
    $: mojo.internal.MojomType;
};
export declare enum Annotation {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kBookmarked = 0,
    kSearchResultsPage = 1
}
export declare const InteractionStateSpec: {
    $: mojo.internal.MojomType;
};
export declare enum InteractionState {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kDefault = 0,
    kHidden = 1,
    kDone = 2
}
export declare const MatchPositionSpec: {
    $: mojo.internal.MojomType;
};
export declare const SearchQuerySpec: {
    $: mojo.internal.MojomType;
};
export declare const RawVisitDataSpec: {
    $: mojo.internal.MojomType;
};
export declare const URLVisitSpec: {
    $: mojo.internal.MojomType;
};
export declare const ClusterSpec: {
    $: mojo.internal.MojomType;
};
export declare interface MatchPositionMojoType {
    begin: number;
    end: number;
}
export type MatchPosition = MatchPositionMojoType;
export declare interface SearchQueryMojoType {
    query: string;
    url: url_mojom_Url;
}
export type SearchQuery = SearchQueryMojoType;
export declare interface RawVisitDataMojoType {
    url: url_mojom_Url;
    visitTime: mojoBase_mojom_Time;
}
export type RawVisitData = RawVisitDataMojoType;
export declare interface URLVisitMojoType {
    visitId: bigint;
    normalizedUrl: url_mojom_Url;
    urlForDisplay: string;
    pageTitle: string;
    titleMatchPositions: MatchPosition[];
    urlForDisplayMatchPositions: MatchPosition[];
    rawVisitData: RawVisitData;
    duplicates: RawVisitData[];
    relativeDate: string;
    annotations: Annotation[];
    isKnownToSync: boolean;
    hasUrlKeyedImage: boolean;
    debugInfo: {
        [key: string]: string;
    };
}
export type URLVisit = URLVisitMojoType;
export declare interface ClusterMojoType {
    id: bigint;
    visits: URLVisit[];
    label: string;
    tabGroupName: (string | null);
    labelMatchPositions: MatchPosition[];
    relatedSearches: SearchQuery[];
    imageUrl: (url_mojom_Url | null);
    fromPersistence: boolean;
    debugInfo: (string | null);
}
export type Cluster = ClusterMojoType;
