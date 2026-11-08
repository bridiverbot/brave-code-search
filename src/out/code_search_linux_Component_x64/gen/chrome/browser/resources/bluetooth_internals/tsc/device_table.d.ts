import { CustomElement } from 'chrome://resources/js/custom_element.js';
import type { DeviceInfo } from './device.mojom-webui.js';
import type { DeviceCollection } from './device_collection.js';
/**
 * A table that lists the devices and responds to changes in the given
 * DeviceCollection. Fires events for inspection requests from listed
 * devices.
 */
export declare class DeviceTableElement extends CustomElement {
    static get template(): string | TrustedHTML;
    private devices_;
    private body_;
    private headers_;
    private inspectionMap_;
    /**
     * Decorates an element as a UI element class. Caches references to the
     *    table body and headers.
     */
    connectedCallback(): void;
    /**
     * Sets the tables device collection.
     */
    setDevices(deviceCollection: DeviceCollection): void;
    /**
     * Updates the inspect status of the row matching the given |deviceInfo|.
     * If |isInspecting| is true, the forget link is enabled otherwise it's
     * disabled.
     */
    setInspecting(deviceInfo: DeviceInfo, isInspecting: boolean): void;
    /**
     * Fires a forget pressed event for the row |index|.
     */
    private handleForgetClick_;
    /**
     * Updates table row on change event of the device collection.
     */
    private handleDeviceUpdate_;
    /**
     * Fires an inspect pressed event for the row |index|.
     */
    private handleInspectClick_;
    /**
     * Updates table row on splice event of the device collection.
     */
    private handleDeviceAdded_;
    /**
     * Inserts a new row at |index| and updates it with info from |device|.
     */
    private insertRow_;
    /**
     * Deletes and recreates the table using the cached |devices_|.
     */
    private redraw_;
    /**
     * Updates the row at |index| with the info from |device|.
     */
    private updateRow_;
}
declare global {
    interface HTMLElementTagNameMap {
        'device-table': DeviceTableElement;
    }
}
