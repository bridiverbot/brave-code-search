import 'chrome://resources/cr_components/composebox/icons.html.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import './icons.html.js';
import type { TabUpload } from 'chrome://resources/cr_components/composebox/common.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { FuseboxAction } from 'chrome://resources/mojo/components/omnibox/browser/fusebox_action.mojom-webui.js';
import type { ActionChip } from '../action_chips.mojom-webui.js';
export interface ActionChipClickDetail {
    suggestion: string;
    files: TabUpload[];
    fuseboxAction?: FuseboxAction;
}
export interface ActionChipsElement {
    $: {
        actionMenu: CrActionMenuElement;
    };
}
/**
 * The element for displaying Action Chips.
 */
export declare class ActionChipsElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        showBackground: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        actionChips_: {
            type: ArrayConstructor;
            state: boolean;
        };
        showDismissalUI_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        disablementContextMenuEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        smallChipsEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
    };
    accessor showBackground: boolean;
    protected accessor actionChips_: ActionChip[];
    protected accessor showDismissalUI_: boolean;
    protected accessor disablementContextMenuEnabled_: boolean;
    protected accessor smallChipsEnabled_: boolean;
    private webuiRoundedIconsEnabled_;
    private callbackRouter;
    private delayTabUploads_;
    private handler;
    private initialLoadStartTime_;
    private onActionChipChangedListenerId_;
    protected getIcon_(chip: ActionChip): string;
    protected getAdditionalIconClasses_(chip: ActionChip): string;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected onClick_(e: MouseEvent | KeyboardEvent): void;
    protected onAuxclick_(e: MouseEvent): void;
    protected onRemoveClick_(e: MouseEvent): void;
    protected onContextmenu_(e: MouseEvent): void;
    protected onDisableSuggestionClick_(): void;
    protected getFaviconUrl_(url: string): string;
    protected getMostRecentTabFaviconUrl_(chip: ActionChip): string;
    private onActionChipClick_;
    protected recentTabChipTitle_(chip: ActionChip): string;
    protected getChipSubtitle_(chip: ActionChip): string;
    protected getChipTitle_(chip: ActionChip): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-action-chips': ActionChipsElement;
    }
}
