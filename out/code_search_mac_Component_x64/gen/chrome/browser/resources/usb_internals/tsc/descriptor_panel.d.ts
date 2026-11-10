/**
 * Javascript for DescriptorPanel UI, served from
 *     chrome://usb-internals/.
 */
import 'chrome://resources/cr_elements/cr_tree/cr_tree.js';
import 'chrome://resources/cr_elements/cr_tree/cr_tree_item.js';
import type { UsbDeviceInterface } from './usb_device.mojom-webui.js';
export declare class DescriptorPanel {
    private usbDeviceProxy_;
    private rootElement_;
    private stringDescriptorPanel_;
    private languageCodesListElement_;
    private indexInput_;
    stringDescriptorIndexes: Set<number>;
    indexesListElement: HTMLElement | null;
    constructor(usbDeviceProxy: UsbDeviceInterface, rootElement: HTMLElement);
    /**
     * Adds the reference of the string descriptor panel of the device for
     * string descriptor functionality.
     */
    setStringDescriptorPanel(stringDescriptorPanel: DescriptorPanel): void;
    /**
     * Clears the data first before populating it with the new content.
     */
    clearView(): void;
    private getButtonElementFromTemplate_;
    /**
     * Adds a button for getting string descriptor to the string descriptor
     * index item, and adds an autocomplete value to the index input area in
     * the string descriptor panel.
     * @param offset The offset of the string descriptor index field.
     */
    private renderIndexItem_;
    /**
     * Adds a button for getting URL descriptor.
     * @param offset The offset of the URL descriptor index.
     */
    private renderUrlDescriptorIndexItem_;
    /**
     * Adds a button for getting the Microsoft OS 2.0 vendor-specific descriptor
     * to the Microsoft OS 2.0 descriptor set information vendor-specific code
     * item.
     * @param offset The start offset of the Microsoft OS 2.0
     *     descriptor set information.
     */
    private renderMsOs20DescriptorVendorSpecific_;
    /**
     * Adds a button for sending a Microsoft OS 2.0 descriptor set alternate
     * enumeration command to the USB device.
     * @param offset The start offset of the Microsoft OS 2.0
     *     descriptor set information.
     */
    private renderMsOs20DescriptorSetAltEnum_;
    /**
     * Changes the display text in tree item for the Microsoft OS 2.0 registry
     * property descriptor.
     * @param offset The start offset of the registry Property
     *     descriptor.
     */
    private renderFeatureRegistryPropertyDataItem_;
    /**
     * Renders a view to display standard descriptor hex data in both tree view
     * and raw form view.
     */
    private renderStandardDescriptor_;
    /**
     * Gets device descriptor of current device, and display it.
     */
    getDeviceDescriptor(): Promise<void>;
    /**
     * Renders a view to display device descriptor hex data in both tree view
     * and raw form.
     * @param offset The start offset of the device descriptor.
     */
    private renderDeviceDescriptor_;
    /**
     * Gets configuration descriptor of current device, and display it.
     */
    getConfigurationDescriptor(): Promise<void>;
    /**
     * Renders a view to display configuration descriptor hex data in both tree
     * view and raw form.
     * @param offset The start offset of the configuration descriptor.
     */
    private renderConfigurationDescriptor_;
    /**
     * Renders a tree item to display interface descriptor at index
     * indexInterface.
     * @param offset The start offset of the interface descriptor.
     */
    private renderInterfaceDescriptor_;
    /**
     * Renders a tree item to display endpoint descriptor at index
     * indexEndpoint.
     * @param offset The start offset of the endpoint
     *     descriptor.
     */
    private renderEndpointDescriptor_;
    /**
     * Renders a tree item to display length and type of unknown descriptor at
     * index indexUnknown.
     * @param originalOffset The start offset of the this descriptor.
     */
    private renderUnknownDescriptor_;
    /**
     * Gets all the supported language codes of this device, and adds them as
     * autocompletions for the language code input area in the string descriptor
     * panel.
     */
    getAllLanguageCodes(): Promise<number[]>;
    /**
     * Gets the string descriptor for the current device with the given index
     * and language code, and display it.
     */
    private getStringDescriptorForLanguageCode_;
    /**
     * Renders string descriptor of current device with given index and language
     * code.
     * @param offset The start offset of the string descriptor.
     */
    private renderStringDescriptorForLanguageCode_;
    /**
     * Gets string descriptor in all supported languages of current device with
     * given index.
     */
    private getStringDescriptorForAllLanguages_;
    /**
     * Initializes the string descriptor panel for autocomplete functionality.
     */
    initialStringDescriptorPanel(tabId: string): void;
    /**
     * Gets the Binary device Object Store (BOS) descriptor of the current
     * device, which contains the WebUSB descriptor and Microsoft OS 2.0
     * descriptor, and display it.
     */
    getBosDescriptor(): Promise<void>;
    /**
     * Renders a view to display Binary device Object Store (BOS) descriptor hex
     * data in both tree view and raw form.
     * @param offset The start offset of the BOS descriptor.
     */
    private renderBosDescriptor_;
    /**
     * Renders a view to display device capability descriptor hex data in both
     * tree view and raw form.
     * @param offset The start offset of the BOS descriptor.
     */
    private renderDeviceCapabilityDescriptor_;
    /**
     * Renders a tree item to display WebUSB platform capability descriptor at
     * index indexWebUsb.
     * @param offset The start offset of the WebUSB platform
     *     capability descriptor.
     */
    private renderWebUsbPlatformDescriptor_;
    /**
     * Renders a tree item to display Microsoft OS 2.0 platform capability
     * descriptor at index indexMsOs20.
     * @param offset The start offset of the Microsoft OS 2.0 platform
     *     capability descriptor.
     */
    private renderMsOs20PlatformDescriptor_;
    /**
     * Renders a tree item to display Microsoft OS 2.0 descriptor set
     * information at index indexMsOs20DescriptorSetInfo.
     * @param offset The start offset of the Microsoft OS 2.0
     *     set information structure.
     */
    private renderMsOs20DescriptorSetInfo_;
    /**
     * Renders a tree item to display unknown device capability descriptor at
     * indexUnknownDevCapability
     * @param originalOffset The start offset of the unknown device
     *     capability descriptor.
     */
    private renderUnknownBosDescriptor_;
    /**
     * Gets the URL Descriptor, renders a URL descriptor item and adds it to
     * the URL descriptor index item.
     * @param offset The offset of the WebUSB descriptor.
     * @param item The URL descriptor index item.
     */
    private getUrlDescriptor_;
    /**
     * Gets the Microsoft OS 2.0 Descriptor vendor-specific descriptor.
     */
    private getMsOs20DescriptorSet_;
    /**
     * Sends the Microsoft OS 2.0 Descriptor set alternate enumeration command.
     */
    private sendMsOs20DescriptorSetAltEnumCommand_;
    /**
     * Renders a view to display Microsoft OS 2.0 Descriptor Set hex data in
     * both tree view and raw form.
     */
    private renderMsOs20DescriptorSet_;
    /**
     * Renders a tree item to display Microsoft OS 2.0 descriptor set header.
     * @param originalOffset The start offset of the Microsoft OS 2.0
     *     descriptor set header.
     */
    private renderMsOs20SetHeader_;
    /**
     * Renders a tree item to display Microsoft OS 2.0 configuration subset
     * header.
     * @param originalOffset The start offset of the Microsoft OS 2.0
     *     configuration subset header.
     */
    private renderMsOs20ConfigurationSubsetHeader_;
    /**
     * Renders a tree item to display Microsoft OS 2.0 function subset header.
     * @param originalOffset The start offset of the Microsoft OS 2.0
     *     function subset header.
     */
    private renderMsOs20FunctionSubsetHeader_;
    /**
     * Renders a tree item to display Microsoft OS 2.0 compatible ID Descriptor.
     * @param originalOffset The start offset of the Microsoft OS 2.0
     *     compatible ID descriptor.
     */
    private renderMsOs20FeatureCompatibleId_;
    /**
     * Renders a tree item to display Microsoft OS 2.0 registry property
     * descriptor.
     * @param originalOffset The start offset of the Microsoft OS 2.0
     *     registry property descriptor.
     */
    private renderMsOs20FeatureRegistryProperty_;
    /**
     * Renders a tree item to display Microsoft OS 2.0 minimum USB resume time
     * descriptor.
     * @param originalOffset The start offset of the Microsoft OS 2.0
     *     minimum USB resume time descriptor.
     */
    private renderMsOs20FeatureMinResumeTime_;
    /**
     * Renders a tree item to display Microsoft OS 2.0 model ID descriptor.
     * @param originalOffset The start offset of the Microsoft OS 2.0
     *     model ID descriptor.
     */
    private renderMsOs20FeatureModelId_;
    /**
     * Renders a tree item to display Microsoft OS 2.0 Common Class Generic
     * Parent (CCGP) device descriptor.
     * @param originalOffset The start offset of the Microsoft OS 2.0
     *     CCGP device descriptor.
     */
    private renderMsOs20FeatureCcgpDevice_;
    /**
     * Renders a tree item to display Microsoft OS 2.0 vendor revision
     * descriptor.
     * @param originalOffset The start offset of the Microsoft OS 2.0
     *     vendor revision descriptor.
     */
    private renderMsOs20FeatureVendorRevision_;
    /**
     * Renders a tree item to display an unknown Microsoft OS 2.0 descriptor.
     * @param originalOffset The start offset of the unknown Microsoft
     *     OS 2.0 descriptor.
     */
    private renderUnknownMsOs20DescriptorDescriptor_;
    /**
     * Gets response of the given request.
     */
    private sendTestingRequest_;
    /**
     * Renders a view to display response data in hex format.
     */
    private renderTestingData_;
    /**
     * Initializes the testing tool panel for input and query functionality.
     */
    initialTestingToolPanel(): void;
    /**
     * Checks if the user input is a valid number.
     */
    private checkParamValid_;
    private convertStringToTransferType_;
    private convertStringToTransferRecipient_;
}
/**
 * Returns a class code string with a description.
 */
export declare function renderClassCodeWithDescription(classCode: number): string;
