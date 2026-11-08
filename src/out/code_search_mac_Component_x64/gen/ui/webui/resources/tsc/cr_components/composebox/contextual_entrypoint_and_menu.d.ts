import './contextual_action_menu.js';
import './contextual_entrypoint_button.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { TabInfo } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { InputState } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import type { UnguessableToken } from '//resources/mojo/mojo/public/mojom/base/unguessable_token.mojom-webui.js';
import { GlifAnimationState, TabSuggestionsState } from './common.js';
import type { ContextualActionMenuElement } from './contextual_action_menu.js';
export interface ContextualEntrypointAndMenuElement {
    $: {
        menu: ContextualActionMenuElement;
    };
}
declare const ContextualEntrypointAndMenuElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ContextualEntrypointAndMenuElement extends ContextualEntrypointAndMenuElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        fileNum: {
            type: NumberConstructor;
        };
        nonTabFileNum: {
            type: NumberConstructor;
        };
        showContextMenuDescription: {
            type: BooleanConstructor;
        };
        smartTabSharingActive: {
            type: BooleanConstructor;
        };
        smartTabSharingVisible: {
            type: BooleanConstructor;
        };
        contextManagementInComposeboxEnabled: {
            type: BooleanConstructor;
        };
        composeboxContextMenuTooltipsEnabled: {
            type: BooleanConstructor;
        };
        hasImageFiles: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        selectedTabIds: {
            type: ObjectConstructor;
        };
        aimThreadRestoredTabs: {
            type: ArrayConstructor;
        };
        tabSuggestions: {
            type: ArrayConstructor;
        };
        inputState: {
            type: ObjectConstructor;
        };
        tabSuggestionsState: {
            type: NumberConstructor;
        };
        glifAnimationState: {
            type: StringConstructor;
        };
        searchboxLayoutMode: {
            type: StringConstructor;
        };
        disableAutoReposition: {
            type: BooleanConstructor;
        };
        isSidePanel: {
            type: BooleanConstructor;
        };
        usePecApi: {
            type: BooleanConstructor;
        };
        energyEffectAnimationEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        disableFallbackGlifAnimation: {
            type: BooleanConstructor;
        };
        recentTabId: {
            type: NumberConstructor;
        };
        shareTabsFlyoutOpen: {
            type: BooleanConstructor;
        };
        unboundedMenuEnabled: {
            reflect: boolean;
            type: BooleanConstructor;
            attribute: string;
        };
        enableMultiTabSelection_: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        sharedTabs: {
            type: ArrayConstructor;
        };
    };
    accessor fileNum: number;
    accessor nonTabFileNum: number;
    accessor showContextMenuDescription: boolean;
    accessor smartTabSharingActive: boolean;
    accessor smartTabSharingVisible: boolean;
    accessor contextManagementInComposeboxEnabled: boolean;
    accessor composeboxContextMenuTooltipsEnabled: boolean;
    accessor selectedTabIds: Map<number, UnguessableToken>;
    accessor aimThreadRestoredTabs: TabInfo[];
    accessor tabSuggestions: TabInfo[];
    accessor inputState: InputState | null;
    accessor glifAnimationState: GlifAnimationState;
    accessor sharedTabs: TabInfo[];
    accessor recentTabId: number | null;
    accessor shareTabsFlyoutOpen: boolean;
    accessor unboundedMenuEnabled: boolean;
    accessor tabSuggestionsState: TabSuggestionsState;
    menuOpenDelayMs: number;
    private openTimeoutId_;
    accessor hasImageFiles: boolean;
    accessor searchboxLayoutMode: string;
    accessor disableAutoReposition: boolean;
    accessor usePecApi: boolean;
    accessor energyEffectAnimationEnabled: boolean;
    accessor isSidePanel: boolean;
    accessor disableFallbackGlifAnimation: boolean;
    protected accessor enableMultiTabSelection_: boolean;
    private shouldOpenMenuForMultiSelection_;
    openMenuForMultiSelection(): void;
    private getEntrypointElements_;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    closeMenu(): void;
    protected onMenuClose_(): void;
    protected onContextMenuEntrypointClick_(): void;
    protected onContextMenuEntrypointHover_(): void;
    private showMenuAtEntrypoint_;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-composebox-contextual-entrypoint-and-menu': ContextualEntrypointAndMenuElement;
    }
}
export {};
