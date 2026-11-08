import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button.js';
import './button_label.js';
import '/strings.m.js';
import type { CrRadioGroupElement } from 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import type { CrToggleElement } from 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { TileType } from './tile_type.mojom-webui.js';
export interface ShortcutsElement {
    $: {
        showToggleContainer: HTMLElement;
        showToggle: CrToggleElement;
        radioSelection: CrRadioGroupElement;
    };
}
interface ShortcutConfig {
    type: TileType;
    title: string;
    description: string;
    buttonName: string;
    containerName: string;
    disabled: boolean;
}
export declare class ShortcutsElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        shortcutsType_: {
            type: NumberConstructor;
        };
        initialized_: {
            type: BooleanConstructor;
        };
        radioSelection_: {
            type: StringConstructor;
        };
        show_: {
            type: BooleanConstructor;
        };
        showPersonalShortcuts_: {
            type: BooleanConstructor;
        };
        showEnterpriseShortcuts_: {
            type: BooleanConstructor;
        };
        shortcutConfigs_: {
            type: ArrayConstructor;
        };
        disabledShortcuts_: {
            type: ArrayConstructor;
        };
    };
    private accessor shortcutsType_;
    protected accessor initialized_: boolean;
    protected accessor radioSelection_: string | undefined;
    protected accessor show_: boolean;
    protected accessor showPersonalShortcuts_: boolean;
    protected accessor showEnterpriseShortcuts_: boolean;
    protected accessor shortcutConfigs_: ShortcutConfig[];
    protected accessor disabledShortcuts_: TileType[];
    private setMostVisitedSettingsListenerId_;
    private apiProxy_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private computeShortcutConfigs_;
    private setMostVisitedSettings_;
    private setShow_;
    protected onShowToggleChange_(e: CustomEvent<boolean>): void;
    protected onShowToggleClick_(): void;
    private setShowPersonalShortcuts_;
    protected onShowPersonalShortcutsChange_(e: CustomEvent<boolean>): void;
    protected onShowPersonalShortcutsClick_(): void;
    private setShowEnterpriseShortcuts_;
    protected onShowEnterpriseShortcutsChange_(e: CustomEvent<boolean>): void;
    protected onShowEnterpriseShortcutsClick_(): void;
    protected onRadioSelectionSelectedChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onOptionClick_(e: Event): void;
    protected getRadioSelectionDisabled_(): boolean;
    protected getRadioSelectionShortcutConfigs_(): ShortcutConfig[];
    protected getEnterpriseShortcutConfigs_(): ShortcutConfig[];
    protected showEnterprisePersonalMixedSidepanel_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'customize-chrome-shortcuts': ShortcutsElement;
    }
}
export {};
