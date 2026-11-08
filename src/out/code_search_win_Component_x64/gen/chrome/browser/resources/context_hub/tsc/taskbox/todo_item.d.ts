import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { Time } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { AutoTodoGroup, AutoTodoStatus } from '../context_hub.mojom-webui.js';
import type { SourceReference } from '../context_hub.mojom-webui.js';
export declare enum TodoItemVariant {
    DEFAULT = "default",
    TAB = "tab",
    HISTORY = "history"
}
export declare class TodoItemElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        id: {
            type: StringConstructor;
        };
        heading: {
            type: StringConstructor;
        };
        description: {
            type: StringConstructor;
        };
        status: {
            type: NumberConstructor;
        };
        actionableUrl: {
            type: StringConstructor;
        };
        sourceReferences: {
            type: ArrayConstructor;
        };
        score: {
            type: NumberConstructor;
        };
        lastActiveTimestamp: {
            type: ObjectConstructor;
        };
        groupType: {
            type: NumberConstructor;
        };
        expanded_: {
            type: BooleanConstructor;
        };
        liked: {
            type: BooleanConstructor;
        };
        variant: {
            type: StringConstructor;
        };
        disable_state_mgmt: {
            type: BooleanConstructor;
        };
        canActOnWeb_: {
            type: BooleanConstructor;
        };
    };
    accessor id: string;
    accessor heading: string;
    accessor description: string;
    accessor status: AutoTodoStatus;
    accessor actionableUrl: string;
    accessor sourceReferences: SourceReference[];
    accessor score: number | null;
    tabId: bigint | null;
    accessor lastActiveTimestamp: Time | null;
    accessor groupType: AutoTodoGroup;
    protected accessor expanded_: boolean;
    accessor liked: boolean | null;
    accessor variant: TodoItemVariant;
    accessor disable_state_mgmt: boolean;
    protected accessor canActOnWeb_: boolean;
    protected onExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected getThumbsUpIcon_(): string;
    protected getThumbsDownIcon_(): string;
    protected onThumbsUpClick_(e: Event): Promise<void>;
    protected onThumbsDownClick_(e: Event): Promise<void>;
    protected onThumbClick_(e: Event, like: boolean): Promise<void>;
    private updateStatus_;
    protected onCheckCircleClick_(e: Event): Promise<void>;
    protected onDismissClick_(e: Event): Promise<void>;
    protected onMarkActiveClick_(e: Event): Promise<void>;
    protected onMoreClick_(e: Event): void;
    protected onTaskMenuClick_(e: Event): void;
    protected onOpenTabClick_(e: Event): void;
    protected onRunTaskClick_(e: Event): Promise<void>;
    protected onContinueInTabsClick_(e: Event): Promise<void>;
    protected onContinueInGeminiClick_(e: Event): void;
    protected onCloseTabClick_(e: Event): void;
    private addToReadingList_;
    protected onSaveClick_(e: Event): Promise<void>;
    protected getReferences(): {
        label: string;
        url: string;
    }[];
    protected getOpenableReferenceUrls_(): string[];
    protected hasOpenableReferences_(): boolean;
    protected onActionsClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'todo-item': TodoItemElement;
    }
}
