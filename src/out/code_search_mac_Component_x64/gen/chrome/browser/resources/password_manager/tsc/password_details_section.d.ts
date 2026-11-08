import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import './shared_style.css.js';
import './site_favicon.js';
import './credential_details/password_details_card.js';
import './credential_details/passkey_details_card.js';
import './user_utils_mixin.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { Route } from './router.js';
export interface PasswordDetailsSectionElement {
    $: {
        backButton: CrIconButtonElement;
        title: HTMLElement;
    };
}
declare const PasswordDetailsSectionElementBase: typeof PolymerElement & (new (...args: any[]) => import("./router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("./user_utils_mixin.js").UserUtilMixinInterface);
export declare class PasswordDetailsSectionElement extends PasswordDetailsSectionElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        selectedGroup_: {
            type: ObjectConstructor;
        };
    };
    private selectedGroup_;
    private savedPasswordsListener_;
    private passwordManagerAuthTimeoutListener_;
    private visibilityChangedListener_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    currentRouteChanged(route: Route, _: Route): void;
    private navigateBack_;
    private assignMatchingGroup;
    private startListeningForUpdates_;
    private updateShownCredentials;
    private requestShownCredentials_;
    private refreshGroupInfo_;
    private shouldRegisterSharingPromo_;
}
declare global {
    interface HTMLElementTagNameMap {
        'password-details-section': PasswordDetailsSectionElement;
    }
}
export {};
