import './icons.html.js';
import './composebox_tab_favicon.js';
import './composebox_favicon_group.js';
import './contextual_action_menu.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { TabInfo } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { InputState } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import { GlifAnimationState } from './common.js';
declare const ContextualEntrypointButtonElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ContextualEntrypointButtonElement extends ContextualEntrypointButtonElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        showContextMenuDescription: {
            type: BooleanConstructor;
        };
        inputState: {
            type: ObjectConstructor;
        };
        glifAnimationState: {
            type: StringConstructor;
            reflect: boolean;
        };
        hasVirtualFocus: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        applyContextButtonBackground: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isOblongShape: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        windowWidthBelowThreshold_: {
            type: BooleanConstructor;
        };
        sharedTabs: {
            type: ArrayConstructor;
        };
        restoredTabs: {
            type: ArrayConstructor;
        };
        tabFaviconChipsToCoinsEnabled_: {
            type: BooleanConstructor;
        };
        energyEffectAnimationEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        disableFallbackGlifAnimation: {
            type: BooleanConstructor;
        };
        smartTabSharingActive: {
            type: BooleanConstructor;
        };
        entrypointAriaLabel_: {
            type: StringConstructor;
        };
        isLensSearchbox_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor showContextMenuDescription: boolean;
    accessor inputState: InputState | null;
    accessor sharedTabs: TabInfo[];
    accessor restoredTabs: TabInfo[];
    accessor glifAnimationState: GlifAnimationState;
    accessor hasVirtualFocus: boolean;
    accessor applyContextButtonBackground: boolean;
    accessor isOblongShape: boolean;
    accessor energyEffectAnimationEnabled: boolean;
    accessor disableFallbackGlifAnimation: boolean;
    accessor smartTabSharingActive: boolean;
    protected accessor entrypointAriaLabel_: string;
    protected accessor windowWidthBelowThreshold_: boolean;
    protected accessor isLensSearchbox_: boolean;
    protected accessor tabFaviconChipsToCoinsEnabled_: boolean;
    private showContextMenuDescriptionEnabled_;
    private metricsSource_;
    private eventTracker_;
    constructor();
    protected getTabs_(): TabInfo[];
    protected getSubmittedTabIds_(): Set<number>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private updateAriaLabel_;
    protected getEntrypointAriaLabel_(): string;
    protected onEntrypointClick_(e: Event): void;
    protected onEntrypointPointerenter_(): void;
    protected onIconAnimationend_(e: AnimationEvent): void;
    protected onDescriptionAnimationend_(e: AnimationEvent): void;
    protected onAimBackgroundAnimationend_(e: AnimationEvent): void;
    private onAnimationEnd_;
    protected getWrapperId_(): string;
    protected getWrapperCssClass_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-composebox-contextual-entrypoint-button': ContextualEntrypointButtonElement;
    }
}
export {};
