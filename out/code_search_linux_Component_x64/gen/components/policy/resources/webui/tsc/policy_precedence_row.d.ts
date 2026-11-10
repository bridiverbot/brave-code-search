import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class PolicyPrecedenceRowElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        precedenceOrder: {
            type: ArrayConstructor;
        };
    };
    accessor precedenceOrder: string[];
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'policy-precedence-row': PolicyPrecedenceRowElement;
    }
}
