import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const RecommendationTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum RecommendationType {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kUsed = 0,
    kShared = 1,
    kTrending = 2
}
export declare const FileSpec: {
    $: mojo.internal.MojomType;
};
export declare interface FileMojoType {
    id: string;
    justificationText: string;
    iconUrl: url_mojom_Url;
    title: string;
    itemUrl: url_mojom_Url;
    recommendationType: (RecommendationType | null);
}
export type File = FileMojoType;
