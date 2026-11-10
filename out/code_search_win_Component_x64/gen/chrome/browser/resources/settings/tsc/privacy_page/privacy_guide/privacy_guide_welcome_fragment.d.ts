/**
 * @fileoverview
 * 'privacy-guide-welcome-fragment' is the fragment in a privacy guide
 * card that contains the welcome screen and its description.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface PrivacyGuideWelcomeFragmentElement {
    $: {
        startButton: HTMLElement;
    };
}
export declare class PrivacyGuideWelcomeFragmentElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    focus(): void;
    protected onStartButtonClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'privacy-guide-welcome-fragment': PrivacyGuideWelcomeFragmentElement;
    }
}
