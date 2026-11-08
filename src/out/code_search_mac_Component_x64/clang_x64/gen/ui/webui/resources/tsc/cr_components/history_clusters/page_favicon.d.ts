import '//resources/cr_elements/cr_auto_img/cr_auto_img.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
/**
 * @fileoverview This file provides a custom element displaying a page favicon.
 */
/**
 * TODO(tommycli): This element should be renamed to reflect the reality that
 * it's used to both render the visit's "important image" if it exists, and
 * falls back to the favicon if it doesn't exist.
 */
export declare class PageFaviconElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * Whether the cluster is in the side panel.
         */
        inSidePanel_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * The URL for which the favicon is shown.
         */
        url: {
            type: StringConstructor;
        };
        /**
         * Whether this visit is known to sync already. Used for the purpose of
         * fetching higher quality favicons in that case.
         */
        isKnownToSync: {
            type: BooleanConstructor;
        };
        /**
         * The URL of the representative image for the page. Not every page has
         * this defined, in which case we fallback to the favicon.
         * Mojo Url type is type mapped to a TS string.
         */
        imageUrl_: {
            type: StringConstructor;
        };
        isImageCover_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor isKnownToSync: boolean;
    accessor url: Url | null;
    protected accessor imageUrl_: Url | null;
    protected accessor inSidePanel_: boolean;
    protected accessor isImageCover_: boolean;
    getImageUrlForTesting(): Url | null;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private urlAndIsKnownToSyncChanged_;
}
declare global {
    interface HTMLElementTagNameMap {
        'page-favicon': PageFaviconElement;
    }
}
