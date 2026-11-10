/**
 * @fileoverview
 * 'add-site-dialog' provides a dialog to add exceptions for a given Content
 * Settings category.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrCheckboxElement } from 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { ContentSetting, CookiesExceptionType } from './constants.js';
export interface AddSiteDialogElement {
    $: {
        add: CrButtonElement;
        dialog: CrDialogElement;
        incognito: CrCheckboxElement;
        site: CrInputElement;
    };
}
declare const AddSiteDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("./site_settings_mixin_lit.js").SiteSettingsMixinLitInterface);
export declare class AddSiteDialogElement extends AddSiteDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * Whether this is about an Allow, Block, SessionOnly, or other.
         */
        contentSetting: {
            type: StringConstructor;
        };
        hasIncognito: {
            type: BooleanConstructor;
        };
        /**
         * Controls what kind of patterns the created cookies exception will have
         * (based on the CookiesExceptionType):
         * - THIRD_PARTY: Exception that will have primary pattern as wildcard
         * (third-party cookie exceptions).
         * - SITE_DATA: Exception that will have secondary pattern as wildcard
         * (regular exceptions).
         * - COMBINED: Support both pattern types and have a checkbox to control
         * the mode.
         */
        cookiesExceptionType: {
            type: StringConstructor;
        };
        /**
         * The site to add an exception for.
         */
        site_: {
            type: StringConstructor;
        };
        /**
         * The error message to display when the pattern is invalid.
         */
        errorMessage_: {
            type: StringConstructor;
        };
    };
    accessor contentSetting: ContentSetting;
    accessor hasIncognito: boolean;
    accessor cookiesExceptionType: CookiesExceptionType | undefined;
    protected accessor site_: string;
    protected accessor errorMessage_: string;
    connectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * Validates that the pattern entered is valid.
     */
    protected onInput_(): void;
    protected onCancelClick_(): void;
    /**
     * The tap handler for the Add [Site] button (adds the pattern and closes
     * the dialog).
     */
    protected onSubmitClick_(): void;
    protected showIncognitoSessionOnly_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'add-site-dialog': AddSiteDialogElement;
    }
}
export {};
