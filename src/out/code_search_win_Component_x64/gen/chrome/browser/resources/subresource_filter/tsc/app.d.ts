import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class SubresourceInternalsAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        shouldHighlightAds_: {
            type: BooleanConstructor;
        };
    };
    protected accessor shouldHighlightAds_: boolean;
    private proxy_;
    private listenerId_;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    protected onHighlightAdsCheckboxChange_(e: Event): void;
    private onInternalsPageSettingsChanged_;
}
declare global {
    interface HTMLElementTagNameMap {
        'subresource-internals-app': SubresourceInternalsAppElement;
    }
}
