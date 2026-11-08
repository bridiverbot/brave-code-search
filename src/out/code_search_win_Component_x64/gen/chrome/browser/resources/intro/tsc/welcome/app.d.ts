import 'chrome://resources/cr_components/localized_link/localized_link.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/strings.m.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface WelcomeAppElement {
    $: {
        acceptButton: CrButtonElement;
    };
}
declare const WelcomeAppElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class WelcomeAppElement extends WelcomeAppElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        anyButtonClicked_: {
            type: BooleanConstructor;
        };
        isMetricsEnabled_: {
            type: BooleanConstructor;
        };
        setDefaultBrowser_: {
            type: BooleanConstructor;
        };
    };
    protected accessor setDefaultBrowser_: boolean | null;
    private accessor anyButtonClicked_;
    private accessor isMetricsEnabled_;
    protected showDefaultBrowserToggle_: boolean;
    protected showMetricsOptIn_: boolean;
    private browserProxy_;
    constructor();
    private getDialog_;
    protected getDialogActionButtonLabel_(): string;
    protected getMetricsLabel_(): TrustedHTML;
    protected shouldDisableButtons_(): boolean;
    protected onDefaultBrowserCheckedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onAcceptButtonClick_(): void;
    protected onManageLinkClicked_(e: CustomEvent<{
        event: Event;
    }>): void;
    protected onDialogCloseButtonClick_(): void;
    protected onDialogActionButtonClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'welcome-app': WelcomeAppElement;
    }
}
export {};
