import '//resources/cr_components/composebox/composebox_dropdown.js';
import '//resources/cr_components/composebox/composebox_file_inputs.js';
import '//resources/cr_components/composebox/composebox_input.js';
import '//resources/cr_components/composebox/composebox_tool_chip.js';
import '//resources/cr_components/composebox/contextual_entrypoint_button.js';
import '//resources/cr_components/composebox/composebox_submit.js';
import '//resources/cr_components/composebox/error_scrim.js';
import '//resources/cr_components/composebox/file_carousel.js';
import '//resources/cr_components/search/animated_glow.js';
import type { ComposeboxFile } from '//resources/cr_components/composebox/common.js';
import { SubmitButtonIconType } from '//resources/cr_components/composebox/common.js';
import type { PageHandlerRemote } from '//resources/cr_components/composebox/composebox.mojom-webui.js';
import type { ComposeboxDropdownElement } from '//resources/cr_components/composebox/composebox_dropdown.js';
import type { ComposeboxFileInputsElement } from '//resources/cr_components/composebox/composebox_file_inputs.js';
import type { ComposeboxInputElement } from '//resources/cr_components/composebox/composebox_input.js';
import type { ContextualEntrypointButtonElement } from '//resources/cr_components/composebox/contextual_entrypoint_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { AutocompleteResult, PageCallbackRouter as SearchboxPageCallbackRouter, PageHandlerRemote as SearchboxPageHandlerRemote, SelectedFileInfo } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { ContextUploadErrorType } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import { ContextUploadStatus } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import type { UnguessableToken } from '//resources/mojo/mojo/public/mojom/base/unguessable_token.mojom-webui.js';
export interface OmniboxEverywhereComposeboxElement {
    $: {
        composeboxInput: ComposeboxInputElement;
        composebox: HTMLElement;
        matches: ComposeboxDropdownElement;
        fileInputs: ComposeboxFileInputsElement;
    };
}
declare const OmniboxEverywhereComposeboxElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_components/composebox/composebox_mixin.js").ComposeboxEmbedderMixinInterface) & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export declare class OmniboxEverywhereComposeboxElement extends OmniboxEverywhereComposeboxElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        applyContextButtonBackground: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        entrypointName: {
            type: StringConstructor;
            reflect: boolean;
        };
        disableComposeboxAnimation: {
            type: BooleanConstructor;
        };
        energyEffectAnimationEnabled: {
            type: BooleanConstructor;
        };
        submitButtonIconType: {
            type: StringConstructor;
        };
        clearAllInputsWhenSubmittingQuery: {
            type: BooleanConstructor;
        };
        isScreenshotMenuOpen: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isContextMenuOpen: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isPendingScreenshot: {
            type: BooleanConstructor;
        };
        isActive: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        isLensHelpBubbleShowing: {
            type: BooleanConstructor;
        };
    };
    accessor isActive: boolean;
    accessor isPendingScreenshot: boolean;
    accessor isLensHelpBubbleShowing: boolean;
    /**
     * Entrypoint name used by SearchAnimatedGlowElement and
     * ComposeboxEmbedderMixin to apply embedder-specific styling and themes.
     */
    accessor entrypointName: string;
    accessor disableComposeboxAnimation: boolean;
    accessor applyContextButtonBackground: boolean;
    accessor isScreenshotMenuOpen: boolean;
    accessor isContextMenuOpen: boolean;
    accessor energyEffectAnimationEnabled: boolean;
    accessor submitButtonIconType: SubmitButtonIconType;
    accessor clearAllInputsWhenSubmittingQuery: boolean;
    onVoiceSearchButtonClick(): void;
    private wasScreenshotMenuOpenOnPointerDown_;
    protected onLensSearchPointerdown_(e: PointerEvent): void;
    protected onLensSearchPointercancel_(): void;
    protected onLensSearchClick_(e: Event): void;
    protected onContextMenuEntrypointClick_(e?: CustomEvent<{
        anchorRect?: {
            x: number;
            y: number;
            width: number;
            height: number;
        };
    }>): void;
    private webuiOmniboxSimplificationEnabled_;
    private pageHandler_;
    private searchboxCallbackRouter_;
    private searchboxHandler_;
    private glowAnimationRafId_;
    private glowAnimationTimeoutId_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    getActiveElement(): Element | null;
    getDropdownElement(): ComposeboxDropdownElement;
    getInputElement(): ComposeboxInputElement;
    getPageHandler(): PageHandlerRemote;
    getSearchboxCallbackRouter(): SearchboxPageCallbackRouter;
    getSearchboxHandler(): SearchboxPageHandlerRemote;
    getContextEntrypointElement(): ContextualEntrypointButtonElement | null;
    getFileInputsElement(): ComposeboxFileInputsElement | null;
    shouldHideDropdown(): boolean;
    computeShowDropdown(): boolean;
    onAutocompleteResultChanged(result: AutocompleteResult): void;
    addFileContextFromBrowser(uuid: UnguessableToken, fileInfo: SelectedFileInfo): void;
    onInputInput(e: CustomEvent<Event>): void;
    onScreenshotCaptureCancelled(): void;
    onContextMenuOpened(): void;
    onContextMenuClosed(): Promise<void>;
    keepMenuOpenForMultiSelection(): Promise<void>;
    shouldShowDivider(): boolean;
    /**
     * Enables handling of Fusebox suggestion actions (e.g. contextual tool
     * suggestions like "Turn it into a graphic novel illustration" in image mode)
     * so clicking a suggestion chip fills the prompt into the Composebox rather
     * than falling through to standard URL navigation.
     */
    shouldHandleSuggestionFuseboxActions(): boolean;
    deleteFile(uuidToDelete: UnguessableToken, fromUserAction?: boolean): ComposeboxFile | null;
    onContextualInputStatusChanged(token: UnguessableToken, status: ContextUploadStatus, errorType: ContextUploadErrorType | null): void;
    selectFirstMatch(): void;
    submitQuery(): void;
    hasValidQuery(): boolean;
    setInputText(text: string): void;
    playGlowAnimation(timeoutMs?: number): void;
    handleEscapeKeyLogic(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'omnibox-everywhere-composebox': OmniboxEverywhereComposeboxElement;
    }
}
export {};
