import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_components/cr_lottie/cr_lottie.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { AppMode } from './managed_user_profile_notice_browser_proxy.js';
export interface ManagedUserProfileNoticeDisclosureRefreshElement {
    $: {
        avatar: HTMLImageElement;
        title: HTMLElement;
        subtitle: HTMLElement;
    };
}
declare const ManagedUserProfileNoticeDisclosureRefreshElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ManagedUserProfileNoticeDisclosureRefreshElement extends ManagedUserProfileNoticeDisclosureRefreshElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        showEnterpriseBadge: {
            type: BooleanConstructor;
        };
        pictureUrl: {
            type: StringConstructor;
        };
        title: {
            type: StringConstructor;
        };
        subtitle: {
            type: StringConstructor;
        };
        appMode: {
            type: StringConstructor;
            reflect: boolean;
            attribute: string;
        };
        revampEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        isDarkMode_: {
            type: BooleanConstructor;
        };
        disableAnimations_: {
            type: BooleanConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor showEnterpriseBadge: boolean;
    accessor pictureUrl: string;
    accessor title: string;
    accessor subtitle: string;
    accessor appMode: AppMode;
    protected accessor revampEnabled_: boolean;
    protected accessor isDarkMode_: boolean;
    protected accessor disableAnimations_: boolean;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private browserProxy_;
    private darkModeListener_;
    private matchMedia_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected getAnimationUrl_(): string;
    protected shouldShowAnimations_(): boolean;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'managed-user-profile-notice-disclosure-refresh': ManagedUserProfileNoticeDisclosureRefreshElement;
    }
}
export {};
