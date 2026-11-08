import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class LoadingPageElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        dialog: {
            type: BooleanConstructor;
        };
        editor: {
            type: BooleanConstructor;
        };
    };
    accessor dialog: boolean;
    accessor editor: boolean;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'loading-page': LoadingPageElement;
    }
}
