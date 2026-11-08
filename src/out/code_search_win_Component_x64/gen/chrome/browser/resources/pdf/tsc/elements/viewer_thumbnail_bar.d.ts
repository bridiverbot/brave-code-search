import './viewer_thumbnail.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ViewerThumbnailElement } from './viewer_thumbnail.js';
export interface ThumbnailData {
    type: string;
    pageNumber: number;
    imageData: ArrayBuffer;
    width: number;
}
export interface ViewerThumbnailBarElement {
    $: {
        thumbnails: HTMLElement;
    };
}
export declare class ViewerThumbnailBarElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        activePage: {
            type: NumberConstructor;
        };
        clockwiseRotations: {
            type: NumberConstructor;
        };
        docLength: {
            type: NumberConstructor;
        };
        sidenavCollapsed: {
            type: BooleanConstructor;
        };
        isPluginActive_: {
            type: BooleanConstructor;
        };
    };
    accessor activePage: number;
    accessor clockwiseRotations: number;
    accessor docLength: number;
    accessor sidenavCollapsed: boolean;
    protected accessor isPluginActive_: boolean;
    private intersectionObserver_;
    private pendingThumbnails_;
    private pluginController_;
    private processPendingThumbnailsDebounced_;
    private tracker_;
    constructor();
    firstUpdated(): void;
    private clearPendingThumbnails_;
    private observeThumbnails_;
    private processPendingThumbnails_;
    updated(changedProperties: PropertyValues<this>): void;
    private clickThumbnailForPage;
    getThumbnailForPage(pageNumber: number): ViewerThumbnailElement | null;
    /** @return The array of page numbers. */
    protected computePageNumbers_(): number[];
    protected getAriaLabel_(pageNumber: number): string;
    /** @return Whether the page is the current page. */
    protected isActivePage_(page: number): boolean;
    /** Forwards focus to a thumbnail when tabbing. */
    private onFocus_;
    private onKeydown_;
    private handleUpdateThumbnail_;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-thumbnail-bar': ViewerThumbnailBarElement;
    }
}
