import 'chrome://resources/cr_elements/icons.html.js';
import './icons.html.js';
import './viewer_zoom_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { FittingType } from '../constants.js';
import type { ViewerZoomButtonElement } from './viewer_zoom_button.js';
export interface ViewerZoomToolbarElement {
    $: {
        fitButton: ViewerZoomButtonElement;
    };
}
export declare class ViewerZoomToolbarElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        keyboardNavigationActive_: {
            type: BooleanConstructor;
        };
        visible_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    protected accessor keyboardNavigationActive_: boolean;
    private accessor visible_;
    firstUpdated(): void;
    isVisible(): boolean;
    private onFocus_;
    private onKeyUp_;
    private onPointerDown_;
    protected onFitButtonFabclick_(): void;
    /** Handle clicks of the fit-button. */
    fitToggle(): void;
    /** Handle the keyboard shortcut equivalent of fit-button clicks. */
    fitToggleFromHotKey(): void;
    /**
     * Handle forcing zoom via scripting to a fitting type.
     * @param fittingType Page fitting type to force.
     */
    forceFit(fittingType: FittingType): void;
    /**
     * Fire a 'fit-to-changed' {CustomEvent} with the given FittingType as detail.
     * @param fittingType to include as payload.
     */
    private fireFitToChangedEvent_;
    /** Handle clicks of the zoom-in-button. */
    protected onZoomInFabclick_(): void;
    /** Handle clicks of the zoom-out-button. */
    protected onZoomOutFabclick_(): void;
    show(): void;
    hide(): void;
    /**
     * Offsets the toolbar position so that it doesn't move if scrollbars appear.
     */
    shiftForScrollbars(hasScrollbars: {
        horizontal: boolean;
        vertical: boolean;
    }, scrollbarWidth: number): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-zoom-toolbar': ViewerZoomToolbarElement;
    }
}
