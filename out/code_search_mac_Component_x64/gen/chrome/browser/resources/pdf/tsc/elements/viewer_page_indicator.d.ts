import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Viewport } from '../viewport.js';
export interface ViewerPageIndicatorElement {
    $: {
        text: HTMLElement;
    };
}
export declare class ViewerPageIndicatorElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        index: {
            type: NumberConstructor;
        };
        pageLabels: {
            type: ArrayConstructor;
        };
    };
    accessor index: number;
    accessor pageLabels: number[] | null;
    private timerId_?;
    private viewport_;
    firstUpdated(): void;
    setViewport(viewport: Viewport): void;
    private fadeIn_;
    protected getLabel_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-page-indicator': ViewerPageIndicatorElement;
    }
}
