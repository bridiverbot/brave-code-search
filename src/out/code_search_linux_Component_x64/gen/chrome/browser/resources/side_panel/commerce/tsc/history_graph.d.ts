import '/strings.m.js';
import 'chrome://resources/d3/d3.min.js';
import type { PricePoint } from '//resources/cr_components/commerce/shopping_service.mojom-webui.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface ShoppingInsightsHistoryGraphElement {
    $: {
        historyGraph: HTMLElement;
    };
}
export declare class ShoppingInsightsHistoryGraphElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        data: {
            type: ArrayConstructor;
        };
        locale: {
            type: StringConstructor;
        };
        currency: {
            type: StringConstructor;
        };
    };
    accessor data: PricePoint[];
    accessor locale: string;
    accessor currency: string;
    private points;
    private isGraphInteracted_;
    private currentPricePointIndex_?;
    private resizeObserver_;
    private currentWidth_;
    private graphSvg_;
    private dateTopMarginPx_;
    private priceRightMarginPx_;
    private bubbleHorizontalPaddingPx_;
    private bubbleTopPaddingPx_;
    private bubbleBottomPaddingPx_;
    private bubbleCornerRadiusPx_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private stringToDate_;
    private onResize_;
    private getTooltipText_;
    private drawHistoryGraph_;
    private getAxisTicksY_;
    private getAxisTicksX_;
    private getLabelSize_;
    private getTooltipHeight_;
    private showTooltip_;
}
declare global {
    interface HTMLElementTagNameMap {
        'shopping-insights-history-graph': ShoppingInsightsHistoryGraphElement;
    }
}
