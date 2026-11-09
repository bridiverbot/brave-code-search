import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_textarea/cr_textarea.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import '../controls/settings_dropdown_menu.js';
import { CrLitElement, PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { DropdownMenuOptionList } from '../controls/settings_dropdown_menu.js';
import type { Container } from '../containers.mojom-webui.js';
import type { TrafficRule } from '../traffic_control.mojom-webui.js';
declare const SettingsBraveContentTrafficControlRuleDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
/**
 * Create / edit dialog for a single traffic control rule. Owns save/error
 * handling and notifies the parent via a `close` event when dismissed.
 */
export declare class SettingsBraveContentTrafficControlRuleDialogElement extends SettingsBraveContentTrafficControlRuleDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        rule: {
            type: ObjectConstructor;
        };
        containersList: {
            type: ArrayConstructor;
        };
        draftRule_: {
            type: ObjectConstructor;
        };
        error_: {
            type: StringConstructor;
        };
    };
    private browserProxy;
    /**
     * Initial rule from the parent (new empty rule or clone for edit). Copied
     * into `draftRule_` so parent re-renders do not wipe in-progress edits.
     */
    accessor rule: TrafficRule;
    accessor containersList: Container[];
    accessor draftRule_: TrafficRule;
    accessor error_: string | undefined;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private fireClose_;
    onDialogClose_(): void;
    onCancelClick_(): void;
    onKeydown_(e: KeyboardEvent): void;
    onUrlFilterValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    onRuleEnabledChange_(e: Event): void;
    onContainerSettingsControlChange_(e: Event): void;
    containerMenuOptions_(): DropdownMenuOptionList;
    containerDropdownValue_(): string;
    private applyContainerDropdownValue_;
    canSave_(): boolean;
    onSaveClick_(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-brave-content-traffic-control-rule-dialog': SettingsBraveContentTrafficControlRuleDialogElement;
    }
}
export {};
