import type { UUID } from './uuid.mojom-webui.js';
/**
 * Format in a user readable way service UUIDs.
 */
export declare function formatServiceUuids(serviceUuids: UUID[] | null): string;
/**
 * Format in a user readable way device manufacturer data map. Keys are
 * Bluetooth company identifiers (unsigned short), values are bytes.
 */
export declare function formatManufacturerDataMap(manufacturerDataMap: Record<string, number[]>): string;
