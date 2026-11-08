import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const ProductInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarkProductInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ProductInfoMojoType {
    title: string;
    clusterTitle: string;
    domain: string;
    imageUrl: url_mojom_Url;
    productUrl: url_mojom_Url;
    currentPrice: string;
    previousPrice: string;
    clusterId: bigint;
    categoryLabels: string[];
    priceSummary: string;
}
export type ProductInfo = ProductInfoMojoType;
export declare interface BookmarkProductInfoMojoType {
    bookmarkId: bigint;
    info: ProductInfo;
}
export type BookmarkProductInfo = BookmarkProductInfoMojoType;
