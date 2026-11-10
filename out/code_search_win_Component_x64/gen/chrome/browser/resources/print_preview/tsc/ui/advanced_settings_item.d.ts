import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { VendorCapability, VendorCapabilitySelectOption } from '../data/cdd.js';
import { VendorCapabilityType } from '../data/cdd.js';
declare const PrintPreviewAdvancedSettingsItemElementBase: typeof CrLitElement & (new (...args: any[]) => import("./settings_mixin.js").SettingsMixinInterface);
type AdvancedItemWithSelectCapability = PrintPreviewAdvancedSettingsItemElement & {
    capability: Extract<VendorCapability, {
        type: VendorCapabilityType.SELECT;
    }>;
};
export declare class PrintPreviewAdvancedSettingsItemElement extends PrintPreviewAdvancedSettingsItemElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        capability: {
            type: ObjectConstructor;
        };
        currentValue_: {
            type: StringConstructor;
        };
    };
    accessor capability: VendorCapability;
    private accessor currentValue_;
    connectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private updateFromSettings_;
    /**
     * @return The display name for the setting.
     */
    protected getDisplayName_(item: VendorCapability | VendorCapabilitySelectOption): string;
    /**
     * @return Whether the capability represented by this item is of type select.
     */
    protected isCapabilityTypeSelect_(): this is AdvancedItemWithSelectCapability;
    /**
     * @return Whether the capability represented by this item is of type
     *     checkbox.
     */
    protected isCapabilityTypeCheckbox_(): boolean;
    /**
     * @return Whether the capability represented by this item is of type input.
     */
    protected isCapabilityTypeInput_(): boolean;
    /**
     * @return Whether the checkbox setting is checked.
     */
    protected isChecked_(): boolean;
    /**
     * @param option The option for a select capability.
     * @return Whether the option is selected.
     */
    protected isOptionSelected_(option: VendorCapabilitySelectOption): boolean;
    /**
     * @return The placeholder value for the capability's text input.
     */
    protected getCapabilityPlaceholder_(): string;
    private hasOptionWithValue_;
    /**
     * @param query The current search query.
     * @return Whether the item has a match for the query.
     */
    hasMatch(query: RegExp | null): boolean;
    protected onSelectChange_(e: Event): void;
    protected onUserInput_(e: Event): void;
    protected onCheckboxChange_(e: Event): void;
    /**
     * @return The current value of the setting, or the empty string if it is not
     *     set.
     */
    getCurrentValue(): string;
    /**
     * Only used in tests.
     * @param value A value to set the setting to.
     */
    setCurrentValueForTest(value: string): void;
    /**
     * @return The highlight wrappers and that were created.
     */
    updateHighlighting(query: RegExp | null, bubbles: Map<HTMLElement, number>): HTMLElement[];
}
export type AdvancedSettingsItemElement = PrintPreviewAdvancedSettingsItemElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-advanced-settings-item': PrintPreviewAdvancedSettingsItemElement;
    }
}
export {};
