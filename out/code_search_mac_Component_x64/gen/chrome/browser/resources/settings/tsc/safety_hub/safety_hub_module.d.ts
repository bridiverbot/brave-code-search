/**
 * @fileoverview
 * 'settings-safety-hub-module' is the settings page that presents the safety
 * state of Chrome.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import '../site_favicon.js';
import '../i18n_setup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SiteInfo {
    origin: string;
    detail: string | TrustedHTML;
    icon?: string;
}
export interface SettingsSafetyHubModuleElement {
    $: {
        header: HTMLElement;
        headerTextWrapper: HTMLElement;
        headerWrapper: HTMLElement;
        subheader: HTMLElement;
    };
}
declare const SettingsSafetyHubModuleElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("../tooltip_mixin_lit.js").TooltipMixinLitInterface);
export declare class SettingsSafetyHubModuleElement extends SettingsSafetyHubModuleElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        sites: {
            type: ArrayConstructor;
        };
        animated: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        header: {
            type: StringConstructor;
        };
        subheader: {
            type: StringConstructor;
        };
        headerIcon: {
            type: StringConstructor;
        };
        headerIconColor: {
            type: StringConstructor;
        };
        buttonIcon: {
            type: StringConstructor;
        };
        buttonAriaLabelId: {
            type: StringConstructor;
        };
        buttonTooltipText: {
            type: StringConstructor;
        };
    };
    accessor sites: SiteInfo[] | null;
    accessor animated: boolean;
    accessor header: string;
    accessor subheader: string;
    accessor headerIcon: string;
    accessor headerIconColor: string;
    accessor buttonIcon: string;
    accessor buttonAriaLabelId: string;
    accessor buttonTooltipText: string;
    private modelUpdateDelayMsForTesting_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    setModelUpdateDelayMsForTesting(delayMs: number): void;
    private setVisibility_;
    private addItemLinkClickListeners;
    private onSitesChanged_;
    /**
     * Hides |origin| and when the animation finishes, calls |callback|. If
     * |origin| is null, all origins are hidden.
     *
     * The |callback| method MUST be provided and MUST remove the |origin| from
     * the underlying model.
     */
    animateHide(origin: string | null, callback: Function): void;
    /**
     * Shows the given |origins| and calls |callback|.
     *
     * MUST be called once for each origin added, right after it is added.
     */
    animateShow(origins: string[], callback?: Function): void;
    /** Focus the main button for the given |origin|, if it exists. */
    focusOriginMainButton(origin: string): void;
    private finalizeAnimation_;
    protected onItemButtonClick_(e: Event): void;
    private onHeaderIconChanged_;
    protected onMainButtonFocus_(e: Event): void;
    protected onMainButtonMouseenter_(e: Event): void;
    private showTooltip_;
    protected sanitizeInnerHtml_(rawString: string | TrustedHTML): TrustedHTML;
    protected getButtonAriaLabelForOrigin_(origin: string): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-safety-hub-module': SettingsSafetyHubModuleElement;
    }
}
export {};
