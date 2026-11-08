import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import '../settings_page/settings_subpage.js';
import '../simple_confirmation_dialog.js';
import '../site_favicon.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Route } from '../router.js';
import type { LoginPermission } from './glic_browser_proxy.js';
declare const SettingsGlicLoginPermissionsPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface);
export declare class SettingsGlicLoginPermissionsPageElement extends SettingsGlicLoginPermissionsPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        actorLoginPermissions_: {
            type: ArrayConstructor;
        };
        isOnline_: {
            type: BooleanConstructor;
        };
        selectedPermissionToRemove_: {
            type: ObjectConstructor;
        };
        routePath: {
            type: StringConstructor;
        };
    };
    accessor routePath: string;
    protected accessor actorLoginPermissions_: LoginPermission[];
    protected accessor selectedPermissionToRemove_: LoginPermission | null;
    protected accessor isOnline_: boolean;
    private browserProxy_;
    private eventTracker_;
    currentRouteChanged(newRoute: Route, _oldRoute?: Route): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected onRemoveActorLoginPermissionClick_(e: Event): void;
    protected onRemoveDialogClose_(): Promise<void>;
    protected getRemoveDialogDescription_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-glic-login-permissions-page': SettingsGlicLoginPermissionsPageElement;
    }
}
export {};
