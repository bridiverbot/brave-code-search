/**
 * Javascript for DevicesPage and DevicesView, served from
 *     chrome://bluetooth-internals/.
 */
import './device_table.js';
import type { DeviceInfo } from './device.mojom-webui.js';
import type { DeviceCollection } from './device_collection.js';
import type { DeviceTableElement } from './device_table.js';
import { Page } from './page.js';
/**
 * Enum of scan status for the devices page.
 */
export declare enum ScanStatus {
    OFF = 0,
    STARTING = 1,
    ON = 2,
    STOPPING = 3
}
/**
 * Page that contains a header and a DevicesView.
 */
export declare class DevicesPage extends Page {
    deviceTable: DeviceTableElement;
    private scanBtn_;
    constructor();
    /**
     * Sets the device collection for the page's device table.
     */
    setDevices(devices: DeviceCollection): void;
    /**
     * Updates the inspect status of the given |deviceInfo| in the device table.
     */
    setInspecting(deviceInfo: DeviceInfo, isInspecting: boolean): void;
    /**
     * If Bluetooth is currently powered off do not show start discovery button.
     */
    updatedScanButtonVisibility(powered: boolean): void;
    setScanStatus(status: ScanStatus): void;
}
declare global {
    interface HTMLElementEventMap {
        'inspectpressed': CustomEvent<{
            address: string;
        }>;
        'scanpressed': CustomEvent;
    }
}
