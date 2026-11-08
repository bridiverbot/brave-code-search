import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '/strings.m.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare function getPatternFromSite(site: string): string;
export declare function getMatchingUserSpecifiedSites(userSites: string[], host: string): string[];
export interface ExtensionsRuntimeHostsDialogElement {
    $: {
        dialog: CrDialogElement;
        submit: CrButtonElement;
    };
}
declare const ExtensionsRuntimeHostsDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("./site_permissions/site_settings_mixin.js").SiteSettingsMixinInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ExtensionsRuntimeHostsDialogElement extends ExtensionsRuntimeHostsDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        itemId: {
            type: StringConstructor;
        };
        /**
         * The site that this entry is currently managing. Only non-empty if this
         * is for editing an existing entry.
         */
        currentSite: {
            type: StringConstructor;
        };
        /**
         * Whether the dialog should update the host access to be "on specific
         * sites" before adding a new host permission.
         */
        updateHostAccess: {
            type: BooleanConstructor;
        };
        /** The site to add an exception for. */
        site_: {
            type: StringConstructor;
        };
        /** Whether the currently-entered input is valid. */
        inputInvalid_: {
            type: BooleanConstructor;
        };
        /**
         * the list of user specified restricted sites that match with `site_` if
         * `site_` is valid.
         */
        matchingRestrictedSites_: {
            type: ArrayConstructor;
        };
    };
    accessor itemId: string;
    accessor currentSite: string | null;
    accessor updateHostAccess: boolean;
    protected accessor site_: string;
    protected accessor inputInvalid_: boolean;
    protected accessor matchingRestrictedSites_: string[];
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    isOpen(): boolean;
    protected onInput_(): void;
    /**
     * Validates that the pattern entered is valid.
     */
    private validate_;
    protected onSiteValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected computeDialogTitle_(): string;
    protected computeSubmitButtonDisabled_(): boolean;
    protected computeSubmitButtonLabel_(): string;
    private computeMatchingRestrictedSites_;
    protected onCancelClick_(): void;
    /**
     * The tap handler for the submit button (adds the pattern and closes
     * the dialog).
     */
    protected onSubmitClick_(): void;
    /**
     * Handles adding a new site entry.
     */
    private handleAdd_;
    /**
     * Handles editing an existing site entry.
     */
    private handleEdit_;
    /**
     * Adds the runtime host permission through the delegate. If successful,
     * closes the dialog; otherwise displays the invalid input message.
     */
    private addPermission_;
    /**
     * Returns a warning message containing the first restricted site that
     * overlaps with `this.site_`, or an empty string if there are no matching
     * restricted sites.
     */
    protected computeMatchingRestrictedSitesWarning_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'extensions-runtime-hosts-dialog': ExtensionsRuntimeHostsDialogElement;
    }
}
export {};
