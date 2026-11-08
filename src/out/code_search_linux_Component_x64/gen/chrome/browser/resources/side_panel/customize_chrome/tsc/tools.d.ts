import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import type { CrToggleElement } from 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface CustomizeChromeToolsElement {
    $: {
        showChipsToggle: CrToggleElement;
    };
}
export declare class CustomizeChromeToolsElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isChipsEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor isChipsEnabled_: boolean;
    private apiProxy_;
    private setToolsSettingsListenerId_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private setChipsEnabled_;
    protected onShowToggleChange_(e: CustomEvent<boolean>): void;
    protected onShowToggleClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'customize-chrome-tools': CustomizeChromeToolsElement;
    }
}
