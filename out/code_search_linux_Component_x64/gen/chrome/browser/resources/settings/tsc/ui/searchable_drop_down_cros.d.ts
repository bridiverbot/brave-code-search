/**
 * @fileoverview 'cr-searchable-drop-down' implements a search box with a
 * suggestions drop down.
 *
 * If the update-value-on-input flag is set, value will be set to whatever is
 * in the input box. Otherwise, value will only be set when an element in items
 * is clicked.
 *
 * The |invalid| property tracks whether the user's current text input in the
 * dropdown matches the previously saved dropdown value. This property can be
 * used to disable certain user actions when the dropdown is invalid.
 *
 * Note: Since this element uses iron-dropdown, it is not permitted on
 * non-CrOS platforms. DO NOT add new uses of this element in non-CrOS Print
 * Preview.
 */
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_hidden_style.css.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_shared_style.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import '//resources/polymer/v3_0/iron-dropdown/iron-dropdown.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/paper-spinner/paper-spinner-lite.js';
import type { CrInputElement } from '//resources/cr_elements/cr_input/cr_input.js';
import type { IronDropdownElement } from '//resources/polymer/v3_0/iron-dropdown/iron-dropdown.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface SearchableDropDownElement {
    $: {
        search: CrInputElement;
        dropdown: IronDropdownElement;
    };
}
export declare class SearchableDropDownElement extends PolymerElement {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        autofocus: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
        };
        /**
         * Whether space should be left below the text field to display an error
         * message. Must be true for |errorMessage| to be displayed.
         */
        errorMessageAllowed: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
        };
        /**
         * When |errorMessage| is set, the text field is highlighted red and
         * |errorMessage| is displayed beneath it.
         */
        errorMessage: StringConstructor;
        /**
         * Message to display next to the loading spinner.
         */
        loadingMessage: StringConstructor;
        placeholder: StringConstructor;
        /**
         * Used to track in real time if the |value| in cr-searchable-drop-down
         * matches the value in the underlying cr-input. These values will differ
         * after a user types in input that does not match a valid dropdown
         * option. |invalid| is always false when |updateValueOnInput| is set to
         * true. This is because when |updateValueOnInput| is set to true, we are
         * not setting a restrictive set of valid options.
         */
        invalid: {
            type: BooleanConstructor;
            value: boolean;
            notify: boolean;
        };
        items: {
            type: ArrayConstructor;
            observer: string;
        };
        value: {
            type: StringConstructor;
            notify: boolean;
            observer: string;
        };
        label: {
            type: StringConstructor;
            value: string;
        };
        updateValueOnInput: BooleanConstructor;
        showLoading: {
            type: BooleanConstructor;
            value: boolean;
        };
        searchTerm_: StringConstructor;
        dropdownRefitPending_: BooleanConstructor;
        /**
         * Whether the dropdown is currently open. Should only be used by CSS
         * privately.
         */
        opened_: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
        };
    };
    autofocus: boolean;
    readonly: boolean;
    errorMessageAllowed: boolean;
    errorMessage: string;
    loadingMessage: string;
    placeholder: string;
    invalid: boolean;
    items: string[];
    value: string;
    label: string;
    updateValueOnInput: boolean;
    showLoading: boolean;
    private searchTerm_;
    private dropdownRefitPending_;
    private opened_;
    private openDropdownTimeoutId_;
    private resizeObserver_;
    private pointerDownListener_;
    connectedCallback(): void;
    ready(): void;
    disconnectedCallback(): void;
    /**
     * Enqueues a task to refit the iron-dropdown if it is open.
     */
    private enqueueDropdownRefit_;
    /**
     * Keeps the dropdown from expanding beyond the width of the search input when
     * its width is specified as a percentage.
     */
    private resizeDropdown_;
    private openDropdown_;
    private closeDropdown_;
    /**
     * Enqueues a task to open the iron-dropdown. Any pending task is canceled and
     * a new task is enqueued.
     */
    private enqueueOpenDropdown_;
    private onItemsChanged_;
    private onFocus_;
    private onMouseMove_;
    private onPointerDown_;
    private onKeyDown_;
    /**
     * Finds the currently selected dropdown item.
     * @return Currently selected dropdown item, or undefined if no item is
     *     selected.
     */
    private findSelectedItem_;
    /**
     * Finds the index of currently selected dropdown item.
     * @return Index of the currently selected dropdown item, or -1 if no item is
     *     selected.
     */
    private findSelectedItemIndex_;
    /**
     * Updates the currently selected element based on keyboard up/down movement.
     */
    private updateSelected_;
    private onInput_;
    private onSelect_;
    private filterItems_;
    private shouldShowErrorMessage_;
    private getErrorMessage_;
    /**
     * This makes sure to reset the text displayed in the dropdown to the actual
     * value in the cr-input for the use case where a user types in an invalid
     * option then changes focus from the dropdown. This behavior is only for when
     * updateValueOnInput is false. When updateValueOnInput is true, it is ok to
     * leave the user's text in the dropdown search bar when focus is changed.
     */
    private onBlur_;
    /**
     * If |updateValueOnInput| is true then any value is allowable so always set
     * |invalid| to false.
     */
    private updateInvalid_;
}
declare global {
    interface HTMLElementTagNameMap {
        'searchable-drop-down': SearchableDropDownElement;
    }
}
