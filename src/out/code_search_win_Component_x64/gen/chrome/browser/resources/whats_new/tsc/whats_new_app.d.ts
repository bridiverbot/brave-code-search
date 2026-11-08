import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class WhatsNewAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        url_: {
            type: StringConstructor;
        };
        isStaging_: {
            type: BooleanConstructor;
        };
    };
    protected accessor url_: string;
    protected accessor isStaging_: boolean;
    private beforeUnloadHandlerBound_;
    private debugInfo_;
    private eventTracker_;
    private heartbeatTimeOnPage_;
    private isAutoOpen_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private beforeUnloadHandler_;
    /**
     * Handles the URL result of sending the initialize WebUI message.
     * @param url The What's New URL to use in the iframe.
     */
    private handleUrlResult_;
    private handleMessage_;
}
declare global {
    interface HTMLElementTagNameMap {
        'whats-new-app': WhatsNewAppElement;
    }
}
