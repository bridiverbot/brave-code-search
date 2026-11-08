import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class TabFocusPageElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    private apiProxy_;
    private listenerIds_;
    private visibilityChangedListener_;
    private elementVisibilityChangedListener_;
    private isElementVisible_;
    static get properties(): {
        availableHeight: {
            type: NumberConstructor;
        };
        topic: {
            type: StringConstructor;
        };
        topics_: {
            type: ArrayConstructor;
        };
        undoTopic_: {
            type: StringConstructor;
        };
        isLoadingTopics: {
            type: BooleanConstructor;
        };
        errorMessage: {
            type: StringConstructor;
        };
        noMatchingTabs_: {
            type: BooleanConstructor;
        };
        needsPremium: {
            type: BooleanConstructor;
        };
        showFRE_: {
            type: BooleanConstructor;
        };
    };
    protected accessor topics_: string[];
    protected accessor topic: string;
    protected accessor undoTopic_: string;
    protected accessor noMatchingTabs_: boolean;
    protected accessor showFRE_: boolean;
    accessor availableHeight: number;
    accessor isLoadingTopics: boolean;
    accessor errorMessage: string;
    accessor needsPremium: boolean;
    constructor();
    protected onTopicInputChanged_(e: any): void;
    protected onFocusTabsClick_(): void;
    protected onUndoClick_(): void;
    private setShowFRE_;
    private getFocusTabs_;
    protected getNoMatchingTabsMessage_(): string;
    private maybeUpdateSuggestedTopics_;
    private onSuggestTopicsUpdated;
    protected getTopicId_(index: number): string;
    protected getTopicWithoutEmoji_(topic: string): string;
    protected getTopicEmoji_(topic: string): string;
    protected onTopicClick_(index: number): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected getTitle_(): string;
    protected getSubtitle_(): string;
    protected getSuggestedTopicsSubtitle_(): string;
    protected getSubmitButtonLabel_(): string;
    protected getUndoButtonLabel_(): string;
    protected getWindowCreatedMessage_(): string;
    protected getTopicInputPlaceholder_(): string;
    protected getFooterMessage_(): string;
    protected getLearnMoreLabel_(): string;
    protected getGoPremiumButtonLabel_(): string;
    protected getDismissButtonLabel_(): string;
    protected getPrivacyDisclaimerMessage_(): string;
    protected getEnableButtonLabel_(): string;
    protected onLearnMoreClick_(): void;
    protected onGoPremiumClick_(): void;
    protected onEnableTabFocusClick_(): void;
    protected onDismissErrorClick_(): void;
    private onElementVisibilityChanged_;
}
declare global {
    interface HTMLElementTagNameMap {
        'tab-focus-page': TabFocusPageElement;
    }
}
