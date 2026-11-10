import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import './icons.html.js';
import './settings_section.js';
import type { CrCheckboxElement } from 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface PrintPreviewDuplexSettingsElement {
    $: {
        duplex: CrCheckboxElement;
    };
}
declare const PrintPreviewDuplexSettingsElementBase: typeof CrLitElement & (new (...args: any[]) => import("./select_mixin.js").SelectMixinInterface) & (new (...args: any[]) => import("./settings_mixin.js").SettingsMixinInterface);
export declare class PrintPreviewDuplexSettingsElement extends PrintPreviewDuplexSettingsElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        dark: {
            type: BooleanConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
        duplexManaged_: {
            type: BooleanConstructor;
        };
        duplexShortEdgeManaged_: {
            type: BooleanConstructor;
        };
        collapseOpened_: {
            type: BooleanConstructor;
        };
        backgroundImages_: {
            type: StringConstructor;
        };
    };
    accessor dark: boolean;
    accessor disabled: boolean;
    protected accessor duplexManaged_: boolean;
    protected accessor duplexShortEdgeManaged_: boolean;
    protected accessor collapseOpened_: boolean;
    protected accessor backgroundImages_: string;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private onDuplexSettingChange_;
    private onDuplexTypeChange_;
    protected onCheckboxChange_(): void;
    onProcessSelectChange(value: string): void;
    protected updateCollapseOpened_(): void;
    /**
     * @param managed Whether the setting is managed by policy.
     * @return Whether the controls should be disabled.
     */
    protected getDisabled_(managed: boolean): boolean;
    protected updateBackgroundImages_(): void;
}
export type DuplexSettingsElement = PrintPreviewDuplexSettingsElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-duplex-settings': PrintPreviewDuplexSettingsElement;
    }
}
export {};
