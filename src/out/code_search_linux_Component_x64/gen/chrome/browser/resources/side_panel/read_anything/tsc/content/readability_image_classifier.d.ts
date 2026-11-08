export declare class ReadabilityImageClassifier {
    static readonly INLINE_CLASS = "distilled-inline-img";
    static readonly FULL_WIDTH_CLASS = "distilled-full-width-img";
    static readonly POSSIBLY_TRANSPARENT_CLASS = "possibly-transparent-img";
    static readonly DOMINANT_IMAGE_MIN_VIEWPORT_RATIO = 0.8;
    static readonly SRC_CANDIDATES: string[];
    static readonly SRCSET_CANDIDATES: string[];
    static readonly SIZES_CANDIDATES: string[];
    private smallAreaUpperBoundDp;
    private inlineWidthFallbackUpperBoundDp;
    private mathyKeywordsRegex_;
    private mathyAltTextRegex_;
    private filenameRegex_;
    constructor();
    private isDefinitelyInline_;
    private isDefinitelyFullWidth_;
    private classifyByFallback_;
    private loadLazyImageAttributes_;
    classify(img: HTMLImageElement): string;
    imageMightBeTransparent(img: HTMLImageElement): boolean;
    static processImagesIn(element: HTMLElement): void;
}
