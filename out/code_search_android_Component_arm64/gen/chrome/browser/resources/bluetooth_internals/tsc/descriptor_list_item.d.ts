import './expandable_list_item.js';
import './object_fieldset.js';
import './value_control.js';
import { CustomElement } from 'chrome://resources/js/custom_element.js';
import type { DescriptorInfo } from './device.mojom-webui.js';
export declare class DescriptorListItemElement extends CustomElement {
    static get template(): string | TrustedHTML;
    private info;
    private deviceAddress_;
    private serviceId_;
    private characteristicId_;
    connectedCallback(): void;
    initialize(descriptorInfo: DescriptorInfo, deviceAddress: string, serviceId: string, characteristicId: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'descriptor-list-item': DescriptorListItemElement;
    }
}
