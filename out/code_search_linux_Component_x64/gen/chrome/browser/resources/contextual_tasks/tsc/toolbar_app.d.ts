import './top_toolbar.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { CSSResultGroup } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class ContextualTasksToolbarAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        threadTitle_: {
            type: StringConstructor;
        };
        isAiPage_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isAimEligible_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isUserSignedIn_: {
            type: BooleanConstructor;
        };
        onboardingTooltipShowing_: {
            type: BooleanConstructor;
        };
    };
    protected accessor threadTitle_: string;
    protected accessor isAiPage_: boolean;
    protected accessor isAimEligible_: boolean;
    protected accessor isUserSignedIn_: boolean;
    protected accessor onboardingTooltipShowing_: boolean;
    private toolbarBrowserProxy_;
    private toolbarListenerIds_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected onNewThreadClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'contextual-tasks-toolbar-app': ContextualTasksToolbarAppElement;
    }
}
