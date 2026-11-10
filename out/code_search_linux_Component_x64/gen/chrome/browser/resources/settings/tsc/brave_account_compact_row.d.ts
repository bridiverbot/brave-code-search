import { CrLitElement, PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { AccountState } from './brave_account.mojom-webui.js';
export declare class BraveAccountCompactRowElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        actionRequired: {
            type: BooleanConstructor;
            state: boolean;
        };
        description: {
            type: StringConstructor;
            state: boolean;
        };
        displayDescription: {
            type: StringConstructor;
            state: boolean;
        };
        state: {
            type: ObjectConstructor;
            state: boolean;
        };
    };
    protected accessor actionRequired: boolean;
    protected accessor description: string;
    protected accessor displayDescription: string;
    protected accessor state: AccountState | undefined;
    private browserProxy;
    private accountStateListenerId;
    private truncator;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    private getDescription;
    protected navigateToAccountSection(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'brave-account-compact-row': BraveAccountCompactRowElement;
    }
}
