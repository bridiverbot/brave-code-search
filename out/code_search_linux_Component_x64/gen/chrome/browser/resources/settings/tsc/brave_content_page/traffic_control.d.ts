import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/brave/leo.bundle.js';
import '../controls/settings_toggle_button.js';
import '../site_favicon.js';
import './traffic_control_rule_dialog.js';
import { CrLitElement, PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { TrafficRule } from '../traffic_control.mojom-webui.js';
import type { Container } from '../containers.mojom-webui.js';
declare const SettingsBraveContentTrafficControlElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("./drag_reorder_mixin.js").DragReorderMixinInterface);
/**
 * 'settings-brave-content-traffic-control' manages profile-scoped traffic rules.
 */
export declare class SettingsBraveContentTrafficControlElement extends SettingsBraveContentTrafficControlElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        enabledPref_: {
            type: ObjectConstructor;
        };
        rulesList_: {
            type: ArrayConstructor;
        };
        containersList_: {
            type: ArrayConstructor;
        };
        editingRule_: {
            type: ObjectConstructor;
        };
        deletingRule_: {
            type: ObjectConstructor;
        };
        deleteDialogError_: {
            type: StringConstructor;
        };
    };
    private browserProxy;
    accessor enabledPref_: chrome.settingsPrivate.PrefObject<boolean> | undefined;
    accessor rulesList_: TrafficRule[];
    accessor containersList_: Container[];
    accessor editingRule_: TrafficRule | undefined;
    accessor deletingRule_: TrafficRule | undefined;
    accessor deleteDialogError_: string | undefined;
    connectedCallback(): void;
    private loadRules_;
    private loadContainers_;
    private onRulesUpdated_;
    getReorderableIds_(): string[];
    onItemsReordered_(orderedIds: string[]): void;
    private onContainersUpdated_;
    updated(changedProperties: PropertyValues<this>): void;
    firstUrlFilterOf_(rule: TrafficRule): string;
    urlFilterListLabel_(rule: TrafficRule): string;
    hasSpecificContainer_(target: TrafficRule['target']): boolean;
    containerIcon_(containerId: string | null): number;
    containerBackgroundColor_(containerId: string | null): string;
    targetLabel_(target: TrafficRule['target']): string;
    private containerFor_;
    onAddRuleClick_(): void;
    onEditRuleClick_(e: Event): void;
    onDeleteRuleClick_(e: Event): void;
    onRuleDialogClose_(): void;
    onDeleteDialogClose_(): void;
    onDeleteDialogCancelClick_(): void;
    onDeleteDialogConfirmClick_(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-brave-content-traffic-control': SettingsBraveContentTrafficControlElement;
    }
}
export {};
