import '//resources/cr_components/composebox/composebox_aim_button.js';
import '//resources/cr_components/composebox/composebox_dropdown.js';
import '//resources/cr_components/composebox/composebox_input.js';
import '//resources/cr_components/composebox/composebox_submit.js';
import '//resources/cr_components/composebox/composebox_tool_chip.js';
import '//resources/cr_components/composebox/composebox_voice_search.js';
import '//resources/cr_components/composebox/contextual_entrypoint_button.js';
import '//resources/cr_components/composebox/error_scrim.js';
import '//resources/cr_components/composebox/file_carousel.js';
import '//resources/cr_components/localized_link/localized_link.js';
import '//resources/cr_components/search/animated_glow.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_components/composebox/composebox_lens_search.js';
import '/strings.m.js';
import { ComposeboxFile, SubmitButtonIconType } from '//resources/cr_components/composebox/common.js';
import type { PageHandlerRemote } from '//resources/cr_components/composebox/composebox.mojom-webui.js';
import type { ComposeboxDropdownElement } from '//resources/cr_components/composebox/composebox_dropdown.js';
import type { ComposeboxInputElement } from '//resources/cr_components/composebox/composebox_input.js';
import type { ContextualEntrypointButtonElement } from '//resources/cr_components/composebox/contextual_entrypoint_button.js';
import { GlowAnimationState } from '//resources/cr_components/search/constants.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { PageCallbackRouter as SearchboxPageCallbackRouter, PageHandlerRemote as SearchboxPageHandlerRemote, SearchContext } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { UnguessableToken } from '//resources/mojo/mojo/public/mojom/base/unguessable_token.mojom-webui.js';
export interface OmniboxComposeboxElement {
    $: {
        composeboxInput: ComposeboxInputElement;
        composebox: HTMLElement;
        matches: ComposeboxDropdownElement;
    };
}
declare const OmniboxComposeboxElement_base: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_components/composebox/composebox_mixin.js").ComposeboxEmbedderMixinInterface);
export declare class OmniboxComposeboxElement extends OmniboxComposeboxElement_base {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        applyContextButtonBackground: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        expanding_: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        animationState: {
            type: StringConstructor;
            reflect: boolean;
        };
        searchboxNextEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        composeboxNoFlickerSuggestionsFix: {
            type: BooleanConstructor;
        };
        disableCaretColorAnimation: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        energyEffectEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        showMenuOnClick: {
            type: BooleanConstructor;
        };
        shouldShowGhostFiles: {
            type: BooleanConstructor;
        };
        usePecApi: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        contextManagementInComposeboxEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        smartComposeEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        submitButtonIconType: {
            type: StringConstructor;
        };
        isOblongShape: {
            type: BooleanConstructor;
        };
        webuiOmniboxSimplificationEnabled: {
            type: BooleanConstructor;
        };
        showVoiceSearch: {
            type: BooleanConstructor;
        };
        disableVoiceSearchAnimation: {
            type: BooleanConstructor;
        };
        entrypointName: {
            type: StringConstructor;
            reflect: boolean;
        };
        enableCarouselScrolling: {
            type: BooleanConstructor;
        };
        askGComposeboxLensChipEnabled_: {
            type: BooleanConstructor;
        };
        isLensSearchChipShown_: {
            type: BooleanConstructor;
        };
        isContentSharingEnabled_: {
            type: BooleanConstructor;
        };
        isLensSearchEligible_: {
            type: BooleanConstructor;
        };
        askGComposeboxPlaceholderEnabled_: {
            type: BooleanConstructor;
        };
        baseSearchboxLayoutMode_: {
            type: StringConstructor;
        };
        isAimButtonShown_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        showAimButtonExitIcon_: {
            type: BooleanConstructor;
        };
        energyEffectAnimationEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        hasPermissionPrompt_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        webuiShadowEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor entrypointName: string;
    accessor applyContextButtonBackground: boolean;
    accessor enableCarouselScrolling: boolean;
    accessor animationState: GlowAnimationState;
    accessor searchboxNextEnabled: boolean;
    accessor composeboxNoFlickerSuggestionsFix: boolean;
    accessor disableCaretColorAnimation: boolean;
    accessor energyEffectEnabled: boolean;
    accessor showMenuOnClick: boolean;
    accessor shouldShowGhostFiles: boolean;
    accessor usePecApi: boolean;
    accessor contextManagementInComposeboxEnabled: boolean;
    accessor smartComposeEnabled: boolean;
    accessor submitButtonIconType: SubmitButtonIconType;
    accessor isOblongShape: boolean;
    accessor webuiOmniboxSimplificationEnabled: boolean;
    accessor showVoiceSearch: boolean;
    accessor disableVoiceSearchAnimation: boolean;
    protected accessor expanding_: boolean;
    protected accessor askGComposeboxLensChipEnabled_: boolean;
    protected accessor isLensSearchChipShown_: boolean;
    protected accessor isContentSharingEnabled_: boolean;
    protected accessor isLensSearchEligible_: boolean;
    protected accessor askGComposeboxPlaceholderEnabled_: boolean;
    protected accessor baseSearchboxLayoutMode_: string;
    protected accessor isAimButtonShown_: boolean;
    protected accessor showAimButtonExitIcon_: boolean;
    protected accessor energyEffectAnimationEnabled_: boolean;
    protected accessor hasPermissionPrompt_: boolean;
    accessor webuiShadowEnabled: boolean;
    protected onLensSearchClick_(e: Event): void;
    private onVisibilityChange_;
    private pageHandler_;
    private searchboxCallbackRouter_;
    private searchboxHandler_;
    private listenerIds_;
    /**
     * Whether this session opened the composebox without suggestions and should
     * animate the contextual suggestions when they arrive. Set in
     * `addSearchContext()` and consumed exactly once, on the `showDropdown` when
     * the results come in.
     */
    private shouldAnimateContextualSuggestions_;
    private persistentAimButtonEnabled_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private computeSearchboxLayoutMode_;
    updateInputPlaceholder(): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * Plays the load-in animation: the box grows to fit the arriving
     * suggestions, which fade in as it opens.
     */
    private animateContextualSuggestions_;
    deleteFile(uuidToDelete: UnguessableToken, fromUserAction?: boolean): ComposeboxFile | null;
    getActiveElement(): Element | null;
    getDropdownElement(): ComposeboxDropdownElement;
    getInputElement(): ComposeboxInputElement;
    getPageHandler(): PageHandlerRemote;
    getSearchboxCallbackRouter(): SearchboxPageCallbackRouter;
    getSearchboxHandler(): SearchboxPageHandlerRemote;
    getContextEntrypointElement(): ContextualEntrypointButtonElement | null;
    shouldShowDivider(): boolean;
    shouldHandleSuggestionFuseboxActions(): boolean;
    setContextMenuOpen(open: boolean): void;
    private onComposeboxSubmit_;
    private onVoicePermissionPromptChanged_;
    addSearchContext(context: SearchContext | null): void;
    playGlowAnimation(): void;
    isExpanded(): boolean;
    private addFileFromAttachment_;
    private addTabFromAttachment_;
    private hasGridSuggestionsGroup_;
    setBaseSearchboxLayoutModeForTesting(mode: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-omnibox-composebox': OmniboxComposeboxElement;
    }
}
export {};
