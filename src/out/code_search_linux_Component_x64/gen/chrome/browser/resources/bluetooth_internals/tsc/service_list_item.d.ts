import './characteristic_list.js';
import './expandable_list_item.js';
import './object_fieldset.js';
import { CustomElement } from 'chrome://resources/js/custom_element.js';
import type { ServiceInfo } from './device.mojom-webui.js';
/**
 * A list item that displays the data in a ServiceInfo object. The brief
 * section contains the UUID of the given |serviceInfo|. The expanded section
 * contains an ObjectFieldsetElement that displays all of the properties in the
 * given |serviceInfo|. Data is not loaded until the ServiceListItem is
 * expanded for the first time.
 */
export declare class ServiceListItemElement extends CustomElement {
    static get template(): string | TrustedHTML;
    info: ServiceInfo | null;
    private deviceAddress_;
    connectedCallback(): void;
    initialize(serviceInfo: ServiceInfo, deviceAddress: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'service-list-item': ServiceListItemElement;
    }
}
