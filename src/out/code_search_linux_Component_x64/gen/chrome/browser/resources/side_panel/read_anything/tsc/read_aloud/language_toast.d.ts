import '//resources/cr_elements/cr_toast/cr_toast.js';
import type { CrToastElement } from '//resources/cr_elements/cr_toast/cr_toast.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { NotificationType } from './voice_language_conversions.js';
import type { VoiceNotificationListener } from './voice_notification_manager.js';
export interface LanguageToastElement {
    $: {
        toast: CrToastElement;
    };
}
declare const LanguageToastElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class LanguageToastElement extends LanguageToastElementBase implements VoiceNotificationListener {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        toastTitle_: {
            type: StringConstructor;
        };
        toastMessage_: {
            type: StringConstructor;
        };
        showErrors: {
            type: BooleanConstructor;
        };
        numAvailableVoices: {
            type: NumberConstructor;
        };
        toastDuration_: {
            type: NumberConstructor;
        };
    };
    protected notifications_: Map<string, NotificationType>;
    protected accessor toastDuration_: number;
    protected accessor toastTitle_: string;
    protected accessor toastMessage_: string;
    accessor showErrors: boolean;
    accessor numAvailableVoices: number;
    notify(type: NotificationType, language?: string): void;
    private setErrorTitle_;
    private show_;
}
declare global {
    interface HTMLElementTagNameMap {
        'language-toast': LanguageToastElement;
    }
}
export {};
