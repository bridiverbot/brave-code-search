/**
 * @fileoverview
 * 'settings-reset-profile-banner' is the banner shown for prompting the user to
 * clear profile settings.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SettingsResetProfileBannerElement {
    $: {
        dialog: CrDialogElement;
    };
}
declare const SettingsResetProfileBannerElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class SettingsResetProfileBannerElement extends SettingsResetProfileBannerElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        tamperedPrefs: {
            type: ArrayConstructor;
        };
        showTamperedPrefsList: {
            type: BooleanConstructor;
        };
    };
    accessor tamperedPrefs: string[];
    accessor showTamperedPrefsList: boolean;
    private browserProxy_;
    connectedCallback(): void;
    protected onCancel_(): void;
    protected onConfirmClick_(): void;
    protected onLearnMoreClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-reset-profile-banner': SettingsResetProfileBannerElement;
    }
}
export {};
