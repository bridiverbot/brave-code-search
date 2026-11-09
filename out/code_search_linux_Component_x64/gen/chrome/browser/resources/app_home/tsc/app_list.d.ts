import './app_item.js';
import './app_home_empty_page.js';
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { AppInfo } from './app_home.mojom-webui.js';
import type { AppItemElement } from './app_item.js';
export interface ActionMenuModel {
    appItem: AppItemElement;
}
type MenuHandleEvent = CustomEvent<ActionMenuModel>;
export declare class AppListElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        apps_: {
            type: ArrayConstructor;
        };
        selectedAppItem_: {
            type: ObjectConstructor;
        };
    };
    protected accessor apps_: AppInfo[];
    private boundContextMenuListener_;
    private boundKeydownListener_;
    private listenerIds_;
    private mojoEventTarget_;
    private accessor selectedAppItem_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    private handleKeyDown;
    private launchFocusedApp;
    private launchContextMenuForFocusedApp;
    private handleNavigateWithArrows;
    private addApp_;
    private removeApp_;
    private updateApp_;
    private closeCurrentAppMenu;
    private clearActiveMenu_;
    private switchActiveMenu_;
    protected notLocallyInstalledString_(installed: boolean, i18nString: string): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-list': AppListElement;
    }
    interface HTMLElementEventMap {
        'on-menu-open-triggered': MenuHandleEvent;
        'on-menu-closed': MenuHandleEvent;
    }
}
export {};
