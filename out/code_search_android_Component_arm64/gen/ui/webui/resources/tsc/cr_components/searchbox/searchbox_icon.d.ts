import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { AutocompleteMatch } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
export interface SearchboxIconElement {
    $: {
        container: HTMLElement;
        image: HTMLImageElement;
        icon: HTMLElement;
        faviconImageContainer: HTMLElement;
        faviconImage: HTMLImageElement;
        iconImg: HTMLImageElement;
    };
}
export declare class SearchboxIconElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The default icon to show when no match is selected and/or for
         * non-navigation matches. Only set in the context of the searchbox input.
         */
        defaultIcon: {
            type: StringConstructor;
        };
        /**  Whether icon should have a background. */
        hasIconContainerBackground: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * Whether icon is in searchbox or not. Used to prevent
         * the match icon of rich suggestions from showing in the context of the
         * searchbox input.
         */
        inSearchbox: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * Whether icon is in keyword mode. Used in searchbox input to show
         * the generic search loupe icon instead of match favicons when the
         * keyword does not have its own custom icon.
         */
        inKeywordMode: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * Whether icon belongs to a featured search match (starter pack or
         * featured enterprise search).
         */
        isFeaturedSearch: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /** Used as a mask image on #icon if `faviconImage_` is empty. */
        maskImage: {
            type: StringConstructor;
            reflect: boolean;
        };
        /**
         * The URL of the current webpage when focused in the searchbox before
         * typing, used to load the page's favicon. Empty when typing, on the NTP,
         * or for consumers that do not provide a page URL.
         */
        pageUrl: {
            type: StringConstructor;
        };
        match: {
            type: ObjectConstructor;
        };
        /** Used as the image src for the #faviconImage if non-empty. */
        faviconImage_: {
            type: StringConstructor;
            reflect: boolean;
        };
        /**
         * Used as the image srcset for the #faviconImage if non-empty.
         */
        faviconImageSrcSet_: {
            state: boolean;
            type: StringConstructor;
        };
        /**
         * Whether the match features an image (as opposed to an icon or favicon).
         */
        hasImage_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * Whether to use the favicon image instead of the default vector icon
         * for the suggestion.
         */
        showFaviconImage_: {
            state: boolean;
            type: BooleanConstructor;
        };
        /**
         * Flag indicating whether or not a favicon is loading.
         */
        faviconLoading_: {
            state: boolean;
            type: BooleanConstructor;
        };
        /**
         * Flag indicating whether or not a favicon was successfully loaded.
         * This is used to force the WebUI popup to make use of the default vector
         * icon when the favicon image is unavailable.
         */
        faviconError_: {
            state: boolean;
            type: BooleanConstructor;
        };
        /** Used as the image src for the #iconImg if non-empty. */
        iconSrc_: {
            state: boolean;
            type: StringConstructor;
        };
        /**
         * Flag indicating whether or not an icon image is loading. This is used
         * to show a default icon while the image is loading.
         */
        iconLoading_: {
            state: boolean;
            type: BooleanConstructor;
        };
        /**
         * Whether to use the icon image instead of the default icon for the
         * suggestion.
         */
        showIconImg_: {
            state: boolean;
            type: BooleanConstructor;
        };
        showImage_: {
            state: boolean;
            type: BooleanConstructor;
        };
        imageSrc_: {
            state: boolean;
            type: StringConstructor;
        };
        /**
         * Flag indicating whether or not an image is loading. This is used to
         * show a placeholder color while the image is loading.
         */
        imageLoading_: {
            state: boolean;
            type: BooleanConstructor;
        };
        /**
         * Flag indicating whether or not an image was successfully loaded. This
         * is used to suppress the default "broken image" icon as needed.
         */
        imageError_: {
            state: boolean;
            type: BooleanConstructor;
        };
        isTopChromeSearchbox_: {
            state: boolean;
            type: BooleanConstructor;
        };
        isLensSearchbox_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor defaultIcon: string;
    accessor hasIconContainerBackground: boolean;
    accessor inKeywordMode: boolean;
    accessor inSearchbox: boolean;
    accessor isFeaturedSearch: boolean;
    accessor maskImage: string;
    accessor match: AutocompleteMatch | null;
    accessor pageUrl: string;
    protected accessor faviconImage_: string;
    protected accessor faviconImageSrcSet_: string;
    protected accessor hasImage_: boolean;
    protected accessor showFaviconImage_: boolean;
    private accessor faviconLoading_;
    private accessor faviconError_;
    protected accessor iconSrc_: string;
    private accessor iconLoading_;
    protected accessor showIconImg_: boolean;
    protected accessor showImage_: boolean;
    protected accessor imageSrc_: string;
    private accessor imageLoading_;
    private accessor imageError_;
    private accessor isTopChromeSearchbox_;
    private accessor isLensSearchbox_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private computeFaviconUrl_;
    private computeFaviconImageSrcSet_;
    private computeFaviconImage_;
    private computeHasImage_;
    private computeShowIconImg_;
    private computeMaskImage_;
    private computeShowFaviconImage_;
    private computeSrc_;
    private computeIconSrc_;
    private computeShowImage_;
    private computeImageSrc_;
    protected getContainerBgColor_(): string;
    protected onFaviconLoad_(): void;
    protected onFaviconError_(): void;
    protected onIconLoad_(): void;
    protected onImageLoad_(): void;
    protected onImageError_(): void;
    private computeHasIconContainerBackground_;
    private computeIsFeaturedSearch_;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-searchbox-icon': SearchboxIconElement;
    }
}
