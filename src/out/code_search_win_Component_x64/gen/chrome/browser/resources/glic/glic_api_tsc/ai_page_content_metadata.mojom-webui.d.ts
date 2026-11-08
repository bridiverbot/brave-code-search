import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const MetaTagSpec: {
    $: mojo.internal.MojomType;
};
export declare const FrameMetadataSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageMetadataSpec: {
    $: mojo.internal.MojomType;
};
export declare interface MetaTagMojoType {
    name: string;
    content: string;
}
export type MetaTag = MetaTagMojoType;
export declare interface FrameMetadataMojoType {
    url: url_mojom_Url;
    metaTags: MetaTag[];
    hasMediaTranscripts: boolean;
}
export type FrameMetadata = FrameMetadataMojoType;
export declare interface PageMetadataMojoType {
    frameMetadata: FrameMetadata[];
}
export type PageMetadata = PageMetadataMojoType;
