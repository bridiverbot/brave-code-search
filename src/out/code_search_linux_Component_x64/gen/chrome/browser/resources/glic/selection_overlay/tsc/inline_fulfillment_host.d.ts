import type { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import type { GenericPendingAssociatedReceiver } from '//resources/mojo/mojo/public/mojom/base/generic_pending_associated_receiver.mojom-webui.js';
export interface InlineFulfillmentRemote {
    $: {
        associateAndPassReceiver(): mojo.internal.interfaceSupport.PendingReceiver<unknown>;
        close(): void;
    };
}
export interface InlineFulfillmentModule {
    create(): {
        element: HTMLElement;
        interfaceName: string;
        remote: InlineFulfillmentRemote;
    };
}
export type InlineFulfillmentLoader = () => Promise<InlineFulfillmentModule>;
export declare class InlineFulfillmentHostElement extends HTMLElement {
    static get is(): string;
    loaders: Map<string, InlineFulfillmentLoader>;
    private generation_;
    private remote_;
    show(resourceName: string, send: (channel: GenericPendingAssociatedReceiver) => void): Promise<void>;
    clear(): void;
    private removeCard_;
}
declare global {
    interface HTMLElementTagNameMap {
        'glic-inline-fulfillment-host': InlineFulfillmentHostElement;
    }
}
