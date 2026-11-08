import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { CapabilityWithReset, SelectOption } from '../data/cdd.js';
import type { Settings } from '../data/model.js';
declare const PrintPreviewSettingsSelectElementBase: typeof CrLitElement & (new (...args: any[]) => import("./select_mixin.js").SelectMixinInterface) & (new (...args: any[]) => import("./settings_mixin.js").SettingsMixinInterface);
export declare class PrintPreviewSettingsSelectElement extends PrintPreviewSettingsSelectElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        ariaLabel: {
            type: StringConstructor;
        };
        capability: {
            type: ObjectConstructor;
        };
        settingName: {
            type: StringConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
    };
    accessor ariaLabel: string;
    accessor capability: (CapabilityWithReset & {
        option: SelectOption[];
    }) | null;
    accessor settingName: keyof Settings;
    accessor disabled: boolean;
    /**
     * @param option Option to check.
     * @return Whether the option is selected.
     */
    protected isSelected_(option: SelectOption): boolean;
    selectValue(value: string): void;
    /**
     * @param option Option to get the value for.
     * @return Value for the option.
     */
    protected getValue_(option: SelectOption): string;
    /**
     * @param option Option to get the display name for.
     * @return Display name for the option.
     */
    protected getDisplayName_(option: SelectOption): string;
    onProcessSelectChange(value: string): void;
}
export type SettingsSelectElement = PrintPreviewSettingsSelectElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-settings-select': PrintPreviewSettingsSelectElement;
    }
}
export {};
