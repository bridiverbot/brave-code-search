import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { NotificationCard } from './notification_cards_browser_proxy.js';
export declare enum NotificationCardId {
    CHECKUP = "password_checkup_promo",
    WEB_PASSWORD_MANAGER = "passwords_on_web_promo",
    SHORTCUT = "password_shortcut_promo",
    ACCESS_ON_ANY_DEVICE = "access_on_any_device_promo",
    RELAUNCH_CHROME = "relaunch_chrome_promo",
    MOVE_PASSWORDS = "move_passwords_promo",
    PASSKEY_UNLOCK = "passkey_unlock_promo",
    ACCOUNT_AWARE_PASSWORD_SIGNIN = "account_aware_password_signin_promo"
}
export interface NotificationCardElement {
    $: {
        actionButton: CrButtonElement;
        closeButton: CrIconButtonElement;
        description: HTMLElement;
        title: HTMLElement;
    };
}
declare const NotificationCardElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
export declare class NotificationCardElement extends NotificationCardElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        card: ObjectConstructor;
    };
    card: NotificationCard;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private getDescription_;
    private getBannerImageName_;
    private onActionButtonClick_;
    private onCloseClick_;
    private close_;
}
declare global {
    interface HTMLElementTagNameMap {
        'notification-card': NotificationCardElement;
    }
}
export {};
