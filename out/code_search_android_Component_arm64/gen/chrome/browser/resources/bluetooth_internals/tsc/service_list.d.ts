import './service_list_item.js';
import './expandable_list.js';
import type { ServiceInfo } from './device.mojom-webui.js';
import { ExpandableListElement } from './expandable_list.js';
import type { ServiceListItemElement } from './service_list_item.js';
/**
 * A list that displays ServiceListItems.
 */
export declare class ServiceListElement extends ExpandableListElement<ServiceInfo> {
    private deviceAddress_;
    private servicesRequested_;
    connectedCallback(): void;
    /**
     * Sets the empty message text.
     */
    setEmptyMessage(message: string): void;
    createItem(data: ServiceInfo): ServiceListItemElement;
    /**
     * Loads the service list with an array of ServiceInfo from the
     * device with |deviceAddress|. If no active connection to the device
     * exists, one is created.
     */
    load(deviceAddress: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'service-list': ServiceListElement;
    }
}
