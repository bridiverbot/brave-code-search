import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { AccountState } from './brave_account.mojom-webui.js';
import { BraveAccountRowBrowserProxy } from './brave_account_row_browser_proxy.js';
export declare class BraveAccountRowElement extends CrLitElement {
    static get is(): string;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        browserProxy: {
            type: ObjectConstructor;
        };
        state: {
            type: ObjectConstructor;
        };
    };
    protected accessor browserProxy: BraveAccountRowBrowserProxy;
    protected accessor state: AccountState | undefined;
    private accountStateListenerId;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'brave-account-row': BraveAccountRowElement;
    }
}
