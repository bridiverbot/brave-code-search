/**
 * @fileoverview UI element for indicating that this user is managed by
 * their organization. This component uses the |isManaged| boolean in
 * loadTimeData, and the |managedByOrg| i18n string.
 *
 * If |isManaged| is false, this component is hidden. If |isManaged| is true, it
 * becomes visible.
 */
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
declare const ManagedFootnoteElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ManagedFootnoteElement extends ManagedFootnoteElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * Whether the user is managed by their organization through enterprise
         * policies.
         */
        isManaged_: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        /**
         * The name of the icon to display in the footer.
         * Should only be read if isManaged_ is true.
         */
        managedByIcon_: {
            reflect: boolean;
            type: StringConstructor;
        };
    };
    protected accessor isManaged_: boolean;
    protected accessor managedByIcon_: string;
    firstUpdated(): void;
    /** @return Message to display to the user. */
    protected getManagementString_(): TrustedHTML;
}
declare global {
    interface HTMLElementTagNameMap {
        'managed-footnote': ManagedFootnoteElement;
    }
}
export {};
