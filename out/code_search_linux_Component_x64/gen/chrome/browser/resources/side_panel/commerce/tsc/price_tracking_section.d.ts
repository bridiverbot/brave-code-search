import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import type { ProductInfo } from '//resources/cr_components/commerce/shared.mojom-webui.js';
import type { PriceInsightsInfo } from '//resources/cr_components/commerce/shopping_service.mojom-webui.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface PriceTrackingSectionElement {
    $: {
        toggleTitle: HTMLElement;
        toggleAnnotation: HTMLElement;
        toggle: HTMLElement;
    };
}
export declare class PriceTrackingSectionElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        productInfo: {
            type: ObjectConstructor;
        };
        isProductTracked: {
            type: BooleanConstructor;
        };
        folderName_: {
            type: StringConstructor;
        };
        saveLocationEndText_: {
            type: StringConstructor;
        };
        saveLocationStartText_: {
            type: StringConstructor;
        };
        showSaveLocationText_: {
            type: BooleanConstructor;
        };
        toggleAnnotationText_: {
            type: StringConstructor;
        };
    };
    accessor productInfo: ProductInfo;
    accessor isProductTracked: boolean;
    protected accessor folderName_: string;
    protected accessor saveLocationStartText_: string;
    protected accessor saveLocationEndText_: string;
    protected accessor showSaveLocationText_: boolean;
    protected accessor toggleAnnotationText_: string;
    priceInsightsInfo: PriceInsightsInfo;
    private listenerIds_;
    private priceTrackingProxy_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private updatePriceTrackingSection_;
    private updateSaveLocationText;
    protected onToggleCheckedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onToggleChange_(): void;
    private onBookmarkPriceTracked;
    private onBookmarkPriceUntracked;
    protected onToggleAnnotationButtonClick_(): void;
    private onBookmarkOperationFailed;
    private onProductBookmarkMoved;
}
declare global {
    interface HTMLElementTagNameMap {
        'price-tracking-section': PriceTrackingSectionElement;
    }
}
