import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
/**
 * @fileoverview This file provides a custom element displaying a horizontal
 * carousel for the carousel elements.
 */
export interface HorizontalCarouselElement {
    $: {
        backButton: HTMLElement;
        carouselContainer: HTMLElement;
        forwardButton: HTMLElement;
    };
}
export declare class HorizontalCarouselElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        showForwardButton_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        showBackButton_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    private resizeObserver_;
    private eventTracker_;
    protected accessor showBackButton_: boolean;
    protected accessor showForwardButton_: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected onCarouselBackClick_(): void;
    protected onCarouselForwardClick_(): void;
    private onTabFocus_;
    private setShowCarouselButtons_;
    private calculateTargetPosition_;
}
declare global {
    interface HTMLElementTagNameMap {
        'horizontal-carousel': HorizontalCarouselElement;
    }
}
