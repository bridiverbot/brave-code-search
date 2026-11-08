/**
 * @fileoverview
 * 'settings-rivacy-guide-dialog' is a settings dialog that helps users guide
 * various privacy settings.
 */
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './privacy_guide_page.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SettingsPrivacyGuideDialogElement {
    $: {
        backToSettingsButton: HTMLElement;
        dialog: HTMLDialogElement;
    };
}
export declare class SettingsPrivacyGuideDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    firstUpdated(): void;
    protected onDialogCancel_(e: Event): void;
    protected onDialogClose_(e: Event): void;
    protected onPrivacyGuidePageClose_(e: Event): void;
    protected onSettingsBackClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-privacy-guide-dialog': SettingsPrivacyGuideDialogElement;
    }
}
