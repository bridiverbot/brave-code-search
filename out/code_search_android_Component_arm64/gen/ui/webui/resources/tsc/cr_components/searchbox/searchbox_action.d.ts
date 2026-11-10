import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
export declare class SearchboxActionElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        hint: {
            type: StringConstructor;
        };
        hintHtml_: {
            state: boolean;
            type: StringConstructor;
        };
        suggestionContents: {
            type: StringConstructor;
        };
        iconPath: {
            type: StringConstructor;
        };
        iconStyle_: {
            state: boolean;
            type: StringConstructor;
        };
        ariaLabel: {
            type: StringConstructor;
        };
        actionIndex: {
            type: NumberConstructor;
        };
    };
    accessor hint: string;
    protected accessor hintHtml_: TrustedHTML;
    accessor suggestionContents: string;
    accessor iconPath: string;
    protected accessor iconStyle_: string;
    accessor ariaLabel: string;
    accessor actionIndex: number;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    private onActionClick_;
    private onActionKeyDown_;
    private onActionMouseDown_;
    private computeHintHtml_;
    private computeActionIconStyle_;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-searchbox-action': SearchboxActionElement;
    }
}
