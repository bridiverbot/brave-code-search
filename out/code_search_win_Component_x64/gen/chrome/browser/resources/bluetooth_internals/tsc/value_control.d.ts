import { CustomElement } from 'chrome://resources/js/custom_element.js';
export declare enum ValueDataType {
    HEXADECIMAL = "Hexadecimal",
    UTF8 = "UTF-8",
    DECIMAL = "Decimal"
}
/**
 * A container for an array value that needs to be converted to multiple
 * display formats. Internally, the value is stored as an array and converted
 * to the needed display type at runtime.
 */
export declare class Value {
    private value_;
    constructor(initialValue: number[]);
    /**
     * Gets the backing array value.
     */
    getArray(): number[];
    /**
     * Sets the backing array value.
     */
    setArray(newValue: number[]): void;
    /**
     * Sets the value by converting the |newValue| string using the formatting
     * specified by |valueDataType|.
     */
    setAs(valueDataType: ValueDataType, newValue: string): void;
    /**
     * Gets the value as a string representing the given |valueDataType|.
     */
    getAs(valueDataType: ValueDataType): string;
    /**
     * Converts the value to a hex string.
     */
    private toHex_;
    /**
     * Sets the value from a hex string.
     */
    private setValueFromHex_;
    /**
     * Converts the value to a UTF-8 encoded text string.
     */
    private toUtf8_;
    /**
     * Sets the value from a UTF-8 encoded text string.
     */
    private setValueFromUtf8_;
    /**
     * Converts the value to a decimal string with numbers delimited by '-'.
     */
    private toDecimal_;
    /**
     * Sets the value from a decimal string delimited by '-'.
     */
    private setValueFromDecimal_;
}
/**
 * A set of inputs that allow a user to request reads and writes of values.
 * This control allows the value to be displayed in multiple forms
 * as defined by the |ValueDataType| array. Values must be written
 * in these formats. Read and write capability is controlled by a
 * 'properties' bitfield provided by the characteristic.
 */
export declare class ValueControlElement extends CustomElement {
    static get is(): string;
    static get template(): string | TrustedHTML;
    static get observedAttributes(): string[];
    private value_;
    private deviceAddress_;
    private serviceId_;
    private characteristicId_;
    private descriptorId_;
    private properties_;
    private valueInput_;
    private typeSelect_;
    private writeBtn_;
    private readBtn_;
    private unavailableMessage_;
    constructor();
    connectedCallback(): void;
    /**
     * Sets the settings used by the value control and redraws the control to
     * match the read/write settings in |options.properties|. If properties
     * are not provided, no restrictions on reading/writing are applied.
     */
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    get value(): Value;
    /**
     * Redraws the value control with updated layout depending on the
     * availability of reads and writes and the current cached value.
     */
    redraw(): void;
    /**
     * Sets the value of the control.
     */
    setValue(value: number[]): void;
    /**
     * Gets an error string describing the given |result| code.
     */
    private getErrorString_;
    /**
     * Called when the read button is pressed. Connects to the device and
     * retrieves the current value of the characteristic in the |service_id|
     * with id |characteristic_id|. If |descriptor_id| is defined,  the
     * descriptor value with |descriptor_id| is read instead.
     */
    private readValue_;
    /**
     * Called when the write button is pressed. Connects to the device and
     * retrieves the current value of the characteristic in the
     * |service_id| with id |characteristic_id|. If |descriptor_id| is defined,
     * the descriptor value with |descriptor_id| is written instead.
     */
    private writeValue_;
}
declare global {
    interface HTMLElementTagNameMap {
        'value-control': ValueControlElement;
    }
}
