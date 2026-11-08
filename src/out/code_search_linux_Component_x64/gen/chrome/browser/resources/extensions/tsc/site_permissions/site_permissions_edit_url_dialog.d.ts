import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import '/strings.m.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SiteSettingsDelegate } from './site_settings_mixin.js';
export declare const sitePermissionsPatternRegExp: RegExp;
export declare function getSitePermissionsPatternFromSite(site: string): string;
export interface SitePermissionsEditUrlDialogElement {
    $: {
        dialog: CrDialogElement;
        submit: CrButtonElement;
    };
}
export declare class SitePermissionsEditUrlDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        delegate: {
            type: ObjectConstructor;
        };
        siteSet: {
            type: StringConstructor;
        };
        /**
         * The site that this entry is currently managing. Only non-empty if this
         * is for editing an existing entry.
         */
        siteToEdit: {
            type: StringConstructor;
        };
        site_: {
            type: StringConstructor;
        };
        /** Whether the currently-entered input is valid. */
        inputValid_: {
            type: BooleanConstructor;
        };
    };
    accessor delegate: SiteSettingsDelegate;
    accessor siteSet: chrome.developerPrivate.SiteSet;
    accessor siteToEdit: string | null;
    protected accessor site_: string;
    protected accessor inputValid_: boolean;
    connectedCallback(): void;
    /**
     * Validates that the pattern entered is valid by testing it against the
     * regex. An empty patterh is considered "valid" as the invalid message will
     * not be shown, but the input cannot be submitted as the action button will
     * be disabled.
     */
    private validate_;
    protected computeDialogTitle_(): string;
    protected computeSubmitButtonDisabled_(): boolean;
    protected computeSubmitButtonLabel_(): string;
    protected onCancelClick_(): void;
    protected onSubmitClick_(): void;
    protected onSiteValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onInput_(): void;
    private handleEdit_;
    private handleAdd_;
    private addUserSpecifiedSite_;
}
declare global {
    interface HTMLElementTagNameMap {
        'site-permissions-edit-url-dialog': SitePermissionsEditUrlDialogElement;
    }
}
