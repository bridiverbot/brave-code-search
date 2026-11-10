import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare enum ErrorType {
    GLIC_NOT_ENABLED = "glic-not-enabled",
    SKILLS_DISABLED = "skills-disabled",
    NO_SEARCH_RESULTS = "no-search-results",
    REMOTE_AUTHORITY_UNREACHABLE = "remote-authority-unreachable"
}
export declare class ErrorPageElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        errorType: {
            type: StringConstructor;
        };
        dialog: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor errorType: ErrorType;
    accessor dialog: boolean;
    private proxy_?;
    private getProxy_;
    connectedCallback(): void;
    protected isGlicDisabled_(): boolean;
    protected isSkillsDisabled_(): boolean;
    protected isRemoteAuthorityUnreachable_(): boolean;
    protected errorTitle(): string;
    protected errorDescription(): string;
    protected closeDialog_(): void;
    protected onGoToSettingsClick_(): void;
    protected onCancelClick_(): void;
    protected onSignInClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'error-page': ErrorPageElement;
    }
}
