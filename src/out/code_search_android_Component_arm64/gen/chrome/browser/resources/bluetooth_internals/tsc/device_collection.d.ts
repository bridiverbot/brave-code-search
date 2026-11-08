import type { DeviceInfo } from './device.mojom-webui.js';
/**
 * Enum of connection status for a device.
 */
export declare enum ConnectionStatus {
    DISCONNECTED = 0,
    CONNECTING = 1,
    CONNECTED = 2
}
/**
 * Collection of devices. Extends EventTarget to notify observers when the
 * collection changes.
 */
export declare class DeviceCollection extends EventTarget {
    private array_;
    /**
     * Keep track of MAC addresses which were previously found via scan, but are
     * no longer being advertised or nearby. Used to inform isRemoved().
     */
    private removedDevices_;
    /**
     * @param array The starting collection of devices.
     */
    constructor(array: DeviceInfo[]);
    get length(): number;
    item(index: number): DeviceInfo | undefined;
    /**
     * Finds the Device in the collection with the matching address.
     * @return The index where the device was found.
     */
    getByAddress(address: string): number;
    /**
     * Adds or updates a Device with new DeviceInfo.
     */
    addOrUpdate(deviceInfo: DeviceInfo): void;
    /**
     * Marks the Device as removed.
     */
    remove(deviceInfo: DeviceInfo): void;
    /**
     * Return true if device was "removed" -- previously found via scan but
     * either no longer advertising or no longer nearby.
     */
    isRemoved(deviceInfo: DeviceInfo): boolean;
    resetForTest(): void;
}
