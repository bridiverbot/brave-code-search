import '//resources/cr_components/searchbox/searchbox_input.js';
import type { SearchboxInputElement } from '//resources/cr_components/searchbox/searchbox_input.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { type Range as MojomRange } from '//resources/mojo/ui/gfx/range/mojom/range.mojom-webui.js';
import type { AdjustOmniboxTextForCopyResult } from '/shared/toolbar_ui_api.mojom-webui.js';
import type { OmniboxTextPortion, OmniboxViewState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
export interface ReadonlyOmniboxElement {
    $: {
        additionalText: HTMLElement;
        announcementDistraction: HTMLElement;
        dragTemplate: HTMLElement;
        inlineAutocomplete: HTMLElement;
        textContainer: HTMLElement;
        textContainerWrap: HTMLElement;
        textInput: SearchboxInputElement;
    };
}
export declare class ReadonlyOmniboxElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        browserOmniboxState: {
            type: ObjectConstructor;
        };
        omniboxViewState: {
            type: ObjectConstructor;
        };
        isComposing: {
            type: BooleanConstructor;
        };
        adjustedCopyResult: {
            type: ObjectConstructor;
        };
        isPopupOpen: {
            type: BooleanConstructor;
        };
    };
    accessor browserOmniboxState: OmniboxViewState;
    accessor omniboxViewState: OmniboxViewState;
    accessor isComposing: boolean;
    accessor adjustedCopyResult: AdjustOmniboxTextForCopyResult | null;
    accessor isPopupOpen: boolean;
    private focusRequestHandle_;
    private trackedElementManager_;
    private userText;
    private browserProxy_;
    private selectAllOnMouseRelease_;
    private didSelectAllOnClickOne_;
    private didUnelideOnClickOne_;
    private lastFocusAcquisition_;
    private isDraggingFromSelf_;
    private onSelectionChangeBound_;
    private mouseButtonDown_;
    private clientXAtMouseDown_;
    private clientYAtMouseDown_;
    private selectAllOnTouchRelease_;
    private clientXAtTouchDown_;
    private clientYAtTouchDown_;
    private activeTouchIds_;
    private wasMultiTouch_;
    private isHandlingFocusRequest_;
    private inputDelegate_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    hasFocus(): boolean;
    private onFocusRequest;
    private onInputBlur;
    private onInputFocus;
    private onInputMouseDown;
    private onInputMouseUp;
    private onInputMouseMove_;
    private isTouchOrPen_;
    private onInputPointerDown_;
    private onInputPointerUp_;
    private onInputPointerMove_;
    private onInputPointerCancel_;
    private updateTextPiecesFromUserText;
    private updateStateFromTextInput;
    private onInputKeyDown;
    private onInputKeyUp;
    private onContextMenu_;
    protected onSearchboxInputTextUpdated_(): void;
    private checkForSelectionChange_;
    getMojoSelection(): MojomRange;
    protected getDragFaviconUrl_(): string;
    protected getDragTitle_(): string;
    private populateDataTransfer_;
    private onDragStart_;
    private onInputCopy_;
    private onInputCut_;
    private onInputPaste_;
    private onInputCompositionstart_;
    private onInputCompositionend_;
    private updateAdjustedCopyResult_;
    private onSelectionChange_;
    private onDragEnd_;
    private onDragEnter_;
    private onDragLeave_;
    private onDragOver_;
    private onDrop_;
    private isAllSelected;
    isCaretAtStart(): boolean;
    isCaretAtEnd(): boolean;
    private selectAllBackwards;
    private selectAllForward;
    private onWrapFocus;
    private unelideAndUpdateSelection;
    private unelide;
    private selectWord;
    private sendInputToBrowser;
    private setSelection;
    private switchView_;
    static getTextPieceClasses(piece: OmniboxTextPortion): string;
    protected getInputPlaceholder_(): string | undefined;
    protected getInputClasses_(): string | undefined;
    protected getAriaLabel_(): string;
    protected getAriaKeyShortcut_(): string;
    private maybeClearAccessibilityPseudoFocus_;
    private readAnnouncement_;
    clearInput(): void;
}
interface AriaNotificationOptions {
    priority: 'normal' | 'high';
}
declare global {
    interface HTMLElementTagNameMap {
        'readonly-omnibox': ReadonlyOmniboxElement;
    }
    interface HTMLElement {
        ariaNotify?(message: string, options: AriaNotificationOptions): void;
    }
}
export {};
