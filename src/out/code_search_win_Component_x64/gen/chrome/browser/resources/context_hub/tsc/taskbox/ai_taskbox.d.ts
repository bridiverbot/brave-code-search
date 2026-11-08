import './todo_item.js';
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_tabs/cr_tabs.js';
import '//resources/cr_elements/icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { AutoTodoItem } from '../context_hub.mojom-webui.js';
export declare class AiTaskboxElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        autoTodosEnabled_: {
            type: BooleanConstructor;
        };
        showingReadingList_: {
            type: BooleanConstructor;
        };
        selectedTab_: {
            type: NumberConstructor;
        };
        todos: {
            type: ArrayConstructor;
        };
        completedTodos: {
            type: ArrayConstructor;
        };
        dismissedTodos: {
            type: ArrayConstructor;
        };
        isGeneratingGmailTodos_: {
            type: BooleanConstructor;
        };
        hasGmailGenerationError_: {
            type: BooleanConstructor;
        };
        hasGeneratedGmail_: {
            type: BooleanConstructor;
        };
        isCompletedExpanded_: {
            type: BooleanConstructor;
        };
        isDismissedExpanded_: {
            type: BooleanConstructor;
        };
        lastGmailGenerationTime_: {
            type: ObjectConstructor;
        };
        historyTodos: {
            type: ArrayConstructor;
        };
        completedHistoryTodos: {
            type: ArrayConstructor;
        };
        dismissedHistoryTodos: {
            type: ArrayConstructor;
        };
        isCompletedHistoryExpanded_: {
            type: BooleanConstructor;
        };
        isDismissedHistoryExpanded_: {
            type: BooleanConstructor;
        };
        tabTodos: {
            type: ArrayConstructor;
        };
        completedTabTodos: {
            type: ArrayConstructor;
        };
        dismissedTabTodos: {
            type: ArrayConstructor;
        };
        isGeneratingTabTodos_: {
            type: BooleanConstructor;
        };
        hasTabGenerationError_: {
            type: BooleanConstructor;
        };
        hasGeneratedTab_: {
            type: BooleanConstructor;
        };
        isCompletedTabExpanded_: {
            type: BooleanConstructor;
        };
        isDismissedTabExpanded_: {
            type: BooleanConstructor;
        };
        lastTabGenerationTime_: {
            type: ObjectConstructor;
        };
        readingListTodos: {
            type: ArrayConstructor;
        };
        feedbacks_: {
            type: ObjectConstructor;
        };
    };
    accessor todos: AutoTodoItem[] | null;
    accessor completedTodos: AutoTodoItem[] | null;
    accessor dismissedTodos: AutoTodoItem[] | null;
    accessor historyTodos: AutoTodoItem[] | null;
    accessor completedHistoryTodos: AutoTodoItem[] | null;
    accessor dismissedHistoryTodos: AutoTodoItem[] | null;
    accessor tabTodos: AutoTodoItem[] | null;
    accessor completedTabTodos: AutoTodoItem[] | null;
    accessor dismissedTabTodos: AutoTodoItem[] | null;
    accessor readingListTodos: AutoTodoItem[] | null;
    protected accessor feedbacks_: Map<string, boolean>;
    protected accessor autoTodosEnabled_: boolean;
    protected accessor showingReadingList_: boolean;
    protected accessor selectedTab_: number;
    protected accessor isGeneratingGmailTodos_: boolean;
    protected accessor hasGmailGenerationError_: boolean;
    protected accessor hasGeneratedGmail_: boolean;
    protected accessor isCompletedExpanded_: boolean;
    protected accessor isDismissedExpanded_: boolean;
    protected accessor lastGmailGenerationTime_: Date | null;
    protected accessor isCompletedHistoryExpanded_: boolean;
    protected accessor isDismissedHistoryExpanded_: boolean;
    protected accessor isGeneratingTabTodos_: boolean;
    protected accessor hasTabGenerationError_: boolean;
    protected accessor hasGeneratedTab_: boolean;
    protected accessor isCompletedTabExpanded_: boolean;
    protected accessor isDismissedTabExpanded_: boolean;
    protected accessor lastTabGenerationTime_: Date | null;
    private listenerIds_;
    private updateTimerId_;
    connectedCallback(): void;
    private fetchAutoTodos_;
    protected onFeedbackChanged_(e: CustomEvent<{
        todoId: string;
        liked: boolean | null;
    }>): void;
    disconnectedCallback(): void;
    protected onGeneralFeedbackClick_(): void;
    protected onGoToReadingListClick_(): void;
    protected onBackClick_(): void;
    protected onTabsSelectedChanged_(e: CustomEvent<{
        value: number;
    }>): void;
    protected getUnfinishedTabTodos_(): AutoTodoItem[];
    protected getShoppingCartTabTodos_(): AutoTodoItem[];
    protected getStaleTabTodos_(): AutoTodoItem[];
    protected onCloseAllStaleTabsClick_(): void;
    protected onCompletedExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onCompletedHistoryExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onCompletedTabExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onDismissedExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onDismissedHistoryExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onDismissedTabExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onGenerateGmailTodosClick_(): Promise<void>;
    protected onGenerateTabTodosClick_(): Promise<void>;
    protected getFormattedTimeAgo_(date: Date | null): string;
    protected onWorkspaceMenuClick_(e: Event): void;
    protected onBrowserMenuClick_(e: Event): void;
    protected onClearWorkspaceTodosClick_(): Promise<void>;
    protected onClearBrowserTodosClick_(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ai-taskbox': AiTaskboxElement;
    }
}
