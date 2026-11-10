import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './icons.html.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_tabs/cr_tabs.js';
import '/strings.m.js';
import './experiment.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ExperimentalFeaturesData, Feature } from './flags_browser_proxy.js';
export interface FlagsAppElement {
    $: {
        search: HTMLInputElement;
    };
}
export declare class FlagsAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        data: {
            type: ObjectConstructor;
        };
        defaultFeatures: {
            type: ArrayConstructor;
        };
        nonDefaultFeatures: {
            type: ArrayConstructor;
        };
        searching: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        needsRestart: {
            type: BooleanConstructor;
        };
        importError: {
            type: StringConstructor;
        };
        toastMessage_: {
            type: StringConstructor;
        };
        tabNames_: {
            type: ArrayConstructor;
        };
        selectedTabIndex_: {
            type: NumberConstructor;
        };
        isImportExportEnabled_: {
            type: BooleanConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor tabNames_: string[];
    protected accessor selectedTabIndex_: number;
    protected accessor data: ExperimentalFeaturesData;
    protected accessor defaultFeatures: Feature[];
    protected accessor nonDefaultFeatures: Feature[];
    protected accessor searching: boolean;
    protected accessor needsRestart: boolean;
    protected accessor importError: string;
    protected accessor toastMessage_: string;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private announceStatusDelayMs;
    private featuresResolver;
    private flagSearch;
    private flagsRedirects_;
    private lastChanged;
    private lastFocused;
    private isFlagsDeprecatedUrl_;
    private eventTracker_;
    getRequiredElement<K extends keyof HTMLElementTagNameMap>(query: K): HTMLElementTagNameMap[K];
    getRequiredElement<E extends HTMLElement = HTMLElement>(query: string): E;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): Promise<void>;
    private getRestartButton;
    setAnnounceStatusDelayMsForTesting(delay: number): void;
    setSearchDebounceDelayMsForTesting(delay: number): void;
    setFlagRedirectsForTesting(redirects: Record<string, string>): void;
    experimentalFeaturesReadyForTesting(): Promise<void>;
    /**
     * Cause a text string to be announced by screen readers
     * @param text The text that should be announced.
     */
    announceStatus(text: string): Promise<void>;
    search(): Promise<void>;
    private announceSearchResults;
    protected onResetAllKeydown_(e: KeyboardEvent): void;
    protected onResetAllBlur_(): void;
    /**
     * Highlight an element associated with the page's location's hash. We need to
     * fake fragment navigation with '.scrollIntoView()', since the fragment IDs
     * don't actually exist until after the template code runs; normal navigation
     * therefore doesn't work.
     */
    private highlightReferencedFlag;
    /**
     * Gets details and configuration about the available features.
     */
    private requestExperimentalFeaturesData;
    /**
     * Clears a search showing all experiments.
     */
    private clearSearch;
    /** Reset all flags to their default values and refresh the UI. */
    protected onResetAllClick_(e: Event): Promise<void>;
    protected onExportClick_(): Promise<void>;
    protected onImportClick_(e: Event): void;
    protected onImportFromFileClick_(): void;
    protected onImportFromClipboardClick_(): Promise<void>;
    protected onImportFileChange_(e: Event): Promise<void>;
    private importFlagsFromJson_;
    private showToast_;
    private rejectImport_;
    protected onSearchInput_(): void;
    protected onClearSearchClick_(): void;
    protected onSelectChange_(e: Event): void;
    protected onTextareaChange_(): void;
    protected onInputChange_(): void;
    protected onRestartButtonClick_(): void;
    protected getNeedsRestartRole_(): string;
    protected shouldShowPromos_(): boolean;
    protected accessor isImportExportEnabled_: boolean;
    protected onTabsSelectedChanged_(e: CustomEvent<{
        value: number;
    }>): void;
    protected isTabSelected_(index: number): boolean;
    /**
     * Allows the restart button to jump back to the previously focused experiment
     * in the list instead of going to the top of the page.
     */
    protected onRestartButtonKeydown_(e: KeyboardEvent): void;
    protected onRestartButtonBlur_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'flags-app': FlagsAppElement;
    }
}
export type AppElement = FlagsAppElement;
