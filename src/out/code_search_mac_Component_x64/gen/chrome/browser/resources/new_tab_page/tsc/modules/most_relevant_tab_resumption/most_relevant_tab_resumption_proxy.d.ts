import type { PageHandlerRemote } from '../../most_relevant_tab_resumption.mojom-webui.js';
/**
 * @fileoverview This file provides a singleton class that exposes the Mojo
 * handler interface used for bidirectional communication between the page and
 * the browser.
 */
export interface MostRelevantTabResumptionProxy {
    handler: PageHandlerRemote;
}
export declare class MostRelevantTabResumptionProxyImpl implements MostRelevantTabResumptionProxy {
    handler: PageHandlerRemote;
    constructor(handler: PageHandlerRemote);
    static getInstance(): MostRelevantTabResumptionProxy;
    static setInstance(obj: MostRelevantTabResumptionProxy): void;
}
