import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface ToolbarChipButtonElement {
    $: {
        button: HTMLElement;
    };
}
/**
 * toolbar-chip-button is a pill-shaped button element. It is used for
 * toolbar buttons and location bar chips (e.g., app menu button, avatar
 * button, permission chips) that can have text, icons, or both.
 *
 * It is designed for 1:1 parity with C++ Native Views (e.g., LocationIconView):
 * - InkDrop Parity: Uses CSS ::before and ::after for independent hover
 *   and pressed transitions, matching C++ InkDrop behavior.
 * - Focus-Theft Survival: Supports is-menu-open attribute to lock the
 *   active state and prevent flicker when a native bubble steals focus.
 * - Native Interaction: Uses a native button and CSS :active for
 *   automatic accessibility, keyboard nav, and drag-to-cancel behavior.
 * - Label Animation: Supports sliding label transitions via animates-label
 *   and has-label attributes.
 *
 * Slots:
 * - prefix-icon: Icon before the text.
 * - Default slot: Text content.
 * - suffix-icon: Icon after the text.
 */
export declare class ToolbarChipButtonElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        ariaLabel: {
            type: StringConstructor;
        };
        ariaDescription: {
            type: StringConstructor;
        };
        tooltip: {
            type: StringConstructor;
        };
        ariaHasPopup: {
            type: StringConstructor;
        };
        ariaExpanded: {
            type: StringConstructor;
        };
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        outsetFocusRing: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        animatesLabel: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        buttonTabIndex: {
            type: NumberConstructor;
        };
        buttonRole: {
            type: StringConstructor;
        };
    };
    /** Accessibility label for the inner button. */
    accessor ariaLabel: string;
    /** Accessibility description for the inner button. */
    accessor ariaDescription: string;
    /** Tooltip text to show on hover. */
    accessor tooltip: string;
    /** Indicates that the button triggers a popup. */
    accessor ariaHasPopup: string | null;
    /** Indicates whether the popup triggered by the button is expanded. */
    accessor ariaExpanded: string | null;
    /** Whether the button is disabled. */
    accessor disabled: boolean;
    /**
     * Whether the label should animate (e.g., when the text content changes or
     * when the chip transitions between states).
     */
    accessor animatesLabel: boolean;
    accessor outsetFocusRing: boolean;
    accessor buttonTabIndex: number;
    /**
     * ARIA role for the inner button (e.g. 'img'). When unset, the inner button
     * keeps its implicit 'button' role.
     */
    accessor buttonRole: string | null;
    focus(): void;
    protected onPrefixIconSlotchange_(e: Event): void;
    protected onSuffixIconSlotchange_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toolbar-chip-button': ToolbarChipButtonElement;
    }
}
