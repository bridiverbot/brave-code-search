import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class ManagedUserProfileNoticeValuePropElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        pictureUrl: {
            type: StringConstructor;
        };
        title: {
            type: StringConstructor;
        };
        subtitle: {
            type: StringConstructor;
        };
        email: {
            type: StringConstructor;
        };
        accountName: {
            type: StringConstructor;
        };
        showEnterpriseBadge: {
            type: BooleanConstructor;
        };
    };
    accessor pictureUrl: string;
    accessor title: string;
    accessor subtitle: string;
    accessor email: string;
    accessor accountName: string;
    accessor showEnterpriseBadge: boolean;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'managed-user-profile-notice-value-prop': ManagedUserProfileNoticeValuePropElement;
    }
}
