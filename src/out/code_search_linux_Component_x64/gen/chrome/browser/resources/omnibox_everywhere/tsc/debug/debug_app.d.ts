import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { InvocationSource } from '../omnibox_everywhere_debug.mojom-webui.js';
export interface InvocationSourceOption {
    name: string;
    value: InvocationSource;
}
export interface OmniboxEverywhereDebugAppElement {
    $: {
        bgModeToggle: HTMLInputElement;
        launchOnStartupToggle: HTMLInputElement;
        hotkeyToggle: HTMLInputElement;
        ephemeralModelToggle: HTMLInputElement;
        sourceSelect: HTMLSelectElement;
    };
}
export declare class OmniboxEverywhereDebugAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        bgModeEnabled: {
            type: BooleanConstructor;
        };
        launchOnStartupEnabled: {
            type: BooleanConstructor;
        };
        hotkeyEnabled: {
            type: BooleanConstructor;
        };
        ephemeralModelEnabled: {
            type: BooleanConstructor;
        };
        selectedInvocationSource: {
            type: NumberConstructor;
        };
        shortcutStatus: {
            type: StringConstructor;
        };
        resetStatus: {
            type: StringConstructor;
        };
    };
    protected accessor bgModeEnabled: boolean;
    protected accessor launchOnStartupEnabled: boolean;
    protected accessor hotkeyEnabled: boolean;
    protected accessor ephemeralModelEnabled: boolean;
    protected accessor selectedInvocationSource: InvocationSource;
    protected accessor shortcutStatus: string;
    protected accessor resetStatus: string;
    private listenerIds_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected computeInvocationSourceOptions(): InvocationSourceOption[];
    protected isSource(source: InvocationSource): boolean;
    protected onBgModeToggleChange(): void;
    protected onLaunchOnStartupToggleChange(): void;
    protected onHotkeyToggleChange(): void;
    protected onEphemeralModelToggleChange(): void;
    protected onInvocationSourceChange(): void;
    protected onInvokeClick(): void;
    protected onLaunchWithIphClick(): void;
    protected onCreateShortcutClick(): Promise<void>;
    protected onPinToTaskbarClick(): Promise<void>;
    protected onResetProfilePrefsClick(): Promise<void>;
    protected onResetAllPrefsClick(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'omnibox-everywhere-debug-app': OmniboxEverywhereDebugAppElement;
    }
}
