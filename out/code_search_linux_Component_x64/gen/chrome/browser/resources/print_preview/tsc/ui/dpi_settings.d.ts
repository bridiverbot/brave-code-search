import './settings_section.js';
import '/strings.m.js';
import './settings_select.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { DpiCapability, DpiOption, SelectOption } from '../data/cdd.js';
type LabelledDpiOption = DpiOption & SelectOption;
export interface LabelledDpiCapability {
    option: LabelledDpiOption[];
}
declare const PrintPreviewDpiSettingsElementBase: typeof CrLitElement & (new (...args: any[]) => import("./settings_mixin.js").SettingsMixinInterface);
export declare class PrintPreviewDpiSettingsElement extends PrintPreviewDpiSettingsElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        capability: {
            type: ObjectConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
        capabilityWithLabels_: {
            type: ObjectConstructor;
        };
    };
    accessor capability: DpiCapability | null;
    accessor disabled: boolean;
    protected accessor capabilityWithLabels_: DpiCapability | null;
    private lastSelectedValue_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * Adds default labels for each option.
     */
    private computeCapabilityWithLabels_;
    private onDpiSettingChange_;
}
export type DpiSettingsElement = PrintPreviewDpiSettingsElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-dpi-settings': PrintPreviewDpiSettingsElement;
    }
}
export {};
