/**
 * @fileoverview 'settings-autofill-entries-list-element' contains configuration
 * options for Autofill AI.
 */
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '../icons.html.js';
import '../privacy_icons.html.js';
import '../simple_confirmation_dialog.js';
import './autofill_ai_add_or_edit_dialog.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrLazyRenderLitElement } from 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { EntityTypeName } from '../autofill_ai_enums.mojom-webui.js';
type EntityInstance = chrome.autofillPrivate.EntityInstance;
type EntityInstanceWithLabels = chrome.autofillPrivate.EntityInstanceWithLabels;
type EntityType = chrome.autofillPrivate.EntityType;
export interface SettingsAutofillAiEntriesListElement {
    $: {
        actionMenu: CrLazyRenderLitElement<CrActionMenuElement>;
        addMenu: CrLazyRenderLitElement<CrActionMenuElement>;
    };
}
declare const SettingsAutofillAiEntriesListElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsAutofillAiEntriesListElement extends SettingsAutofillAiEntriesListElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         Controls whether the user can use Autofill AI. For example this can be
         false if the extensions API disables the feature.
         Specifically in this file, it controls whether users can add new
         entities.
        */
        canEnableOrDisableAutofillAi_: {
            type: BooleanConstructor;
        };
        allowedEntityTypes: {
            type: ObjectConstructor;
        };
        listTitle: {
            type: StringConstructor;
        };
        pageName: {
            type: StringConstructor;
        };
        metricEntityTypes: {
            type: ObjectConstructor;
        };
        /**
           Optional boolean preference used to determine the list's editability.
           If true - user will be able to add new entries to the list.
  
           Notes:
            * Even if preference is true the user may still be prevented from
              adding entries due to other eligibility checks.
            * We assume that the provided preference is controlled by the address
              autofill policy and extension API. If allowNewEntitiesAdditionPref
              is provided its value will be overridden by the address autofill
              preference when it is enforced.
        */
        allowNewEntitiesAdditionPref: {
            type: ObjectConstructor;
        };
        allowNewEntitiesAddition_: {
            type: BooleanConstructor;
        };
        /**
           The corresponding `EntityInstance` model for any entity instance
           related action menus or dialogs.
         */
        activeEntityInstance_: {
            type: ObjectConstructor;
        };
        /**
           Complete list of entity types that exist. When the user wants to add a
           new entity instance, this list is displayed.
         */
        completeEntityTypesList_: {
            type: ArrayConstructor;
        };
        /**
           The same dialog can be used for both adding and editing entity
           instances.
         */
        showAddOrEditEntityInstanceDialog_: {
            type: BooleanConstructor;
        };
        addOrEditEntityInstanceDialogTitle_: {
            type: StringConstructor;
        };
        showRemoveEntityInstanceDialog_: {
            type: BooleanConstructor;
        };
        activeEntityInstanceDeleteTitle_: {
            type: StringConstructor;
        };
        entityInstances_: {
            type: ArrayConstructor;
        };
        /**
          If true, Autofill AI does not depend on whether Autofill for addresses
          is enabled.
        */
        autofillSettingsEnterprisePolicyEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor allowedEntityTypes: Set<EntityTypeName> | null;
    accessor listTitle: string;
    accessor pageName: string;
    accessor metricEntityTypes: Partial<Record<EntityTypeName, string>> | null;
    accessor allowNewEntitiesAdditionPref: chrome.settingsPrivate.PrefObject<boolean> | undefined;
    protected accessor allowNewEntitiesAddition_: boolean;
    protected accessor completeEntityTypesList_: EntityType[];
    protected accessor activeEntityInstance_: EntityInstance | null;
    protected accessor showAddOrEditEntityInstanceDialog_: boolean;
    protected accessor addOrEditEntityInstanceDialogTitle_: string;
    protected accessor showRemoveEntityInstanceDialog_: boolean;
    protected accessor activeEntityInstanceDeleteTitle_: string;
    protected accessor entityInstances_: EntityInstanceWithLabels[];
    private accessor autofillSettingsEnterprisePolicyEnabled_;
    private accessor canEnableOrDisableAutofillAi_;
    private activeEntityInstanceGuid_;
    private metricsBrowserProxy_;
    private entityInstancesChangedListener_;
    private entityDataManager_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private updateEntityTypesList_;
    private entityTypesComparator_;
    /**
     * This comparator compares the labels alphabetically, and, in case of
     * equality, the sublabels.
     * This comparator purposefully uses sensitivity 'base', not to differentiate
     * between different capitalization or diacritics.
     */
    private entityInstancesWithLabelsComparator_;
    private getMetricEntityTypeString_;
    /**
     * Handles tapping on the "Add" entity instance button.
     */
    protected onAddEntityInstanceClick_(e: Event): void;
    protected onAddEntityInstanceFromDropdownClick_(e: Event): void;
    /**
     * Open the action menu.
     */
    protected onMoreButtonClick_(e: Event): void;
    /**
     * Handles tapping on the "Edit" entity instance button in the action menu.
     */
    protected onMenuEditEntityInstanceClick_(e: Event): Promise<void>;
    /**
     * Handles tapping on the "Delete" entity instance button in the action menu.
     */
    protected onMenuRemoveEntityInstanceClick_(e: Event): void;
    protected onAutofillAiAddOrEditDone_(e: CustomEvent<EntityInstance>): void;
    protected onAddOrEditEntityInstanceDialogClose_(e: Event): void;
    protected onRemoveEntityInstanceDialogClose_(): void;
    protected onRemoteWalletPassesLinkClick_(e: Event): void;
    private updateAllowNewEntitiesAddition_;
    private onSyncStatusChanged_;
    private get isNewEntitiesAdditionAllowedByPref_();
    protected typeNameToIconName_(name: EntityTypeName): string | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-autofill-ai-entries-list': SettingsAutofillAiEntriesListElement;
    }
}
export {};
