import '../../check_mark_wrapper.js';
import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface ComboboxItem {
    key: string;
    label: string;
    imagePath?: string;
}
export interface ComboboxGroup {
    key: string;
    label: string;
    items: ComboboxItem[];
}
export interface CustomizeChromeComboboxElement {
    $: {
        input: HTMLElement;
        dropdown: HTMLElement;
    };
}
export declare class CustomizeChromeComboboxElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        defaultOptionLabel: {
            type: StringConstructor;
        };
        expanded_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        expandedGroups_: {
            type: ObjectConstructor;
        };
        highlightedElement_: {
            type: ObjectConstructor;
        };
        indentDefaultOption_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        items: {
            type: ArrayConstructor;
        };
        label: {
            type: StringConstructor;
        };
        rightAlignDropbox: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        selectedElement_: {
            type: ObjectConstructor;
        };
        value: {
            type: StringConstructor;
            notify: boolean;
        };
    };
    accessor defaultOptionLabel: string;
    protected accessor expanded_: boolean;
    private accessor expandedGroups_;
    private highlightableElements_;
    private accessor highlightedElement_;
    protected accessor indentDefaultOption_: boolean;
    accessor items: ComboboxGroup[] | ComboboxItem[];
    accessor label: string;
    accessor rightAlignDropbox: boolean;
    private lastHighlightWasByKeyboard_;
    private domObserver_;
    private accessor selectedElement_;
    accessor value: string | undefined;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    private computeIndentDefaultOption_;
    protected getAriaActiveDescendant_(): string | undefined;
    protected getDefaultItemAriaSelected_(): string;
    protected getGroupAriaExpanded_(groupIndex: number): string;
    protected getGroupIcon_(groupIndex: number): string;
    protected getInputLabel_(): string;
    private highlightElement_;
    protected isGroup_(item: ComboboxGroup | ComboboxItem): boolean;
    protected isGroupExpanded_(groupIndex: number): boolean;
    protected isItemSelected_(item: ComboboxItem): boolean;
    private onDomChange_;
    protected onDropdownClick_(event: MouseEvent): void;
    protected onDropdownPointerdown_(e: PointerEvent): void;
    protected onDropdownPointerevent_(event: PointerEvent): void;
    protected onDropdownPointermove_(event: PointerEvent): void;
    protected onDropdownPointerover_(event: PointerEvent): void;
    private onExpandedChange_;
    protected onGroupClick_(e: Event): void;
    protected onInputClick_(): void;
    protected onInputFocusout_(): void;
    private onKeydown_;
    private onKeydownCollapsedState_;
    private onKeydownExpandedState_;
    private onSelectedElementChanged_;
    private selectItemFromValue_;
    private selectItem_;
    private unselectSelectedItem_;
}
declare global {
    interface HTMLElementTagNameMap {
        'customize-chrome-combobox': CustomizeChromeComboboxElement;
    }
}
