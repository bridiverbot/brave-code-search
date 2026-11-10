import './characteristic_list_item.js';
import './expandable_list.js';
import type { CharacteristicListItemElement } from './characteristic_list_item.js';
import type { CharacteristicInfo } from './device.mojom-webui.js';
import { ExpandableListElement } from './expandable_list.js';
export declare class CharacteristicListElement extends ExpandableListElement<CharacteristicInfo> {
    private deviceAddress_;
    private serviceId_;
    private characteristicsRequested_;
    connectedCallback(): void;
    createItem(data: CharacteristicInfo): CharacteristicListItemElement;
    /**
     * Loads the characteristic list with an array of CharacteristicInfo from
     * the device with |deviceAddress| and service with |serviceId|. If no
     * active connection to the device exists, one is created.
     */
    load(deviceAddress: string, serviceId: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'characteristic-list': CharacteristicListElement;
    }
}
