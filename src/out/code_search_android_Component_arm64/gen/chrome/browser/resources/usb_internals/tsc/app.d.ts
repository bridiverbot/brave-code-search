/**
 * Javascript for usb_internals.html, served from chrome://usb-internals/.
 */
import 'chrome://resources/cr_elements/cr_tab_box/cr_tab_box.js';
import 'chrome://resources/cr_elements/cr_tree/cr_tree.js';
export declare function setSetupFn(newSetupFn: () => Promise<void>): void;
export declare class UsbInternalsAppElement extends HTMLElement {
    private usbManagerTest_;
    static get template(): string | TrustedHTML;
    constructor();
    $<T extends Element>(query: string): T;
    connectedCallback(): Promise<void>;
    refreshTestDeviceList(): Promise<void>;
    addTestDevice(event: Event): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'usb-internals-app': UsbInternalsAppElement;
    }
}
