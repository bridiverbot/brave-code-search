import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface LocalizedLinkElement {
    $: {
        container: HTMLElement;
    };
}
export declare class LocalizedLinkElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The localized string that contains up to one anchor tag, the text
         * within which will be aria-labelledby the entire localizedString.
         */
        localizedString: {
            type: StringConstructor;
        };
        /**
         * If provided, the URL that the anchor tag will point to. There is no
         * need to provide a linkUrl if the URL is embedded in the
         * localizedString.
         */
        linkUrl: {
            type: StringConstructor;
        };
        /**
         * If true, localized link will be disabled.
         */
        linkDisabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * localizedString, with aria attributes and the optionally provided
         * link.
         */
        containerInnerHTML_: {
            type: StringConstructor;
        };
    };
    accessor localizedString: string;
    accessor linkUrl: string;
    accessor linkDisabled: boolean;
    private accessor containerInnerHTML_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * Attaches aria attributes and optionally provided link to the provided
     * localizedString.
     * @return localizedString formatted with additional ids, spans, and an
     *     aria-labelledby tag
     */
    private getAriaLabelledContent_;
    private setContainerInnerHtml_;
    private onAnchorTagClick_;
    /**
     *  Removes anchor tag from being targeted by chromeVox when link is
     *  disabled.
     */
    private updateAnchorTagTabIndex_;
}
declare global {
    interface HTMLElementTagNameMap {
        'localized-link': LocalizedLinkElement;
    }
}
