import type { AdapterInfo, AdapterObserverInterface, AdapterRemote, DiscoverySessionRemote } from './adapter.mojom-webui.js';
import type { BluetoothInternalsHandlerRemote } from './bluetooth_internals.mojom-webui.js';
import type { DeviceInfo, DeviceRemote } from './device.mojom-webui.js';
/**
 * Javascript for AdapterBroker, served from
 *     chrome://bluetooth-internals/.
 */
/**
 * Enum of adapter property names. Used for adapterchanged events.
 */
export declare enum AdapterProperty {
    DISCOVERABLE = "discoverable",
    DISCOVERING = "discovering",
    POWERED = "powered",
    PRESENT = "present"
}
/**
 * The proxy class of an adapter and router of adapter events.
 * Exposes an EventTarget interface that allows other object to subscribe to
 * to specific AdapterObserver events.
 * Provides remote access to Adapter functions. Converts parameters to Mojo
 * handles and back when necessary.
 */
export declare class AdapterBroker extends EventTarget implements AdapterObserverInterface {
    private adapterObserverReceiver_;
    private adapter_;
    constructor(adapter: AdapterRemote);
    presentChanged(present: boolean): void;
    poweredChanged(powered: boolean): void;
    discoverableChanged(discoverable: boolean): void;
    discoveringChanged(discovering: boolean): void;
    deviceAdded(device: DeviceInfo): void;
    deviceChanged(device: DeviceInfo): void;
    deviceRemoved(device: DeviceInfo): void;
    /**
     * Creates a GATT connection to the device with |address|.
     */
    connectToDevice(address: string): Promise<DeviceRemote>;
    /**
     * Gets an array of currently detectable devices from the Adapter service.
     */
    getDevices(): Promise<{
        devices: DeviceInfo[];
    }>;
    /**
     * Gets the current state of the Adapter.
     */
    getInfo(): Promise<{
        info: AdapterInfo;
    }>;
    /**
     * Requests the adapter to start a new discovery session.
     */
    startDiscoverySession(): Promise<DiscoverySessionRemote>;
}
/**
 * Initializes an AdapterBroker if one doesn't exist.
 * @return resolves with AdapterBroker, rejects if Bluetooth is not supported.
 */
export declare function getAdapterBroker(bluetoothInternalsHandler?: BluetoothInternalsHandlerRemote): Promise<AdapterBroker>;
