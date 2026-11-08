import '//resources/cr_elements/cr_auto_img/cr_auto_img.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
/**
 * @fileoverview This file provides a custom element displaying a page favicon.
 */
declare class PageFaviconElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    static get properties(): {
        url: {
            type: StringConstructor;
        };
        /**
         * Whether the favicon should use fallback to host. Used for the purpose
         * of fetching fallback favicons when there is no local exact match.
         */
        fallbackToHost: {
            type: BooleanConstructor;
        };
        /**
         * Whether this visit is known to sync already. Used for the purpose of
         * fetching higher quality favicons in that case.
         */
        isKnownToSync: {
            type: BooleanConstructor;
        };
        size: {
            type: NumberConstructor;
        };
    };
    accessor url: Url | undefined;
    accessor fallbackToHost: boolean;
    accessor isKnownToSync: boolean;
    accessor size: number;
    willUpdate(changedProperties: PropertyValues<this>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'page-favicon': PageFaviconElement;
    }
}
export {};
