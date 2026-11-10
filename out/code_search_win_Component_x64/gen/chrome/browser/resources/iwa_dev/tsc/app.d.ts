import '/strings.m.js';
import './installed_app_list_item.js';
import './install_dialog.js';
import './update_options_dialog.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
import type { IwaDevModeAppInfo, UpdateInfo, UpdateManifest, UpdateManifestOptions } from './iwa_dev.mojom-webui.js';
import type { UpdateOptionsSavedEventDetail } from './update_options_dialog.js';
export declare const MIN_UPDATE_DELAY_MS = 750;
export declare const DEFAULT_UPDATE_OPTIONS: UpdateManifestOptions;
export declare function getUpdateOptionsStorageKey(appId: string): string;
export declare function getStoredUpdateOptions(appId: string): UpdateManifestOptions;
export declare function removeStoredUpdateOptions(appId: string): void;
export declare function saveStoredUpdateOptions(appId: string, options: UpdateManifestOptions): void;
export declare class IwaDevAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        iwaEnabled_: {
            type: BooleanConstructor;
        };
        devModeEnabled_: {
            type: BooleanConstructor;
        };
        devToolsRestrictedByAdmin_: {
            type: BooleanConstructor;
        };
        installedApps_: {
            type: ArrayConstructor;
        };
        hasFetchedApps_: {
            type: BooleanConstructor;
            state: boolean;
        };
        updatingAppIds_: {
            type: ArrayConstructor;
            state: boolean;
        };
        toastMessage_: {
            type: StringConstructor;
        };
        selectedAppForUpdateOptions_: {
            type: ObjectConstructor;
            state: boolean;
        };
    };
    protected accessor iwaEnabled_: boolean;
    protected accessor devModeEnabled_: boolean;
    protected accessor devToolsRestrictedByAdmin_: boolean;
    protected accessor installedApps_: IwaDevModeAppInfo[];
    protected accessor hasFetchedApps_: boolean;
    protected accessor toastMessage_: string;
    protected accessor updatingAppIds_: string[];
    protected accessor selectedAppForUpdateOptions_: IwaDevModeAppInfo | null;
    private browserProxy_;
    private listenerIds_;
    protected onRequestUpdate_(e: CustomEvent<{
        app: IwaDevModeAppInfo;
    }>): Promise<void>;
    protected onRequestLaunch_(e: CustomEvent<{
        appId: string;
    }>): Promise<void>;
    protected onRequestUninstall_(e: CustomEvent<{
        appId: string;
    }>): Promise<void>;
    protected onRequestUpdateOptions_(e: CustomEvent<{
        app: IwaDevModeAppInfo;
    }>): void;
    protected onUpdateOptionsDialogClose_(): void;
    protected getPinnedVersion_(appId: string): string | null;
    protected getAllowDowngrades_(appId: string): boolean;
    protected onUpdateOptionsSaved_(e: CustomEvent<UpdateOptionsSavedEventDetail>): Promise<void>;
    protected onOpenInstallDialogClick_(): void;
    protected onRequestInstallFromDevProxy_(e: CustomEvent<{
        url: Url;
    }>): Promise<void>;
    protected onRequestInstallFromLocalBundle_(): Promise<void>;
    protected onRequestParseUpdateManifestFromUrl_(e: CustomEvent<{
        url: Url;
        callback: (result: {
            success?: UpdateManifest;
            error?: string;
        }) => void;
    }>): void;
    protected onRequestInstallFromUpdateManifest_(e: CustomEvent<{
        webBundleUrl: Url;
        updateInfo: UpdateInfo;
    }>): Promise<void>;
    private processInstallRequest_;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    private sortApps_;
    private onAppInstalled_;
    private onAppUpdated_;
    private onAppUninstalled_;
}
declare global {
    interface HTMLElementTagNameMap {
        'iwa-dev-app': IwaDevAppElement;
    }
}
