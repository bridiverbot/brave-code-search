import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const AppElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class AppElement extends AppElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        anyButtonClicked_: {
            type: BooleanConstructor;
        };
    };
    private accessor anyButtonClicked_;
    private browserProxy_;
    connectedCallback(): void;
    protected onConfirmDefaultBrowserClick_(): void;
    protected onSkipDefaultBrowserClick_(): void;
    private resetButtons_;
    protected getTitle(): string;
    protected getSubtitle(): string;
    /**
     * Disable buttons if a button was clicked.
     */
    protected areButtonsDisabled_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'default-browser-app': AppElement;
    }
}
export {};
