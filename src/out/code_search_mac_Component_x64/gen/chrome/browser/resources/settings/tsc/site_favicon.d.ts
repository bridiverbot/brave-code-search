import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SiteFaviconElement {
    $: {
        favicon: HTMLElement;
    };
}
export declare class SiteFaviconElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        faviconUrl: {
            type: StringConstructor;
        };
        url: {
            type: StringConstructor;
        };
        iconPath: {
            type: StringConstructor;
        };
    };
    accessor faviconUrl: string;
    accessor url: string;
    accessor iconPath: string;
    protected getBackgroundImage_(): string;
    /**
     * Removes the wildcard prefix from a pattern string.
     * @param pattern The pattern to remove the wildcard from.
     * @return The resulting pattern.
     */
    private removePatternWildcard_;
    /**
     * Ensures the URL has a scheme (assumes http if omitted).
     * @param url The URL with or without a scheme.
     * @return The URL with a scheme, or an empty string.
     */
    private ensureUrlHasScheme_;
}
declare global {
    interface HTMLElementTagNameMap {
        'site-favicon': SiteFaviconElement;
    }
}
