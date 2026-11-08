import './searchbox_icon.js';
import './searchbox_action.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { AutocompleteMatch, OmniboxPopupSelection } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { SideType } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { SearchboxIconElement } from './searchbox_icon.js';
export declare const kDefaultSelection: OmniboxPopupSelection;
type ActionEvent = CustomEvent<{
    event: PointerEvent | KeyboardEvent;
    actionIndex: number;
}>;
export interface SearchboxMatchElement {
    $: {
        icon: SearchboxIconElement;
        primaryText: HTMLElement;
        secondaryText: HTMLElement;
        remove: HTMLElement;
        separator: HTMLElement;
        focusIndicator: HTMLElement;
    };
}
export declare class SearchboxMatchElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /** Element's 'aria-label' attribute. */
        ariaLabel: {
            type: StringConstructor;
            reflect: boolean;
        };
        hasAction: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * Whether the secondary text is only shown while the match is selected
         * or hovered.
         */
        showSecondaryTextOnlyOnSelection: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * Whether the match features an image (as opposed to an icon or favicon).
         */
        hasImage: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        hasKeywordChip: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * Whether the match is an entity suggestion (with or without an image).
         */
        isEntitySuggestion: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        match: {
            type: ObjectConstructor;
        };
        /** Where the secondary text is rendered relative to the primary text. */
        secondaryTextPlacement: {
            type: StringConstructor;
            reflect: boolean;
            attribute: string;
        };
        selection: {
            type: ObjectConstructor;
        };
        /**
         * Index of the match in the autocomplete result. Used to inform embedder
         * of events such as deletion, click, etc.
         */
        matchIndex: {
            type: NumberConstructor;
        };
        showThumbnail: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        showEllipsis: {
            type: BooleanConstructor;
        };
        sideType: {
            type: NumberConstructor;
        };
        virtualFocusEnabled: {
            type: BooleanConstructor;
        };
        resultSequenceId: {
            type: NumberConstructor;
        };
        /**
         * Whether the secondary text is a URL, e.g. a page title followed by its
         * URL. The URL layout rules key on it.
         */
        secondaryTextIsUrl_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isTopChromeSearchbox_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isLensSearchbox_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        forceHideEllipsis_: {
            type: BooleanConstructor;
        };
        /** Rendered primary text based on autocomplete provided styling. */
        primaryTextHtml_: {
            type: StringConstructor;
        };
        /** Rendered secondary text based on autocomplete provided styling. */
        secondaryTextHtml_: {
            type: StringConstructor;
        };
        enableCsbMotionTweaks_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /** Remove button's 'aria-label' attribute. */
        removeButtonAriaLabel_: {
            type: StringConstructor;
        };
        removeButtonTitle_: {
            type: StringConstructor;
        };
        /** Used to separate the primary text from the secondary text. */
        separatorText_: {
            type: StringConstructor;
        };
        /** Rendered tail suggest common prefix. */
        tailSuggestPrefix_: {
            type: StringConstructor;
        };
    };
    accessor ariaLabel: string;
    accessor hasAction: boolean;
    accessor showSecondaryTextOnlyOnSelection: boolean;
    accessor hasImage: boolean;
    accessor hasKeywordChip: boolean;
    accessor isEntitySuggestion: boolean;
    accessor match: AutocompleteMatch;
    accessor secondaryTextPlacement: string;
    accessor selection: OmniboxPopupSelection;
    accessor matchIndex: number;
    accessor sideType: SideType;
    accessor showThumbnail: boolean;
    accessor showEllipsis: boolean;
    accessor virtualFocusEnabled: boolean;
    accessor resultSequenceId: number;
    private accessor secondaryTextIsUrl_;
    private accessor isTopChromeSearchbox_;
    private accessor isLensSearchbox_;
    private accessor forceHideEllipsis_;
    protected accessor primaryTextHtml_: TrustedHTML;
    protected accessor secondaryTextHtml_: TrustedHTML;
    protected accessor enableCsbMotionTweaks_: boolean;
    protected accessor removeButtonAriaLabel_: string;
    protected accessor removeButtonTitle_: string;
    protected accessor separatorText_: string;
    protected accessor tailSuggestPrefix_: string;
    private pageHandler_;
    constructor();
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    protected onKeywordExecuteAction_(e: ActionEvent): void;
    /**
     * containing index of the action that was removed as well as modifier key
     * presses.
     */
    protected onExecuteAction_(e: ActionEvent): void;
    private onMatchClick_;
    private onMatchFocusin_;
    private onMatchMouseDown_;
    protected onRemoveButtonClick_(e: MouseEvent): void;
    protected onRemoveButtonMousedown_(e: Event): void;
    private computeAriaLabel_;
    /**
     * Sanitizes .innerHTML from `renderFormattedString_()` through
     * `sanitizeInnerHtml` to ensure it only contains allowed tags.
     * @param innerHtml The .innerHTML from `renderFormattedString_()`
     * @return Sanitized TrustedHTML safe for rendering
     */
    private sanitizeInnerHtml_;
    private computePrimaryTextHtml_;
    private computeSecondaryTextHtml_;
    private computeHasAction_;
    private computeHasKeywordChip_;
    private computeHasImage_;
    private computeIsEntitySuggestion_;
    private computeSecondaryTextPlacement_;
    private computeRemoveButtonAriaLabel_;
    private computeSeparatorText_;
    private computeTailSuggestPrefix_;
    private computeShowEllipsis_;
    /**
     * Maps the color and weight of a FormattedString fragment to CSS classes.
     * Each suggest color gets a class named after its color type.
     * Other colors get no class and keep the default color.
     */
    private getFragmentCssClasses_;
    private createSpanWithClasses_;
    /**
     * Renders the text of `formattedString` based on its fragments. Each
     * fragment styles the text from its `startIndex` up to the next fragment's
     * `startIndex`, or to the end of the text for the last one.
     * @return A <span> with <span> children for each styled substring.
     */
    private renderFormattedString_;
    private getMatchSecondaryText_;
    protected getFocusIndicatorCssClass_(): string;
    protected getKeywordCssClass_(): string;
    protected getActionCssClass_(actionIndex: number): string;
    protected getRemoveCssClass_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-searchbox-match': SearchboxMatchElement;
    }
}
export {};
