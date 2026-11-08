import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface AccountMenuElement {
    $: {
        menu: CrActionMenuElement;
    };
}
export declare class AccountMenuElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        fullName: {
            type: StringConstructor;
        };
        email: {
            type: StringConstructor;
        };
    };
    accessor fullName: string;
    accessor email: string;
    private toolbarBrowserProxy_;
    private isUnboundedMenuEnabled_;
    showAt(target: HTMLElement): Promise<void>;
    close(): void;
    protected onManageAccountClick_(): void;
    protected onSignOutClick_(): void;
    protected getAccountLabel_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'contextual-tasks-account-menu': AccountMenuElement;
    }
}
