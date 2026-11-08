/**
 * Javascript for DescriptorList and DescriptorListItem, served from
 *     chrome://bluetooth-internals/.
 */
import './descriptor_list_item.js';
import './expandable_list.js';
import type { DescriptorListItemElement } from './descriptor_list_item.js';
import type { DescriptorInfo } from './device.mojom-webui.js';
import { ExpandableListElement } from './expandable_list.js';
/**
 * A list that displays DescriptorListItems.
 */
export declare class DescriptorListElement extends ExpandableListElement<DescriptorInfo> {
    private deviceAddress_;
    private serviceId_;
    private characteristicId_;
    private descriptorsRequested_;
    connectedCallback(): void;
    createItem(data: DescriptorInfo): DescriptorListItemElement;
    /**
     * Loads the descriptor list with an array of DescriptorInfo from
     * the device with |deviceAddress|, service with |serviceId|, and
     * characteristic with |characteristicId|. If no active connection to the
     * device exists, one is created.
     */
    load(deviceAddress: string, serviceId: string, characteristicId: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'descriptor-list': DescriptorListElement;
    }
}
