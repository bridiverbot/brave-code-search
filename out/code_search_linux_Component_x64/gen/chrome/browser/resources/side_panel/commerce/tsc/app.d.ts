import '/strings.m.js';
import './catalog_attributes_row.js';
import './history_graph.js';
import './insights_comment_row.js';
import './price_tracking_section.js';
import type { ProductInfo } from '//resources/cr_components/commerce/shared.mojom-webui.js';
import type { PriceInsightsInfo } from '//resources/cr_components/commerce/shopping_service.mojom-webui.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface ShoppingInsightsAppElement {
    $: {
        insightsContainer: HTMLElement;
    };
}
export declare class ShoppingInsightsAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        productInfo: {
            type: ObjectConstructor;
        };
        priceInsightsInfo: {
            type: ObjectConstructor;
        };
        isProductTrackable_: {
            type: BooleanConstructor;
        };
        isProductTracked_: {
            type: BooleanConstructor;
        };
    };
    accessor productInfo: ProductInfo | undefined;
    accessor priceInsightsInfo: PriceInsightsInfo | undefined;
    protected accessor isProductTrackable_: boolean;
    protected accessor isProductTracked_: boolean;
    private shoppingApi_;
    constructor();
    connectedCallback(): void;
    firstUpdated(): void;
    private fetchData_;
    protected getRangeDescription_(): string;
    protected getHistoryTitle_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'shopping-insights-app': ShoppingInsightsAppElement;
    }
}
