import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar.js';
import 'chrome://resources/cr_elements/policy/cr_tooltip_icon.js';
import './pack_dialog.js';
import type { CrToggleElement } from 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import type { CrToolbarElement } from 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface ToolbarDelegate {
    /**
     * Toggles whether or not the profile is in developer mode.
     */
    setProfileInDevMode(inDevMode: boolean): void;
    /** Opens the dialog to load unpacked extensions. */
    loadUnpacked(): Promise<boolean>;
    /** Updates all extensions. */
    updateAllExtensions(extensions: chrome.developerPrivate.ExtensionInfo[]): Promise<void>;
}
export interface ExtensionsToolbarElement {
    $: {
        devDrawer: HTMLElement;
        devMode: CrToggleElement;
        loadUnpacked: HTMLElement;
        packExtensions: HTMLElement;
        toolbar: CrToolbarElement;
        updateNow: HTMLElement;
    };
}
declare const ExtensionsToolbarElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ExtensionsToolbarElement extends ExtensionsToolbarElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        extensions: {
            type: ArrayConstructor;
        };
        delegate: {
            type: ObjectConstructor;
        };
        inDevMode: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        devModeControlledByPolicy: {
            type: BooleanConstructor;
        };
        isChildAccount: {
            type: BooleanConstructor;
        };
        narrow: {
            type: BooleanConstructor;
            notify: boolean;
        };
        canLoadUnpacked: {
            type: BooleanConstructor;
        };
        expanded_: {
            type: BooleanConstructor;
        };
        showPackDialog_: {
            type: BooleanConstructor;
        };
        /**
         * Prevents initiating update while update is in progress.
         */
        isUpdating_: {
            type: BooleanConstructor;
        };
    };
    accessor extensions: chrome.developerPrivate.ExtensionInfo[];
    accessor delegate: ToolbarDelegate;
    accessor inDevMode: boolean;
    accessor devModeControlledByPolicy: boolean;
    accessor isChildAccount: boolean;
    accessor narrow: boolean;
    accessor canLoadUnpacked: boolean | undefined;
    protected accessor expanded_: boolean;
    protected accessor showPackDialog_: boolean;
    private accessor isUpdating_;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    focusSearchInput(): void;
    isSearchFocused(): boolean;
    protected shouldDisableDevMode_(): boolean;
    protected getTooltipText_(): string;
    protected getIcon_(): string;
    protected onDevModeToggleChange_(e: CustomEvent<boolean>): void;
    private onInDevModeChanged_;
    protected onLoadUnpackedClick_(): void;
    protected onPackClick_(): void;
    protected onPackDialogClose_(): void;
    protected onUpdateNowClick_(): void;
    protected onNarrowChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected canLoadUnpacked_(): boolean;
}
export type ToolbarElement = ExtensionsToolbarElement;
declare global {
    interface HTMLElementTagNameMap {
        'extensions-toolbar': ExtensionsToolbarElement;
    }
}
export {};
