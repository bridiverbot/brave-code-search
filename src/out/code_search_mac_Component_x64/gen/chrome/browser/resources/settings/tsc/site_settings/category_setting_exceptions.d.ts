/**
 * @fileoverview
 * 'category-setting-exceptions' is the polymer element for showing a certain
 * category of exceptions under Site Settings.
 */
import './site_list.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const CategorySettingExceptionsElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("./site_settings_mixin_lit.js").SiteSettingsMixinLitInterface);
export declare class CategorySettingExceptionsElement extends CategorySettingExceptionsElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The string description shown below the header.
         */
        description: {
            type: StringConstructor;
        };
        /**
         * Some content types (like Location) do not allow the user to manually
         * edit the exception list from within Settings.
         */
        readOnlyList: {
            type: BooleanConstructor;
        };
        /**
         * True if the default value is managed by a policy.
         */
        defaultManaged_: {
            type: BooleanConstructor;
        };
        /**
         * The heading text for the blocked exception list.
         */
        blockHeader: {
            type: StringConstructor;
        };
        /**
         * The heading text for the allowed exception list.
         */
        allowHeader: {
            type: StringConstructor;
        };
        searchFilter: {
            type: StringConstructor;
        };
    };
    accessor description: string;
    accessor readOnlyList: boolean;
    private accessor defaultManaged_;
    accessor blockHeader: string;
    accessor allowHeader: string;
    accessor searchFilter: string;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    /**
     * Hides particular category subtypes if |this.category| does not support the
     * content setting of that type.
     */
    protected shouldShowAllowSiteList_(): boolean;
    /**
     * Updates whether or not the default value is managed by a policy.
     */
    private updateDefaultManaged_;
    /**
     * Returns true if this list is explicitly marked as readonly by a consumer
     * of this component or if the default value for these exceptions are managed
     * by a policy. User should not be able to set exceptions to managed default
     * values.
     */
    protected getReadOnlyList_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'category-setting-exceptions': CategorySettingExceptionsElement;
    }
}
export {};
