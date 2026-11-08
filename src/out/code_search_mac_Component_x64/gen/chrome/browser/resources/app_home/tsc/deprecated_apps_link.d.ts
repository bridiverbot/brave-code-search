import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class DeprecatedAppsLinkElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        deprecationLinkString: {
            type: StringConstructor;
        };
        display: {
            type: BooleanConstructor;
        };
    };
    accessor deprecationLinkString: string;
    accessor display: boolean;
    constructor();
    protected onLinkClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'deprecated-apps-link': DeprecatedAppsLinkElement;
    }
}
