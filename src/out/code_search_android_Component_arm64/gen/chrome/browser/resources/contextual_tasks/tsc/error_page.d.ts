import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class ContextualTasksErrorPageElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {};
    connectedCallback(): void;
    disconnectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'error-page': ContextualTasksErrorPageElement;
    }
}
