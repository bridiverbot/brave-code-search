import { PriceInsightsHandlerRemote } from './price_insights.mojom-webui.js';
export interface PriceInsightsBrowserProxy {
    showSidePanelUi(): void;
    showFeedback(): void;
}
export declare class PriceInsightsBrowserProxyImpl implements PriceInsightsBrowserProxy {
    handler: PriceInsightsHandlerRemote;
    constructor();
    showSidePanelUi(): void;
    showFeedback(): void;
    static getInstance(): PriceInsightsBrowserProxy;
    static setInstance(proxy: PriceInsightsBrowserProxy): void;
}
