import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class BraveEducationAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        url_: {
            type: StringConstructor;
        };
    };
    protected accessor url_: string;
    private eventTracker_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Handles the URL result of sending the initialize WebUI message.
     * @param url The What's New URL to use in the iframe.
     */
    private handleUrlResult_;
    private readCommandMessage;
    private handleMessage_;
}
declare global {
    interface HTMLElementTagNameMap {
        'brave-education-app': BraveEducationAppElement;
    }
}
