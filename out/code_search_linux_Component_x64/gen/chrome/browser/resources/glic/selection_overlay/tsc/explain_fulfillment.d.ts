import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { ExplainFulfillmentRemote } from './explain_fulfillment.mojom-webui.js';
import type { ExplainFulfillmentInterface } from './explain_fulfillment.mojom-webui.js';
export declare class ExplainFulfillmentElement extends HTMLElement {
    static get is(): string;
    fulfillment: ExplainFulfillmentInterface | null;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'glic-explain-fulfillment': ExplainFulfillmentElement;
    }
}
export declare function create(): {
    element: ExplainFulfillmentElement;
    interfaceName: string;
    remote: ExplainFulfillmentRemote;
};
