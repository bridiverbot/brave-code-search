/**
 * Javascript for DevicesPage, served from
 *     chrome://usb-internals/.
 */
import 'chrome://resources/cr_elements/cr_tree/cr_tree.js';
import 'chrome://resources/cr_elements/cr_tree/cr_tree_item.js';
import type { UsbDeviceManagerRemote } from './usb_manager.mojom-webui.js';
/**
 * Page that contains a tab header and a tab panel displaying devices table.
 */
export declare class DevicesPage {
    private usbManager_;
    private root_;
    constructor(usbManager: UsbDeviceManagerRemote, root: DocumentFragment);
    /**
     * Sets the device collection for the page's device table.
     */
    private renderDeviceList_;
    /**
     * Switches to the device's tab, creating one if necessary.
     */
    private switchToTab_;
}
