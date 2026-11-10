import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class ManagedUserProfileNoticeStateElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        title: {
            type: StringConstructor;
        };
        subtitle: {
            type: StringConstructor;
        };
    };
    accessor title: string;
    accessor subtitle: string;
}
declare global {
    interface HTMLElementTagNameMap {
        'managed-user-profile-notice-state': ManagedUserProfileNoticeStateElement;
    }
}
