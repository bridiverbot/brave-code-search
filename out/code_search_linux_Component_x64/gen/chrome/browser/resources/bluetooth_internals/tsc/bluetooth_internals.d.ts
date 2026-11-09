import type { AdapterBroker } from './adapter_broker.js';
import type { BluetoothInternalsHandlerRemote } from './bluetooth_internals.mojom-webui.js';
import { DeviceCollection } from './device_collection.js';
import { PageManager } from './page_manager.js';
import { Sidebar } from './sidebar.js';
export declare let adapterBroker: AdapterBroker | null;
export declare const devices: DeviceCollection;
export declare let sidebarObj: Sidebar | null;
export declare const pageManager: PageManager;
export declare function initializeViews(bluetoothInternalsHandler: BluetoothInternalsHandlerRemote): Promise<void>;
/**
 * Check if the system has all the needed system permissions for using
 * bluetooth.
 * @param bluetoothInternalsHandler Mojo remote handler.
 * @param successCallback The callback to be called when the system has the
 *     permissions for using bluetooth.
 */
export declare function checkSystemPermissions(bluetoothInternalsHandler: BluetoothInternalsHandlerRemote, successCallback: (handler: BluetoothInternalsHandlerRemote) => void): Promise<void>;
