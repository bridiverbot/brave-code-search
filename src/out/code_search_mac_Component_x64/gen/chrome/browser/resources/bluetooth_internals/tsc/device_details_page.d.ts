/**
 * Javascript for DeviceDetailsPage which displays all of the details of a
 * device. The page is generated and managed dynamically in bluetooth_internals.
 * served from chrome://bluetooth-internals/.
 */
import './service_list.js';
import './object_fieldset.js';
import type { DeviceInfo, ServiceInfo } from './device.mojom-webui.js';
import { Page } from './page.js';
/**
 * Page that displays all of the details of a device. This page is generated
 * and managed dynamically in bluetooth_internals. The page contains two
 * sections: Status and Services. The Status section displays information from
 * the DeviceInfo object and the Services section contains a ServiceList
 * compononent that lists all of the active services on the device.
 */
export declare class DeviceDetailsPage extends Page {
    deviceInfo: DeviceInfo;
    services: ServiceInfo[] | null;
    private device_;
    private deviceFieldSet_;
    private serviceList_;
    private status_;
    private connectBtn_;
    constructor(id: string, deviceInfo: DeviceInfo);
    /** Creates a connection to the Bluetooth device. */
    connect(): void;
    /** Disconnects the page from the Bluetooth device. */
    disconnect(): void;
    /** Redraws the contents of the page with the current |deviceInfo|. */
    redraw(): void;
    /**
     * Sets the page's device info and forces a redraw.
     */
    setDeviceInfo(info: DeviceInfo): void;
    /**
     * Fires an 'infochanged' event with the current |deviceInfo|
     */
    private fireDeviceInfoChanged_;
    /**
     * Updates the current connection status. Caches the latest status, updates
     * the connection button message, and fires a 'connectionchanged' event when
     * finished.
     */
    private updateConnectionStatus_;
}
declare global {
    interface HTMLElementEventMap {
        'infochanged': CustomEvent<{
            info: DeviceInfo;
        }>;
        'forgetpressed': CustomEvent<{
            address: string;
        }>;
    }
}
