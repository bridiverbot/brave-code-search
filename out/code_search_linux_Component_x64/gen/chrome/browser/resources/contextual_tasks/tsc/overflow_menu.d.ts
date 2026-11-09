import './icons.html.js';
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import type { CrActionMenuElement } from '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface OverflowMenuElement {
    $: {
        menu: CrActionMenuElement;
    };
}
declare const OverflowMenuElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export declare class OverflowMenuElement extends OverflowMenuElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        enableOpenInNewTabButton: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isSmallDeviceFormFactor: {
            type: BooleanConstructor;
        };
        isPinned: {
            type: BooleanConstructor;
        };
        isPinButtonEnabled: {
            type: BooleanConstructor;
        };
        isAiPage: {
            type: BooleanConstructor;
        };
        isUserFeedbackAllowed: {
            type: BooleanConstructor;
        };
        contextualTasksEnableSpatialModelToolbarLayout: {
            type: BooleanConstructor;
        };
        contextualTasksEnableSpatialModelToolbarLayoutNewThreadInOverflow: {
            type: BooleanConstructor;
        };
        isAimEligible: {
            type: BooleanConstructor;
        };
        isCobrowseEligible: {
            type: BooleanConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor enableOpenInNewTabButton: boolean;
    accessor isSmallDeviceFormFactor: boolean;
    accessor isPinned: boolean;
    accessor isPinButtonEnabled: boolean;
    accessor isAiPage: boolean;
    accessor isUserFeedbackAllowed: boolean;
    accessor contextualTasksEnableSpatialModelToolbarLayout: boolean;
    accessor contextualTasksEnableSpatialModelToolbarLayoutNewThreadInOverflow: boolean;
    accessor isAimEligible: boolean;
    accessor isCobrowseEligible: boolean;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private isUnboundedMenuEnabled_;
    private toolbarBrowserProxy_;
    private toolbarListenerIds_;
    private helpBubbleRegistered_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    showAt(target: HTMLElement): Promise<void>;
    close(): void;
    protected shouldShowPinButton_(): boolean;
    protected getPinButtonTooltip_(): string;
    protected onPinClick_(): void;
    protected onThreadHistoryClick_(): void;
    protected onOpenInNewTabClick_(): void;
    protected onMyActivityClick_(): void;
    protected onHelpClick_(): void;
    protected onFeedbackClick_(): void;
    protected onNewThreadClick_(): void;
    protected onOpenChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected shouldShowNewThreadInMenu_(): boolean;
    protected shouldShowThreadHistoryInMenu_(): boolean;
    protected shouldShowOpenInNewTabInMenu_(): boolean;
    protected shouldShowMenuHeaderDivider_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'contextual-tasks-overflow-menu': OverflowMenuElement;
    }
}
export {};
