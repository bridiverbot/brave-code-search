import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import './shared_style.css.js';
import './checkup_list_item.js';
import './prefs/pref_toggle_button.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { Route } from './router.js';
export interface PasswordChangeDetailsElement {
    $: {
        back: HTMLElement;
    };
}
declare const PasswordChangeDetailsElementBase: typeof PolymerElement & (new (...args: any[]) => import("./router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
export declare class PasswordChangeDetailsElement extends PasswordChangeDetailsElementBase {
    static get is(): string;
    static get properties(): {
        isPasswordChangeWithPrivateInferenceLoginCheckEnabled_: {
            type: BooleanConstructor;
            value(): boolean;
        };
    };
    static get template(): HTMLTemplateElement;
    protected isPasswordChangeWithPrivateInferenceLoginCheckEnabled_: boolean;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
    private navigateBack_;
    protected getAccountBoxIcon_(): string;
    protected getChatInfoIcon_(): string;
    protected getLockIcon_(): string;
    protected getPsychiatryIcon_(): string;
    protected getColumnDescriptionHeader_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'password-change-details': PasswordChangeDetailsElement;
    }
}
export {};
