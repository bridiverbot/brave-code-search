import './readonly_omnibox.js';
import './location_icon.js';
import './content_settings_icons.js';
import './page_action_icons.js';
import './selected_keyword.js';
import '/shared/permission_dashboard.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { PressHandler } from '/shared/toolbar_button.js';
import type { OverflowMenuItem } from '/shared/toolbar_ui_api.mojom-webui.js';
import type { LocationBarState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import type { PageActionIconsElement } from './page_action_icons.js';
import type { ReadonlyOmniboxElement } from './readonly_omnibox.js';
import type { ResponsiveControl } from './responsive_control.js';
export declare function createDefaultLocationBarState(): LocationBarState;
export interface LocationBarElement {
    $: {
        omnibox: ReadonlyOmniboxElement;
        pageActions: PageActionIconsElement;
    };
}
export declare class LocationBarElement extends CrLitElement implements ResponsiveControl {
    static readonly LOCATION_BAR_MIN_WIDTH = 330;
    static readonly LOCATION_BAR_PREFERRED_WIDTH = 400;
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        locationBarState: {
            type: ObjectConstructor;
        };
        isPopupOpen: {
            type: BooleanConstructor;
        };
        touchUi: {
            type: BooleanConstructor;
        };
    };
    accessor locationBarState: LocationBarState;
    accessor isPopupOpen: boolean;
    accessor touchUi: boolean;
    private browserProxy_;
    private focusState_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected onChipPointerenter_(): void;
    protected onChipPointerleave_(): void;
    protected onChipPointercancel_(): void;
    private onFocusin_;
    private onFocusout_;
    private onBlur_;
    /**
     * Calculates the maximum width of the location bar's content area, taking
     * into account the current size of all other controls on the toolbar and the
     * width of the window. Note that this is available width in a CSS sense, so,
     * e.g., exterior margins are not included in the return value. Requires the
     * location bar be displayed to accurately calculate this value.
     *
     * To achieve this without replicating CSS layout calculations (margins,
     * padding, gaps, child visibility, walking through children), it adds the
     * `ToolbarAppElement.getAvailableWidth()` to current width of the location
     * bar.
     *
     * Always returns a value of at least LOCATION_BAR_MIN_WIDTH, even if there's
     * not that much width available.
     */
    private getMaxAvailableWidth;
    shouldBeShown(): boolean;
    setToMinWidth(): void;
    setToPreferredWidth(): void;
    expandUpToPreferredWidth(): void;
    controlsToAddToOverflowMenu(): OverflowMenuItem[];
    setToMaxAvailableWidth(): void;
    private updateFocusWithin_;
    protected getClearButtonTitle_(): string;
    protected getClearButtonIcon_(): string;
    protected shouldShowClearButton_(): boolean;
    protected clearPressHandler_: PressHandler;
    private clearInput_;
    protected onClearClick_(e: MouseEvent): void;
    protected isPermissionDashboardVisible_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'location-bar': LocationBarElement;
    }
}
