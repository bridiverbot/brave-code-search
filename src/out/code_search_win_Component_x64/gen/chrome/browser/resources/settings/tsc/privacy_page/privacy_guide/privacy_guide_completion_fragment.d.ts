/**
 * @fileoverview
 * 'privacy-guide-completion-fragment' is the fragment in a privacy guide
 * card that contains the completion screen and its description.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../../icons.html.js';
import '../../privacy_icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface PrivacyGuideCompletionFragmentElement {
    $: {
        backButton: HTMLElement;
    };
}
declare const PrivacyGuideCompletionFragmentElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class PrivacyGuideCompletionFragmentElement extends PrivacyGuideCompletionFragmentElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        shouldShowAiSettings_: {
            type: BooleanConstructor;
        };
        shouldShowWaa_: {
            type: BooleanConstructor;
        };
    };
    protected accessor shouldShowAiSettings_: boolean;
    protected accessor shouldShowWaa_: boolean;
    private metricsBrowserProxy_;
    connectedCallback(): void;
    focus(): void;
    private onViewEnterStart_;
    protected getSubheader_(): string;
    /** Updates the completion card waa link depending on the signin state. */
    private updateWaaLink_;
    protected onBackButtonClick_(e: Event): void;
    protected onLeaveButtonClick_(): void;
    protected onAiRowClick_(): void;
    protected onWaaClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'privacy-guide-completion-fragment': PrivacyGuideCompletionFragmentElement;
    }
}
export {};
