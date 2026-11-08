import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { String16 as mojoBase_mojom_String16 } from '//resources/mojo/mojo/public/mojom/base/string16.mojom-webui.js';
export declare const UsbDeviceFilterSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbEnumerationOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface UsbDeviceFilterMojoType {
    vendorId: (number | null);
    productId: (number | null);
    classCode: (number | null);
    subclassCode: (number | null);
    protocolCode: (number | null);
    serialNumber: (mojoBase_mojom_String16 | null);
}
export type UsbDeviceFilter = UsbDeviceFilterMojoType;
export declare interface UsbEnumerationOptionsMojoType {
    filters: UsbDeviceFilter[];
}
export type UsbEnumerationOptions = UsbEnumerationOptionsMojoType;
