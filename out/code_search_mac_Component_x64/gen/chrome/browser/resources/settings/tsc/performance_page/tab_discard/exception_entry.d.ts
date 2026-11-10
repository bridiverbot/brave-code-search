import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface ExceptionEntry {
    site: string;
    managed: boolean;
}
declare const ExceptionEntryElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export declare class ExceptionEntryElement extends ExceptionEntryElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        entry: {
            type: ObjectConstructor;
        };
        exceptionsManagedPref_: {
            type: ObjectConstructor;
        };
    };
    accessor entry: ExceptionEntry;
    protected accessor exceptionsManagedPref_: chrome.settingsPrivate.PrefObject | undefined;
    connectedCallback(): void;
    protected onMenuClick_(e: Event): void;
    protected onShowTooltipMouseenter_(): void;
    protected onShowTooltipFocus_(): void;
    private showTooltip_;
}
declare global {
    interface HTMLElementTagNameMap {
        'tab-discard-exception-entry': ExceptionEntryElement;
    }
}
export {};
