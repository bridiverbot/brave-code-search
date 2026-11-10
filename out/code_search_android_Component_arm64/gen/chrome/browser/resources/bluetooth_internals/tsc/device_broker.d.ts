import type { DeviceRemote } from './device.mojom-webui.js';
export declare const connectedDevices: Map<string, DeviceRemote | Promise<DeviceRemote>>;
/**
 * Creates a GATT connection to the device with |address|. If a connection to
 * the device already exists, the promise is resolved with the existing
 * DeviceRemote. If a connection is in progress, the promise resolves when
 * the existing connection request promise is fulfilled.
 */
export declare function connectToDevice(address: string): Promise<DeviceRemote>;
