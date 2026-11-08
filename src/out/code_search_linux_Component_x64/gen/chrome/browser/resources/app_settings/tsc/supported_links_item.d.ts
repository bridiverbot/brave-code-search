import 'chrome://resources/cr_components/localized_link/localized_link.js';
import 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button.js';
import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import './icons.html.js';
import './supported_links_dialog.js';
import './supported_links_overlapping_apps_dialog.js';
import type { App } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import type { AppMap } from 'chrome://resources/cr_components/app_management/constants.js';
import type { LocalizedLinkElement } from 'chrome://resources/cr_components/localized_link/localized_link.js';
import type { CrRadioButtonElement } from 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SupportedLinksItemElement {
    $: {
        heading: LocalizedLinkElement;
        preferredRadioButton: CrRadioButtonElement;
        browserRadioButton: CrRadioButtonElement;
    };
}
declare const SupportedLinksItemElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class SupportedLinksItemElement extends SupportedLinksItemElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        app: {
            type: ObjectConstructor;
        };
        hidden: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        disabled_: {
            type: BooleanConstructor;
        };
        showSupportedLinksDialog_: {
            type: BooleanConstructor;
        };
        showOverlappingAppsDialog_: {
            type: BooleanConstructor;
        };
        overlappingAppsWarning_: {
            type: StringConstructor;
        };
        showOverlappingAppsWarning_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        apps: {
            type: ObjectConstructor;
        };
        overlappingAppIds_: {
            type: ArrayConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor app: App;
    accessor apps: AppMap;
    accessor hidden: boolean;
    protected accessor disabled_: boolean;
    protected accessor overlappingAppsWarning_: string;
    protected accessor overlappingAppIds_: string[];
    protected accessor showOverlappingAppsDialog_: boolean;
    protected accessor showOverlappingAppsWarning_: boolean;
    protected accessor showSupportedLinksDialog_: boolean;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    /**
     * The supported links item is not available when an app has no supported
     * links.
     */
    private isHidden_;
    /**
     * Disable the radio button options if the app is a PWA and is set to open
     * in the browser.
     */
    private isDisabled_;
    protected getCurrentPreferredApp_(): string;
    protected getPreferredLabel_(): string;
    protected getBrowserLabel_(): string;
    protected isBrowserTabAppSupportingExistingClient_(): boolean;
    protected getDisabledExplanation_(): TrustedHTML;
    private updateOverlappingAppsWarning_;
    protected onLinkClicked_(e: CustomEvent<{
        event: Event;
    }>): void;
    protected onDialogClose_(): void;
    protected onSupportedLinkPrefSelectedChanged_(event: CustomEvent<{
        value: string;
    }>): Promise<void>;
    protected onOverlappingDialogClose_(): void;
    /**
     * Sets this.app as a preferred app or not depending on the value of
     * |preference|.
     */
    private setAppAsPreferredApp_;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-management-supported-links-item': SupportedLinksItemElement;
    }
}
export {};
