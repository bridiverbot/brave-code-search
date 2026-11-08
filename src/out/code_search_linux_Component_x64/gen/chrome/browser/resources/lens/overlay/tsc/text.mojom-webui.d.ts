import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Geometry as lens_mojom_Geometry } from './geometry.mojom-webui.js';
import { BigBuffer as mojoBase_mojom_BigBuffer } from '//resources/mojo/mojo/public/mojom/base/big_buffer.mojom-webui.js';
import { SkColor as skia_mojom_SkColor } from '//resources/mojo/skia/public/mojom/skcolor.mojom-webui.js';
import { Size as gfx_mojom_Size } from '//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js';
export declare const WritingDirectionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum WritingDirection {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kLeftToRight = 0,
    kRightToLeft = 1,
    kTopToBottom = 2
}
export declare const AlignmentSpec: {
    $: mojo.internal.MojomType;
};
export declare enum Alignment {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kDefaultLeftAlgined = 0,
    kRightAligned = 1,
    kCenterAligned = 2
}
export declare const TextSpec: {
    $: mojo.internal.MojomType;
};
export declare const TextLayoutSpec: {
    $: mojo.internal.MojomType;
};
export declare const WordSpec: {
    $: mojo.internal.MojomType;
};
export declare const LineSpec: {
    $: mojo.internal.MojomType;
};
export declare const BackgroundImageDataSpec: {
    $: mojo.internal.MojomType;
};
export declare const TranslatedLineSpec: {
    $: mojo.internal.MojomType;
};
export declare const TranslatedParagraphSpec: {
    $: mojo.internal.MojomType;
};
export declare const ParagraphSpec: {
    $: mojo.internal.MojomType;
};
export declare const FormulaMetadataSpec: {
    $: mojo.internal.MojomType;
};
export declare interface TextMojoType {
    textLayout: (TextLayout | null);
    contentLanguage: (string | null);
}
export type Text = TextMojoType;
export declare interface TextLayoutMojoType {
    paragraphs: Paragraph[];
}
export type TextLayout = TextLayoutMojoType;
export declare interface WordMojoType {
    plainText: string;
    textSeparator: (string | null);
    geometry: (lens_mojom_Geometry | null);
    writingDirection: (WritingDirection | null);
    formulaMetadata: (FormulaMetadata | null);
}
export type Word = WordMojoType;
export declare interface LineMojoType {
    words: Word[];
    geometry: (lens_mojom_Geometry | null);
}
export type Line = LineMojoType;
export declare interface BackgroundImageDataMojoType {
    backgroundImage: mojoBase_mojom_BigBuffer;
    imageSize: gfx_mojom_Size;
    verticalPadding: number;
    horizontalPadding: number;
    textMask: mojoBase_mojom_BigBuffer;
}
export type BackgroundImageData = BackgroundImageDataMojoType;
export declare interface TranslatedLineMojoType {
    words: Word[];
    translation: string;
    textColor: skia_mojom_SkColor;
    backgroundPrimaryColor: skia_mojom_SkColor;
    backgroundImageData: (BackgroundImageData | null);
    geometry: (lens_mojom_Geometry | null);
}
export type TranslatedLine = TranslatedLineMojoType;
export declare interface TranslatedParagraphMojoType {
    lines: TranslatedLine[];
    resizedBitmapSize: gfx_mojom_Size;
    alignment: (Alignment | null);
    writingDirection: (WritingDirection | null);
    contentLanguage: (string | null);
}
export type TranslatedParagraph = TranslatedParagraphMojoType;
export declare interface ParagraphMojoType {
    lines: Line[];
    translation: (TranslatedParagraph | null);
    geometry: (lens_mojom_Geometry | null);
    writingDirection: (WritingDirection | null);
    contentLanguage: (string | null);
}
export type Paragraph = ParagraphMojoType;
export declare interface FormulaMetadataMojoType {
    latex: (string | null);
}
export type FormulaMetadata = FormulaMetadataMojoType;
