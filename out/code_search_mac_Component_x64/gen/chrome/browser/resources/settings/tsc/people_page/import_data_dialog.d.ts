/**
 * @fileoverview 'settings-import-data-dialog' is a component for importing
 * bookmarks and other data from other sources.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '../controls/settings_checkbox.js';
import '../controls/settings_toggle_button.js';
import '../i18n_setup.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { BrowserProfile } from './import_data_browser_proxy.js';
import { ImportDataStatus } from './import_data_browser_proxy.js';
export interface SettingsImportDataDialogElement {
    $: {
        browserSelect: HTMLSelectElement;
        cancel: CrButtonElement;
        dialog: CrDialogElement;
        done: CrButtonElement;
        import: CrButtonElement;
        successIcon: HTMLElement;
    };
}
declare const SettingsImportDataDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class SettingsImportDataDialogElement extends SettingsImportDataDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        browserProfiles_: {
            type: ArrayConstructor;
        };
        importDialogBookmarksPref_: {
            type: ObjectConstructor;
        };
        selected_: {
            type: ObjectConstructor;
        };
        noImportDataTypeSelected_: {
            type: BooleanConstructor;
        };
        importStatus_: {
            type: StringConstructor;
        };
    };
    protected accessor browserProfiles_: BrowserProfile[];
    protected accessor importDialogBookmarksPref_: chrome.settingsPrivate.PrefObject<boolean> | undefined;
    protected accessor selected_: BrowserProfile;
    protected accessor noImportDataTypeSelected_: boolean;
    protected accessor importStatus_: ImportDataStatus;
    private browserProxy_;
    connectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected getProfileDisplayName_(name: string, profileName: string): string;
    protected updateImportDataTypesSelected_(): void;
    /**
     * @return Whether |status| is the current status.
     */
    protected hasImportStatus_(status: ImportDataStatus): boolean;
    private isImportFromFileSelected_;
    protected getActionButtonText_(): string;
    protected onBrowserProfileSelectionChange_(): void;
    protected onActionButtonClick_(): void;
    protected onCloseClick_(): void;
    /**
     * @return Whether the import button should be disabled.
     */
    protected shouldDisableImport_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-import-data-dialog': SettingsImportDataDialogElement;
    }
}
export {};
