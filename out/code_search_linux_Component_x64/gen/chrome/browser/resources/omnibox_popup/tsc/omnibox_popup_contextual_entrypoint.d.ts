import '//resources/cr_components/composebox/composebox_lens_search.js';
import '//resources/cr_components/composebox/current_tab_chip.js';
import './omnibox_popup_contextual_entrypoint_button.js';
import type { ComposeboxLensSearchElement } from '//resources/cr_components/composebox/composebox_lens_search.js';
import type { CurrentTabChipElement } from '//resources/cr_components/composebox/current_tab_chip.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { TabInfo } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { InputState } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import type { OmniboxPopupContextualEntrypointButtonElement } from './omnibox_popup_contextual_entrypoint_button.js';
declare const OmniboxPopupContextualEntrypointElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export declare class OmniboxPopupContextualEntrypointElement extends OmniboxPopupContextualEntrypointElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        dropdownIsVisible: {
            type: BooleanConstructor;
        };
        inputState: {
            type: ObjectConstructor;
        };
        isLensSearchEligible: {
            type: BooleanConstructor;
        };
        isLensIconEligible: {
            type: BooleanConstructor;
        };
        isContentSharingEnabled: {
            type: BooleanConstructor;
        };
        isAimPopupEligible: {
            type: BooleanConstructor;
        };
        searchboxLayoutMode_: {
            type: StringConstructor;
            reflect: boolean;
        };
        showContextEntrypoint_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isLensChipShown_: {
            type: BooleanConstructor;
        };
        isLensIconShown_: {
            type: BooleanConstructor;
        };
        currentTabForChip_: {
            type: ObjectConstructor;
        };
        isCurrentTabChipShown_: {
            type: BooleanConstructor;
        };
        applyContextButtonBackground_: {
            type: BooleanConstructor;
        };
        usePecApi_: {
            type: BooleanConstructor;
        };
        isOblongShape_: {
            type: BooleanConstructor;
        };
    };
    accessor dropdownIsVisible: boolean;
    accessor inputState: InputState | null;
    accessor isLensSearchEligible: boolean;
    accessor isLensIconEligible: boolean;
    accessor isContentSharingEnabled: boolean;
    accessor isAimPopupEligible: boolean;
    protected accessor searchboxLayoutMode_: string;
    protected accessor showContextEntrypoint_: boolean;
    protected accessor isLensChipShown_: boolean;
    protected accessor isLensIconShown_: boolean;
    protected accessor currentTabForChip_: TabInfo | null;
    protected accessor isCurrentTabChipShown_: boolean;
    protected accessor applyContextButtonBackground_: boolean;
    protected accessor usePecApi_: boolean;
    protected accessor isOblongShape_: boolean;
    private isComposeboxChipEnabled_;
    private isLensIconEnabled_;
    private hideContextButton_;
    private isCurrentTabChipEnabled_;
    private contextButtonHasBackground_;
    private isLensIconIphEnabled_;
    private browserProxy_;
    private searchboxBrowserProxy_;
    private popupListenerIds_;
    private searchboxListenerIds_;
    get showContextEntrypoint(): boolean;
    get showContextualChip(): boolean;
    get showLensSearchIcon(): boolean;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    private onVisibilityChange_;
    private updateLensIconIphAnchor_;
    getContextEntrypointElement(): OmniboxPopupContextualEntrypointButtonElement | null;
    getContextualChipElement(): (CurrentTabChipElement | ComposeboxLensSearchElement) | null;
    getLensSearchIconElement(): ComposeboxLensSearchElement | null;
    protected shouldHideEntrypointButton_(): boolean;
    private computeShowContextEntrypoint_;
    onContextualChipClick(): void;
    protected onLensSearchClick_(): void;
    protected refreshCurrentTabForChip_(): Promise<void>;
    protected onAddTabContext_(): Promise<void>;
    protected computeShowCurrentTabChip_(): boolean;
    private onShow_;
}
declare global {
    interface HTMLElementTagNameMap {
        'omnibox-popup-contextual-entrypoint': OmniboxPopupContextualEntrypointElement;
    }
}
export {};
