import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { String16 as mojoBase_mojom_String16 } from '../../../mojo/public/mojom/base/string16.mojom-webui.js';
import { Url as url_mojom_Url } from '../../../url/mojom/url.mojom-webui.js';
import { FuseboxAction as fuseboxAction_mojom_FuseboxAction } from './fusebox_action.mojom-webui.js';
export declare const ColorTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ColorType {
    MIN_VALUE = 0,
    MAX_VALUE = 16,
    kUnknown = 0,
    kCanvas = 1,
    kSurface = 2,
    kPrimary = 3,
    kTertiary = 4,
    kOnTertiary = 5,
    kOnSurfaceLinkVisited = 6,
    kOnSurfaceDefault = 7,
    kOnSurfacePositive = 8,
    kOnSurfaceNegative = 9,
    kOnSurfaceEmphasis = 10,
    kOnSurfaceDeemphasis = 11,
    kOutlineDefault = 12,
    kSubtitleText = 13,
    kSuggestQueryText = 14,
    kSuggestHintText = 15,
    kSuggestActionHigh = 16
}
export declare const SuggestStyleSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SuggestStyle {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    kUnspecified = 0,
    kDefault = 1,
    kEnriched = 2,
    kAnnotated = 3,
    kRichImage = 4
}
export declare const IconTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum IconType {
    MIN_VALUE = 0,
    MAX_VALUE = 18,
    kIconTypeUnspecified = 0,
    kHistory = 1,
    kSearchLoop = 2,
    kSearchLoopWithSparkle = 3,
    kTrending = 4,
    kSubArrowRight = 5,
    kGlobeWithSearchLoop = 6,
    kBanana = 7,
    kFavicon = 8,
    kNotesSpark = 9,
    kDraftSpark = 10,
    kLightbulb = 11,
    kAttachFile = 12,
    kSchool = 13,
    kInkPen = 14,
    kTab = 15,
    kPhotoSpark = 16,
    kBolt = 17,
    kImageCreate = 18
}
export declare const SecondaryTextPlacementSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SecondaryTextPlacement {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kUnspecified = 0,
    kInFrontOfPrimaryText = 1,
    kBelowPrimaryText = 2
}
export declare const FormattedStringFragmentSpec: {
    $: mojo.internal.MojomType;
};
export declare const FormattedStringSpec: {
    $: mojo.internal.MojomType;
};
export declare const ImageSpec: {
    $: mojo.internal.MojomType;
};
export declare const SuggestTemplateInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare interface FormattedStringFragmentMojoType {
    startIndex: number;
    color: ColorType;
    isBolded: boolean;
}
export type FormattedStringFragment = FormattedStringFragmentMojoType;
export declare interface FormattedStringMojoType {
    text: mojoBase_mojom_String16;
    fragments: FormattedStringFragment[];
    a11yText: (mojoBase_mojom_String16 | null);
}
export type FormattedString = FormattedStringMojoType;
export declare interface ImageMojoType {
    url: url_mojom_Url;
    dominantColor: string;
}
export type Image = ImageMojoType;
export declare interface SuggestTemplateInfoMojoType {
    primaryText: FormattedString;
    secondaryText: (FormattedString | null);
    secondaryTextPlacement: SecondaryTextPlacement;
    style: SuggestStyle;
    image: (Image | null);
    typeIcon: IconType;
    fuseboxAction: (fuseboxAction_mojom_FuseboxAction | null);
}
export type SuggestTemplateInfo = SuggestTemplateInfoMojoType;
