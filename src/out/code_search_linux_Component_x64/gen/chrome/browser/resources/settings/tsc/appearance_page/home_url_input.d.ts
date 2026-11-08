/**
 * @fileoverview
 * `home-url-input` is a single-line text field intending to be used with
 * prefs.homepage
 */
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface HomeUrlInputElement {
    $: {
        input: CrInputElement;
    };
}
declare const HomeUrlInputElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/controls/cr_policy_pref_mixin_lit.js").CrPolicyPrefMixinLitInterface);
export declare class HomeUrlInputElement extends HomeUrlInputElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        pref: {
            type: ObjectConstructor;
        };
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        canTab: {
            type: BooleanConstructor;
        };
        invalid: {
            type: BooleanConstructor;
        };
        value: {
            type: StringConstructor;
        };
        label: {
            type: StringConstructor;
        };
    };
    accessor pref: chrome.settingsPrivate.PrefObject<string> | undefined;
    accessor disabled: boolean;
    accessor canTab: boolean;
    accessor invalid: boolean;
    accessor value: string;
    accessor label: string;
    private browserProxy_;
    constructor();
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    /**
     * Focuses the 'input' element.
     */
    focus(): void;
    private setInputValueFromPref_;
    /**
     * Gets a tab index for this control if it can be tabbed to.
     */
    protected getTabindex_(): number;
    /**
     * Change event handler for cr-input. Updates the pref value.
     * settings-input uses the change event because it is fired by the Enter key.
     */
    protected onChange_(): void;
    private resetValue_;
    /**
     * Keydown handler to specify enter-key and escape-key interactions.
     */
    protected onKeydown_(event: KeyboardEvent): void;
    /** @return Whether the element should be disabled. */
    protected isDisabled_(): boolean;
    protected onInput_(): void;
    protected onKeyup_(e: KeyboardEvent): void;
    protected onKeypress_(e: KeyboardEvent): void;
    protected onValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onInvalidChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'home-url-input': HomeUrlInputElement;
    }
}
export {};
