import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const ManagedUserProfileNoticeDisclosureElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ManagedUserProfileNoticeDisclosureElement extends ManagedUserProfileNoticeDisclosureElementBase {
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
        disclosureTitle_: {
            type: StringConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor showEnterpriseBadge: boolean;
    accessor pictureUrl: string;
    accessor title: string;
    accessor subtitle: string;
    protected accessor disclosureTitle_: string;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'managed-user-profile-notice-disclosure': ManagedUserProfileNoticeDisclosureElement;
    }
}
export {};
