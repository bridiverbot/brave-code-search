import { Destination, PrinterType } from './destination.js';
interface ObjectMap {
    [k: string]: string;
}
export interface LocalDestinationInfo {
    deviceName: string;
    printerName: string;
    printerDescription?: string;
    cupsEnterprisePrinter?: boolean;
    printerOptions?: ObjectMap;
}
export interface ExtensionDestinationInfo {
    extensionId: string;
    extensionName: string;
    id: string;
    name: string;
    description?: string;
    provisional?: boolean;
}
/**
 * @param type The type of printer to parse.
 * @param printer Information about the printer.
 *       Type expected depends on |type|:
 *       For LOCAL_PRINTER => LocalDestinationInfo
 *       For EXTENSION_PRINTER => ExtensionDestinationInfo
 * @return Destination, or null if an invalid value is provided for |type|.
 */
export declare function parseDestination(type: PrinterType, printer: (LocalDestinationInfo | ExtensionDestinationInfo)): Destination;
/**
 * Parses an extension destination from an extension supplied printer
 * description.
 */
export declare function parseExtensionDestination(destinationInfo: ExtensionDestinationInfo): Destination;
export {};
