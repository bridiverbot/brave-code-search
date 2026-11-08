import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface GraphTabElement {
    $: {
        toolTips: HTMLElement;
        graphBody: SVGElement;
    };
}
export declare class GraphTabElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    /**
     * The Mojo graph data source.
     */
    private graphDump_;
    /**
     * The WebView's content window object.
     */
    private graph_;
    private resizeObserver_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected onRequestNodeDescriptions_(event: CustomEvent<bigint[]>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'graph-tab': GraphTabElement;
    }
}
