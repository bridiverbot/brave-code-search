import '//resources/cr_components/composebox/composebox_aim_button.js';
import '//resources/cr_components/composebox/composebox_dropdown.js';
import '//resources/cr_components/composebox/composebox_file_inputs.js';
import '//resources/cr_components/composebox/composebox_submit.js';
import '//resources/cr_components/composebox/contextual_entrypoint_and_menu.js';
import '//resources/cr_components/composebox/composebox_input.js';
import '//resources/cr_components/composebox/error_scrim.js';
import '//resources/cr_components/composebox/file_carousel.js';
import '//resources/cr_components/composebox/composebox_tool_chip.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_components/composebox/composebox_voice_search.js';
import '//resources/cr_components/search/animated_glow.js';
import '//resources/cr_components/localized_link/localized_link.js';
import { GlifAnimationState } from '//resources/cr_components/composebox/common.js';
import type { ComposeboxFile, ComposeboxFuseboxActionRequest } from '//resources/cr_components/composebox/common.js';
import type { PageHandlerRemote } from '//resources/cr_components/composebox/composebox.mojom-webui.js';
import type { ComposeboxDropdownElement } from '//resources/cr_components/composebox/composebox_dropdown.js';
import type { ComposeboxFileInputsElement } from '//resources/cr_components/composebox/composebox_file_inputs.js';
import type { ComposeboxInputElement } from '//resources/cr_components/composebox/composebox_input.js';
import type { ComposeboxEmbedderMixinInterface } from '//resources/cr_components/composebox/composebox_mixin.js';
import type { ContextualEntrypointAndMenuElement } from '//resources/cr_components/composebox/contextual_entrypoint_and_menu.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { PageCallbackRouter as SearchboxPageCallbackRouter, PageHandlerRemote as SearchboxPageHandlerRemote } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { UnguessableToken } from '//resources/mojo/mojo/public/mojom/base/unguessable_token.mojom-webui.js';
export interface NtpComposeboxElement extends ComposeboxEmbedderMixinInterface {
    $: {
        composeboxInput: ComposeboxInputElement;
        composebox: HTMLElement;
        matches: ComposeboxDropdownElement;
        fileInputs: ComposeboxFileInputsElement;
    };
}
declare const NtpComposeboxElement_base: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => ComposeboxEmbedderMixinInterface);
export declare class NtpComposeboxElement extends NtpComposeboxElement_base {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        entrypointName: {
            type: StringConstructor;
            reflect: boolean;
        };
        glifAnimationState: {
            reflect: boolean;
            type: StringConstructor;
        };
        focused: {
            type: BooleanConstructor;
        };
        expanding_: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        shouldRemainFolded_: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        persistentAimButtonEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        showAimButtonExitIcon_: {
            type: BooleanConstructor;
        };
    };
    accessor entrypointName: string;
    accessor glifAnimationState: GlifAnimationState;
    accessor focused: boolean;
    private searchboxCallbackRouter_;
    private pageHandler_;
    private searchboxHandler_;
    private eventTracker_;
    private outsideClickEnabled_;
    protected accessor expanding_: boolean;
    protected accessor shouldRemainFolded_: boolean;
    protected accessor persistentAimButtonEnabled_: boolean;
    protected accessor showAimButtonExitIcon_: boolean;
    get keepMenuOpenOnTabSelect(): boolean;
    getPageHandler(): PageHandlerRemote;
    getSearchboxHandler(): SearchboxPageHandlerRemote;
    getSearchboxCallbackRouter(): SearchboxPageCallbackRouter;
    getActiveElement(): Element | null;
    getInputElement(): ComposeboxInputElement;
    getDropdownElement(): ComposeboxDropdownElement;
    getContextEntrypointElement(): ContextualEntrypointAndMenuElement | null;
    getFileInputsElement(): ComposeboxFileInputsElement | null;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private computeShouldRemainFolded;
    shouldShowDivider(): boolean;
    shouldHandleSuggestionFuseboxActions(): boolean;
    shouldWaitForDelayedTabContext(): boolean;
    deleteFile(uuidToDelete: UnguessableToken, fromUserAction?: boolean): ComposeboxFile | null;
    handleFuseboxAction(request: ComposeboxFuseboxActionRequest): Promise<void>;
    computeShowDropdown(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-composebox': NtpComposeboxElement;
    }
}
export {};
