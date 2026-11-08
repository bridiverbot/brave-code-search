import '../cr_auto_img/cr_auto_img.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare enum CrUrlListItemSize {
    COMPACT = "compact",
    MEDIUM = "medium",
    LARGE = "large"
}
export interface CrUrlListItemElement {
    $: {
        anchor: HTMLAnchorElement;
        badgesContainer: HTMLElement;
        badges: HTMLSlotElement;
        button: HTMLElement;
        content: HTMLSlotElement;
        metadata: HTMLElement;
        customIcon: HTMLSlotElement;
    };
}
declare const CrUrlListItemElementBase: typeof CrLitElement;
export declare class CrUrlListItemElement extends CrUrlListItemElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        alwaysShowSuffix: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        itemAriaLabel: {
            type: StringConstructor;
        };
        itemAriaDescription: {
            type: StringConstructor;
        };
        count: {
            type: NumberConstructor;
        };
        description: {
            type: StringConstructor;
        };
        url: {
            type: StringConstructor;
        };
        title: {
            reflect: boolean;
            type: StringConstructor;
        };
        hasBadges: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        hasDescriptions_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        hasSlottedContent_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        reverseElideDescription: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isFolder_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        size: {
            type: StringConstructor;
            reflect: boolean;
        };
        imageUrls: {
            type: ArrayConstructor;
        };
        firstImageLoaded_: {
            type: BooleanConstructor;
            state: boolean;
        };
        forceHover: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        descriptionMeta: {
            type: StringConstructor;
        };
        /**
         * Flag that determines if the element should use an anchor tag or a
         * button element as its focusable item. An anchor provides the native
         * context menu and browser interactions for links, while a button
         * provides its own unique functionality, such as pressing space to
         * activate.
         */
        asAnchor: {
            type: BooleanConstructor;
        };
        asAnchorTarget: {
            type: StringConstructor;
        };
    };
    accessor alwaysShowSuffix: boolean;
    accessor asAnchor: boolean;
    accessor asAnchorTarget: string;
    accessor itemAriaLabel: string | undefined;
    accessor itemAriaDescription: string | undefined;
    accessor count: number | undefined;
    accessor description: string | undefined;
    accessor reverseElideDescription: boolean;
    accessor hasBadges: boolean;
    protected accessor hasDescriptions_: boolean;
    protected accessor hasSlottedContent_: boolean;
    protected accessor isFolder_: boolean;
    accessor size: CrUrlListItemSize;
    accessor title: string;
    accessor url: string | undefined;
    accessor imageUrls: string[];
    protected accessor firstImageLoaded_: boolean;
    accessor forceHover: boolean;
    accessor descriptionMeta: string;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    focus(): void;
    getFocusableElement(): HTMLElement;
    private resetFirstImageLoaded_;
    protected getItemAriaDescription_(): string | undefined;
    protected getItemAriaLabel_(): string;
    protected getAnchorAriaDescription_(): string | undefined;
    protected getAnchorAriaLabel_(): string | undefined;
    protected getButtonAriaDescription_(): string | undefined;
    protected getButtonAriaLabel_(): string | undefined;
    protected getDisplayedCount_(): string;
    protected getFavicon_(): string;
    protected shouldShowImageUrl_(_url: string, index: number): boolean;
    protected onBadgesSlotchange_(): void;
    protected onContentSlotchange_(): void;
    private setActiveState_;
    protected shouldShowFavicon_(): boolean;
    protected shouldShowUrlImage_(): boolean;
    protected shouldShowFolderImages_(): boolean;
    protected shouldShowFolderIcon_(): boolean;
    protected shouldShowFolderCount_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-url-list-item': CrUrlListItemElement;
    }
}
export {};
