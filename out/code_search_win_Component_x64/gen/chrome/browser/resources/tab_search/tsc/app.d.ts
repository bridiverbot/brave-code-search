import './tab_search_page.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class TabSearchAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        availableHeight_: {
            type: NumberConstructor;
        };
    };
    private apiProxy_;
    private documentVisibilityChangedListener_;
    private listenerIds_;
    protected accessor availableHeight_: number;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private updateAvailableHeight_;
}
declare global {
    interface HTMLElementTagNameMap {
        'tab-search-app': TabSearchAppElement;
    }
}
