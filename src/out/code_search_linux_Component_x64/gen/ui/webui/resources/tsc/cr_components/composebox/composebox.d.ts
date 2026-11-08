import './composebox_file_inputs.js';
import './composebox_lens_search.js';
import './composebox_tool_chip.js';
import './contextual_entrypoint_and_menu.js';
import './contextual_entrypoint_button.js';
import './composebox_dropdown.js';
import './composebox_voice_search.js';
import './error_scrim.js';
import './file_carousel.js';
import './file_thumbnail.js';
import './icons.html.js';
import './composebox_input.js';
import './composebox_submit.js';
import '//resources/cr_components/localized_link/localized_link.js';
import '//resources/cr_components/search/animated_glow.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PageCallbackRouter as SearchboxPageCallbackRouter, PageHandlerRemote as SearchboxPageHandlerRemote, SearchContext, TabInfo } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { UnguessableToken } from '//resources/mojo/mojo/public/mojom/base/unguessable_token.mojom-webui.js';
import { ComposeboxFile } from './common.js';
import type { TabUpload } from './common.js';
import type { PageHandlerRemote } from './composebox.mojom-webui.js';
import type { ComposeboxDropdownElement } from './composebox_dropdown.js';
import type { ComposeboxFileInputsElement } from './composebox_file_inputs.js';
import type { ComposeboxInputElement } from './composebox_input.js';
import type { ContextualEntrypointAndMenuElement } from './contextual_entrypoint_and_menu.js';
import type { ContextualEntrypointButtonElement } from './contextual_entrypoint_button.js';
export interface ComposeboxElement {
    $: {
        composeboxInput: ComposeboxInputElement;
        composebox: HTMLElement;
        fileInputs: ComposeboxFileInputsElement;
        matches: ComposeboxDropdownElement;
    };
}
declare const ComposeboxElement_base: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("./composebox_mixin.js").ComposeboxEmbedderMixinInterface);
export declare class ComposeboxElement extends ComposeboxElement_base {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        showLensButton: {
            type: BooleanConstructor;
        };
        lensButtonTriggersOverlay: {
            type: BooleanConstructor;
        };
        isCollapsible: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        expanding_: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        /**
         * Feature flag for New Tab Page Realbox Next.
         */
        ntpRealboxNextEnabled: {
            type: BooleanConstructor;
        };
        lensButtonDisabled: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        carouselOnTop_: {
            type: BooleanConstructor;
        };
        entrypointName: {
            type: StringConstructor;
            reflect: boolean;
        };
        disableComposeboxAnimation: {
            type: BooleanConstructor;
        };
        observeResize: {
            type: BooleanConstructor;
        };
        isOmniboxInCompactMode_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isFollowupQuery: {
            type: BooleanConstructor;
        };
        enableFileHint: {
            type: BooleanConstructor;
        };
        isSidePanel: {
            type: BooleanConstructor;
        };
        inputPlaceholderOverride: {
            type: StringConstructor;
        };
        searchboxCallbackRouter_: {
            type: ObjectConstructor;
        };
        applyContextButtonBackground: {
            reflect: boolean;
            type: BooleanConstructor;
        };
    };
    accessor isSidePanel: boolean;
    accessor isFollowupQuery: boolean;
    accessor enableFileHint: boolean;
    accessor inputPlaceholderOverride: string;
    accessor disableComposeboxAnimation: boolean;
    accessor observeResize: boolean;
    accessor lensButtonTriggersOverlay: boolean;
    accessor showLensButton: boolean;
    accessor ntpRealboxNextEnabled: boolean;
    accessor carouselOnTop_: boolean;
    accessor entrypointName: string;
    accessor lensButtonDisabled: boolean;
    accessor applyContextButtonBackground: boolean;
    protected isRtl_: boolean;
    accessor isCollapsible: boolean;
    protected accessor expanding_: boolean;
    protected accessor isOmniboxInCompactMode_: boolean;
    protected accessor searchboxCallbackRouter_: SearchboxPageCallbackRouter;
    private get webUIOmniboxAskGAboutThisPageEnabled_();
    private pageHandler_;
    private searchboxHandler_;
    private resizeObservers_;
    shouldShowDivider(): boolean;
    getDropdownElement(): ComposeboxDropdownElement;
    getActiveElement(): Element | null;
    getPageHandler(): PageHandlerRemote;
    getSearchboxCallbackRouter(): SearchboxPageCallbackRouter;
    getSearchboxHandler(): SearchboxPageHandlerRemote;
    getContextEntrypointElement(): ContextualEntrypointButtonElement | ContextualEntrypointAndMenuElement | null;
    getLensButtonElement(): HTMLElement | null;
    getFileInputsElement(): ComposeboxFileInputsElement | null;
    constructor();
    getInputElement(): ComposeboxInputElement;
    connectedCallback(): void;
    private setupResizeObservers_;
    private tearDownResizeObservers_;
    private syncResizeObservers_;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    playGlowAnimation(): void;
    getHasAutomaticActiveTabChipToken(): boolean;
    getAutomaticActiveTabChipElement(): HTMLElement | null;
    isExpanded(): boolean;
    setExpandingForTesting(expanding: boolean): void;
    hasValidQuery(): boolean;
    deleteFile(uuidToDelete: UnguessableToken, fromUserAction?: boolean): ComposeboxFile | null;
    protected onFileChange_(e: CustomEvent<{
        files: FileList;
    }>): void;
    private updateAutoSuggestedTabContext_;
    addTabContextHandleCallback(tabUpload: TabUpload, replaceAutoActiveTabToken?: boolean): Promise<ComposeboxFile | null>;
    protected onLensClick_(): void;
    protected onLensIconMousedown_(e: MouseEvent): void;
    updateInputPlaceholder(): void;
    protected onComposeboxFocusin_(e: FocusEvent): void;
    protected onComposeboxFocusout_(e: FocusEvent): void;
    addSearchContext(context: SearchContext | null): void;
    closeComposebox(afterSubmit?: boolean): void;
    submitCleanup(): void;
    clearAllInputs(querySubmitted: boolean, shouldBlockAutoSuggestedTabs: boolean): void;
    private addFileFromAttachment_;
    private addTabFromAttachment_;
    setAutomaticActiveTabForTesting(file: ComposeboxFile): void;
    updateAutoSuggestedTabContextForTesting(tab: TabInfo | null, invocationSource?: string | null): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-composebox': ComposeboxElement;
    }
}
export {};
