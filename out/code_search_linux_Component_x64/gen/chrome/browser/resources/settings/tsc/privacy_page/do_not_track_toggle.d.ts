import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import '../controls/settings_toggle_button.js';
import '../icons.html.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SettingsToggleButtonElement } from '../controls/settings_toggle_button.js';
export interface SettingsDoNotTrackToggleElement {
    $: {
        toggle: SettingsToggleButtonElement;
    };
}
declare const SettingsDoNotTrackToggleElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class SettingsDoNotTrackToggleElement extends SettingsDoNotTrackToggleElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        showDialog_: {
            type: BooleanConstructor;
        };
        showUniversalOptOutSettings_: {
            type: BooleanConstructor;
        };
        doNotTrackSublabel_: {
            type: StringConstructor;
        };
    };
    protected accessor showDialog_: boolean;
    protected accessor showUniversalOptOutSettings_: boolean;
    protected accessor doNotTrackSublabel_: string;
    willUpdate(changedProperties: PropertyValues<this>): void;
    /**
     * Handles the change event for the do-not-track toggle. Shows a
     * confirmation dialog when enabling the setting.
     */
    protected onSettingsBooleanControlChange_(event: Event): void;
    private closeDialog_;
    protected onDialogClose_(): void;
    /**
     * Handles the shared proxy confirmation dialog 'Confirm' button.
     */
    protected onConfirmClick_(): void;
    /**
     * Handles the shared proxy confirmation dialog 'Cancel' button.
     */
    protected onCancelClick_(): void;
    /**
     * Handles the shared proxy confirmation dialog cancel event.
     */
    protected onDialogCancel_(): void;
    private computeDoNotTrackToggleSubLabel_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-do-not-track-toggle': SettingsDoNotTrackToggleElement;
    }
}
export {};
