import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class ViewerZoomButtonElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /** Index of the icon currently being displayed. */
        activeIndex: {
            type: NumberConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
        /**
         * Icons to be displayed on the FAB. Multiple icons should be separated
         * with spaces, and will be cycled through every time the FAB is clicked.
         */
        icons: {
            type: StringConstructor;
        };
        /**
         * Used to show the appropriate drop shadow when buttons are focused with
         * the keyboard.
         */
        keyboardNavigationActive: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        tooltips: {
            type: StringConstructor;
        };
        /**
         * Array version of the list of icons. The public property is a string for
         * convenience so that either a single icon or multiple icons can be
         * easily specified without a data binding in the parent's HTML template.
         */
        icons_: {
            type: ArrayConstructor;
        };
        tooltips_: {
            type: ArrayConstructor;
        };
    };
    accessor activeIndex: number;
    accessor disabled: boolean;
    accessor icons: string;
    accessor keyboardNavigationActive: boolean;
    accessor tooltips: string;
    private accessor icons_;
    private accessor tooltips_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    /**
     * @return Icon name for the currently visible icon.
     */
    protected computeVisibleIcon_(): string;
    /**
     * @return Tooltip for the currently visible icon.
     */
    protected computeVisibleTooltip_(): string;
    protected onClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-zoom-button': ViewerZoomButtonElement;
    }
}
