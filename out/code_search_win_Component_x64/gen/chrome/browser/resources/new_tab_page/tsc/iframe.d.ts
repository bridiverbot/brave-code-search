import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
/**
 * @fileoverview Wrapper around <iframe> element that lets us mock out loading
 * and postMessaging in tests.
 */
export declare class IframeElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        allow: {
            reflect: boolean;
            type: StringConstructor;
        };
        src: {
            reflect: boolean;
            type: StringConstructor;
        };
    };
    accessor allow: string;
    accessor src: string;
    postMessage(message: unknown): void;
    protected getSrc_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-iframe': IframeElement;
    }
}
