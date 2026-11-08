import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class DefaultBrowserModalAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        useSettingsIllustration: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        hasAccepted_: {
            type: BooleanConstructor;
        };
    };
    private boundOnFocus_;
    private hasAcceptedListenerId_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    accessor useSettingsIllustration: boolean;
    protected accessor hasAccepted_: boolean;
    private isStickyModal_;
    private isModal_;
    protected showRetryAndClose_(): boolean;
    protected onCancelClick_(): void;
    protected onConfirmClick_(): void;
    protected onTryAgainClick_(): void;
    protected onCloseClick_(): void;
    private onWindowFocus_;
}
declare global {
    interface HTMLElementTagNameMap {
        'default-browser-modal-app': DefaultBrowserModalAppElement;
    }
}
