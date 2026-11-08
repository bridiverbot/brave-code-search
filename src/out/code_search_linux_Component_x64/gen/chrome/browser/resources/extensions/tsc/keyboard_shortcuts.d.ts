import 'chrome://resources/cr_components/cr_shortcut_input/cr_shortcut_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { KeyboardShortcutDelegate } from './keyboard_shortcut_delegate.js';
declare const ExtensionsKeyboardShortcutsElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ExtensionsKeyboardShortcutsElement extends ExtensionsKeyboardShortcutsElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        delegate: {
            type: ObjectConstructor;
        };
        items: {
            type: ArrayConstructor;
        };
        showGlobalScopeOption_: {
            type: BooleanConstructor;
        };
    };
    accessor delegate: KeyboardShortcutDelegate;
    accessor items: chrome.developerPrivate.ExtensionInfo[];
    protected accessor showGlobalScopeOption_: boolean;
    firstUpdated(): void;
    protected onInputCaptureChange_(event: CustomEvent<boolean>): void;
    protected onShortcutUpdated_(itemId: string, commandName: string, event: CustomEvent<string>): void;
    private onViewEnter_;
    protected calculateShownItems_(): chrome.developerPrivate.ExtensionInfo[];
    protected computeScopeAriaLabel_(item: chrome.developerPrivate.ExtensionInfo, command: chrome.developerPrivate.Command): string;
    /**
     * Determines whether to disable the dropdown menu for the command's scope.
     */
    protected computeScopeDisabled_(command: chrome.developerPrivate.Command): boolean;
    protected onScopeChanged_(event: Event): void;
    protected isChromeScopeSelected_(command: chrome.developerPrivate.Command): boolean;
    protected isGlobalScopeSelected_(command: chrome.developerPrivate.Command): boolean;
    protected computeInputDisabled_(item: chrome.developerPrivate.ExtensionInfo, command: chrome.developerPrivate.Command): boolean;
}
export type KeyboardShortcutsElement = ExtensionsKeyboardShortcutsElement;
declare global {
    interface HTMLElementTagNameMap {
        'extensions-keyboard-shortcuts': ExtensionsKeyboardShortcutsElement;
    }
}
export {};
