/**
 * @fileoverview
 * 'settings-ai-logging-info-bullet' is a bullet point that informs about
 * logging practices. It shows different info depending on the managed state of
 * an AI feature. |prefKey| must be set to the preference name that is bound to
 * the enterprise policy of this AI feature.
 */
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const SettingsAiLoggingInfoBulletElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_key_observer_mixin_lit.js").PrefKeyObserverMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export declare class SettingsAiLoggingInfoBulletElement extends SettingsAiLoggingInfoBulletElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        loggingManagedDisabledCustomLabel: {
            type: StringConstructor;
        };
    };
    accessor loggingManagedDisabledCustomLabel: string | null;
    protected isLoggingDisabledByPolicy_(): boolean;
    protected getLabel_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-ai-logging-info-bullet': SettingsAiLoggingInfoBulletElement;
    }
}
export {};
