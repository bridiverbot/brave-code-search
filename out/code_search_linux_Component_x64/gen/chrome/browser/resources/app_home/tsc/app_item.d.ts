import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import type { CrActionMenuElement } from '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { AppInfo } from './app_home.mojom-webui.js';
export interface AppItemElement {
    $: {
        menu: CrActionMenuElement;
        iconContainer: HTMLElement;
    };
}
export declare class AppItemElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        appInfo: {
            type: ObjectConstructor;
        };
    };
    accessor appInfo: AppInfo;
    firstUpdated(): void;
    closeContextMenu(): void;
    private handleContextMenu_;
    private isValidPosition;
    private getPositionForEvent_;
    private handleClick_;
    protected onMenuMousedown_(e: MouseEvent): void;
    protected isWebStoreLinkHidden_(): boolean;
    protected isOpenInWindowHidden_(): boolean;
    protected isLaunchOnStartupDisabled_(): boolean;
    protected isLaunchOnStartupHidden_(): boolean;
    protected isCreateShortcutHidden_(): boolean;
    protected isInstallLocallyHidden_(): boolean;
    protected isUninstallHidden_(): boolean;
    protected isRemoveFromChromeHidden_(): boolean;
    protected isAppSettingsHidden_(): boolean;
    protected isLocallyInstalled_(): boolean;
    protected isLaunchOnStartUp_(): boolean;
    protected onMenuClick_(event: Event): void;
    protected onStorePageClick_(): void;
    protected onOpenInWindowItemChange_(e: CustomEvent<boolean>): void;
    protected onLaunchOnStartupItemClick_(): void;
    protected onCreateShortcutItemClick_(): void;
    protected onInstallLocallyItemClick_(): void;
    protected onUninstallItemClick_(): void;
    protected onAppSettingsItemClick_(): void;
    protected getIconUrl_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-item': AppItemElement;
    }
}
