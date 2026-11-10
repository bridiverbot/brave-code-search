import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/mojo/skia/public/mojom/skcolor.mojom-webui.js';
import '//resources/brave/leo.bundle.js';
import '../controls/settings_toggle_button.js';
import { CrLitElement, PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { Container } from '../containers.mojom-webui.js';
import type { ColorSelectedEvent } from './containers_background_chip.js';
import type { IconSelectedEvent } from './containers_icon.js';
declare const SettingsBraveContentContainersElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("./drag_reorder_mixin.js").DragReorderMixinInterface);
/**
 * 'settings-brave-content-containers' is the settings page containing settings for Containers
 */
export declare class SettingsBraveContentContainersElement extends SettingsBraveContentContainersElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        containersEnabledPref_: {
            type: ObjectConstructor;
        };
        containersList_: {
            type: ArrayConstructor;
        };
        editingContainer_: {
            type: ObjectConstructor;
        };
        deletingContainer_: {
            type: ObjectConstructor;
        };
        isEditDialogNameInvalid_: {
            type: BooleanConstructor;
        };
        editDialogError_: {
            type: StringConstructor;
        };
        deleteDialogError_: {
            type: StringConstructor;
        };
    };
    private browserProxy;
    accessor containersEnabledPref_: chrome.settingsPrivate.PrefObject<boolean> | undefined;
    accessor containersList_: Container[];
    accessor editingContainer_: Container | undefined;
    accessor deletingContainer_: Container | undefined;
    accessor isEditDialogNameInvalid_: boolean;
    accessor editDialogError_: string | undefined;
    accessor deleteDialogError_: string | undefined;
    connectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    onContainersListUpdated_(containers: Container[]): void;
    getReorderableIds_(): string[];
    onItemsReordered_(orderedIds: string[]): void;
    onAddContainerClick_(): void;
    onEditContainerClick_(e: Event): void;
    onDeleteContainerClick_(e: Event): void;
    onDialogClose_(): void;
    onCancelDialogClick_(): void;
    onContainerNameInput_(e: InputEvent): void;
    onContainersIconSelected_(event: IconSelectedEvent): void;
    onContainersBackgroundSelected_(event: ColorSelectedEvent): void;
    onSaveContainerFromDialogClick_(): Promise<void>;
    onDeleteContainerFromDialogClick_(): Promise<void>;
    getEditDialogTitle_(): string;
    private formatError_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-brave-content-containers': SettingsBraveContentContainersElement;
    }
}
export {};
