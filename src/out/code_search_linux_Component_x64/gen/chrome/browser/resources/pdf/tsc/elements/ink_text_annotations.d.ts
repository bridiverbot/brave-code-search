import './ink_text_box.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { TextAnnotation, TextBoxRect } from '../constants.js';
import type { Viewport, ViewportRect } from '../viewport.js';
import type { InkTextBoxElement } from './ink_text_box.js';
import { TextBoxState } from './ink_text_box.js';
export interface InkTextAnnotationsElement {
    $: {
        container: HTMLElement;
        textBox: InkTextBoxElement;
    };
}
interface Placeholder {
    screenRect: TextBoxRect | null;
    rotations: number;
    label: string;
}
export declare class InkTextAnnotationsElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        viewport: {
            type: ObjectConstructor;
        };
        activeAnnotation_: {
            type: ObjectConstructor;
        };
        activePageDimensions_: {
            type: ObjectConstructor;
        };
        focusedIndex_: {
            type: NumberConstructor;
        };
        isPaste_: {
            type: BooleanConstructor;
        };
        placeholders_: {
            type: ArrayConstructor;
        };
    };
    accessor viewport: Viewport | null;
    protected accessor activeAnnotation_: TextAnnotation | null;
    protected accessor activePageDimensions_: ViewportRect | null;
    protected accessor focusedIndex_: number;
    protected accessor isPaste_: boolean;
    protected accessor placeholders_: Placeholder[];
    private annotations_;
    private eventTracker_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private onKeyDown_;
    pasteAnnotation(): Promise<void>;
    viewportChanged(): void;
    private updateAnnotations_;
    private getActiveWindowIndices_;
    private updatePlaceholders_;
    protected getStyles_(placeholder: Placeholder): string;
    protected onPlaceholderFocus_(e: FocusEvent): void;
    protected onContainerFocusout_(e: FocusEvent): void;
    protected onPlaceholderKeydown_(e: KeyboardEvent): Promise<void>;
    commitActiveAnnotation(): Promise<void>;
    blurActiveAnnotation(): void;
    protected onTextBoxStateChanged_(e: CustomEvent<TextBoxState>): void;
    private onInitializeTextBox_;
    protected onTextboxFocused_(e: CustomEvent<TextBoxRect>): void;
    protected getPlaceholderTabIndex_(placeholder: Placeholder): number;
    protected isPlaceholderAriaHidden_(placeholder: Placeholder): string;
    private onWheel_;
    private scrollToShowTextBox_;
}
declare global {
    interface HTMLElementTagNameMap {
        'ink-text-annotations': InkTextAnnotationsElement;
    }
}
export {};
