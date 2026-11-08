import './descriptor_list.js';
import './expandable_list_item.js';
import './object_fieldset.js';
import './value_control.js';
import { CustomElement } from 'chrome://resources/js/custom_element.js';
import type { CharacteristicInfo } from './device.mojom-webui.js';
/**
 * A list item that displays the properties of a CharacteristicInfo object.
 * Two fieldsets are created within the element: one for the primitive
 * properties, 'id' and 'uuid', and one for the 'properties' bitfield in the
 * CharacteristicInfo object.
 */
export declare class CharacteristicListItemElement extends CustomElement {
    static get template(): string | TrustedHTML;
    info: CharacteristicInfo | null;
    private deviceAddress_;
    private serviceId_;
    connectedCallback(): void;
    initialize(characteristicInfo: CharacteristicInfo, deviceAddress: string, serviceId: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'characteristic-list-item': CharacteristicListItemElement;
    }
}
